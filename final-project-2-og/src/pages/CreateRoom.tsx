import React from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router";
import useChatStore from "../store/chatStore";

type RoomFormData = {
  name: string;
};

const CreateRoom: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RoomFormData>();
  const navigate = useNavigate();

  const onSubmit = async (data: RoomFormData) => {
    const { data: newRoom, error } = await supabase
      .from("rooms")
      .insert([{ name: data.name }])
      .select();
    if (error) {
      console.error("Error creating room:", error.message);
    } else if (newRoom && newRoom.length > 0) {
      const room = newRoom[0];
      useChatStore.getState().setCurrentRoom({ id: room.id, name: room.name });
      reset();
      navigate("/");
    }
  };

  return (
    <div className="create-room-container">
      <div className="create-room">
        <h2>Create a New Room</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              placeholder="Enter room name..."
              {...register("name", { required: "Room name is required" })}
            />
            {errors.name && <p className="error-text">{errors.name.message}</p>}
          </div>
          <button type="submit">Create Room</button>
        </form>
      </div>
    </div>
  );
};

export default CreateRoom;
