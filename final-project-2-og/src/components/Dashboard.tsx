import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./Navbar";
import ChatRoom from "../pages/ChatRoom";
import RoomList from "../pages/RoomList";
import CreateRoom from "../pages/CreateRoom";

interface DashboardProps {
  user: {
    id: string;
    email: string;
  };
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  return (
    <section className="chat-app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ChatRoom user={user} />} />
          <Route path="/rooms" element={<RoomList />} />
          <Route path="/create-room" element={<CreateRoom />} />
        </Routes>
      </Router>
    </section>
  );
};

export default Dashboard;
