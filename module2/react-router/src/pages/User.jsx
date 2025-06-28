import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function User() {
  const [data, setData] = useState(null);

  const params = useParams();
  const id = params.userId;

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const userData = await response.json();
    setData(userData);
  }

  return (
    <div>
      {" "}
      {data ? (
        <div>
          {" "}
          <p> Name: {data.name}</p> <p> Username: {data.username}</p>
          <p> Email: {data.email}</p>
        </div>
      ) : (
        <p> Loading...</p>
      )}
    </div>
  );
}

export default User;
