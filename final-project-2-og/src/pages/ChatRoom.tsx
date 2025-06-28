import React from "react";
import ChatMessages from "../components/ChatMessages";
import ChatMessageForm from "../components/ChatMessageForm";
import useChatStore from "../store/chatStore";

interface User {
  id: string;
  email: string;
}

interface ChatRoomProps {
  user: User;
}

const ChatRoom: React.FC<ChatRoomProps> = ({ user }) => {
  const { currentRoom } = useChatStore();

  if (!currentRoom) {
    return <p>Please join or create a room first.</p>;
  }

  return (
    <div className="conv">
      <div className="conv-title">
        {currentRoom.name} — {user.email}
      </div>
      <div className="conv-timeline">
        <ChatMessages user={user} />
      </div>
      <div className="conv-send-message">
        <ChatMessageForm user={user} />
      </div>
    </div>
  );
};

export default ChatRoom;
