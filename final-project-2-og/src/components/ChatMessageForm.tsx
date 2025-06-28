import React from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../supabaseClient";
import useChatStore from "../store/chatStore";

type MessageFormData = {
  content: string;
};

interface ChatMessageFormProps {
  user: {
    id: string;
    email: string;
  };
}

const ChatMessageForm: React.FC<ChatMessageFormProps> = ({ user }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MessageFormData>();
  const { currentRoom } = useChatStore();

  const onSubmit = async (data: MessageFormData) => {
    if (!currentRoom) return;
    const { error } = await supabase
      .from("messages")
      .insert([
        {
          content: data.content,
          user_id: user.id,
          email: user.email,
          room_id: currentRoom.id,
        },
      ])
      .select();
    if (error) {
      console.error("Error sending message:", error.message);
    } else {
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder={
          errors.content ? errors.content.message : "Type your message..."
        }
        {...register("content", { required: "Message is required" })}
        className="conv-input"
      />
      <button type="submit" className="conv-button">
        <i className="material-icons">send</i>
      </button>
    </form>
  );
};

export default ChatMessageForm;
