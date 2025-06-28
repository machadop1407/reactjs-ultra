import React from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../supabaseClient";
import { Link } from "react-router";
import useChatStore from "../store/chatStore";
import { Room } from "../store/chatStore";

const fetchRooms = async (): Promise<Room[]> => {
  const { data, error } = await supabase
    .from("rooms")
    .select("*")
    .order("created_at", { ascending: true });
  if (error) throw new Error(error.message);
  return data as Room[];
};

const RoomList: React.FC = () => {
  const {
    data: rooms,
    error,
    isLoading,
  } = useQuery<Room[], Error>({
    queryKey: ["rooms"],
    queryFn: fetchRooms,
    refetchOnWindowFocus: false,
  });

  const setCurrentRoom = useChatStore((state) => state.setCurrentRoom);

  const handleJoinRoom = (room: Room) => {
    setCurrentRoom(room);
  };

  if (isLoading) return <p className="loader-text">Loading rooms...</p>;
  if (error)
    return <p className="loader-text">Error loading rooms: {error.message}</p>;

  return (
    <div className="room-list">
      <h2>Available Rooms</h2>
      <ul>
        {rooms?.map((room) => (
          <li key={room.id}>
            <Link to="/" onClick={() => handleJoinRoom(room)}>
              {room.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomList;
