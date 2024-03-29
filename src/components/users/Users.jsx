import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Users({users}) {
  console.log(users);
  return (
    <div>
      <h2>Users</h2>
      <ul
        style={{
          display: "grid",
          gap: "5px",
          width: "500px",
        }}
      >
        {users.map((user) => (
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "4px 10px",
              border: "1px solid lightblue",
              borderRadius: "4px",
              width: "fitcontent",
            }}
            key={user.id}
          >
            {user.name}
            <Link to={`/alboms/userId=${user.id}`}><Button variant="contained">Alboms</Button></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
