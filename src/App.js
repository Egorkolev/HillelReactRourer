import "./App.css";
import React from "react";
import Users from "./components/users/Users";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Alboms from "./components/alboms/Alboms";
import AlbomImg from "./components/albomImg/AlbomImg";

function App() {
  const [users, setUsers] = React.useState([]);
  console.log(users);

  const getUserData = async () => {
    try {
      const respons = await axios.request({
        url: "https://jsonplaceholder.typicode.com/users",
        method: "GET",
      });
      setUsers(respons.data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Users users={users} />} />
        <Route path="/alboms/:userId" element={<Alboms />} />
        <Route path="/alboms/albomImg/:albumId" element={<AlbomImg />} />
      </Routes>
    </div>
  );
}

export default App;
