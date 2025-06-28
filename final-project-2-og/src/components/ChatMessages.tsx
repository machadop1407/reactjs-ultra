// src/components/ChatMessages.tsx
import React, { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../supabaseClient";
import useChatStore from "../store/chatStore";

interface Message {
  id: number;
  content: string;
  user_id: string;
  email: string; // used here as the username
  created_at: string;
  room_id: number;
}

interface ChatMessagesProps {
  user: {
    id: string;
    email: string;
  };
}

const fetchMessages = async (roomId: number): Promise<Message[]> => {
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("room_id", roomId)
    .order("created_at", { ascending: true });
  if (error) {
    throw new Error(error.message);
  }
  return data as Message[];
};

const ChatMessages: React.FC<ChatMessagesProps> = ({ user }) => {
  const queryClient = useQueryClient();
  const { currentRoom } = useChatStore();
  const roomId = currentRoom ? currentRoom.id : null;

  const {
    data: messages,
    error,
    isLoading,
  } = useQuery<Message[], Error>({
    queryKey: ["messages", roomId],
    queryFn: () =>
      roomId === null ? Promise.resolve([]) : fetchMessages(roomId),
    refetchOnWindowFocus: false,
    enabled: roomId !== null,
  });

  useEffect(() => {
    if (!roomId) return;
    const channel = supabase.channel("messages-channel");

    channel
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        (payload) => {
          const newMessage = payload.new as Message;
          if (newMessage.room_id === roomId) {
            console.log("Change received!", payload);
            queryClient.setQueryData<Message[]>(
              ["messages", roomId],
              (oldMessages) => {
                return oldMessages
                  ? [...oldMessages, newMessage]
                  : [newMessage];
              }
            );
          }
        }
      )
      .subscribe((status) => {
        console.log("Subscription status:", status);
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, [queryClient, roomId]);

  if (isLoading) return <p className="loader-text">Loading messages...</p>;
  if (error)
    return (
      <p className="loader-text">Error loading messages: {error.message}</p>
    );

  return (
    <>
      {messages?.map((msg) => {
        const isOwnMessage = msg.user_id === user.id;
        const itemClass = isOwnMessage
          ? "conv-message-item conv-message-item--right"
          : "conv-message-item conv-message-item--left";

        const date = new Date(msg.created_at);
        const formattedTime = `${date
          .getHours()
          .toString()
          .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;

        return (
          <div key={msg.id} className={itemClass}>
            <div className="conv-message-value">{msg.content}</div>
            <div className="conv-message-details">{formattedTime}</div>
            <div className="conv-message-details">{msg.email}</div>
          </div>
        );
      })}
    </>
  );
};

export default ChatMessages;
