import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Alboms() {
  const [alboms, setAlboms] = React.useState([]);
  const { userId } = useParams();
  console.log(alboms, userId);

  const getUserAlboms = async () => {
    try {
      const respons = await axios.request({
        url: `https://jsonplaceholder.typicode.com/albums?${userId}`,
        method: "GET",
      });
      setAlboms(respons.data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getUserAlboms();
  }, [userId]);
  return (
    <div>
      <h2>Alboms</h2>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {alboms.map((albom) => (
          <ListItem key={albom.id}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={albom.title}
              secondary={`Albom Id: ${albom.id}`}
            />
            <Link to={`/alboms/albomImg/albumId=${albom.userId}`}>
              <Button variant="contained">Image</Button>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Alboms;
