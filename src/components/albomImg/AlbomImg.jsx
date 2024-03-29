import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

function AlbomImg() {
  const [albomsImg, setAlbomsImg] = React.useState([]);
  const { albumId } = useParams();
  console.log(albomsImg, albumId);

  const getUserAlboms = async () => {
    try {
      const respons = await axios.request({
        url: `https://jsonplaceholder.typicode.com/photos?${albumId}`,
        method: "GET",
      });
      setAlbomsImg(respons.data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getUserAlboms();
  }, [albumId]);
  return (
    <div>
      <h2>Images</h2>
      {albomsImg.map((img) => (
        <Card key={img.id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={img.url}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {`Album Id: ${img.albumId}`}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {img.title}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default AlbomImg;
