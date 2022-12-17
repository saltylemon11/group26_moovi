import React from "react";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function ListCommon() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Demo>
          <List>
            {generate(
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ListAltIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Movie List"
                  secondary={"Add some description..."}
                />
              </ListItem>
            )}
          </List>
        </Demo>
      </Grid>
    </Grid>
  );
}

function ListTimeline() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Typography variant="h4" gutterBottom align="left">
        Timeline
      </Typography>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Alice Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Alice watched The Walking Dead"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Bob Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Bob wants to watch Star Wars: Andor"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Lorem Ipsum
              </Typography>
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Cindy dropped Breaking Bad"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Integer tortor massa
              </Typography>
              {" Cras viverra convallis metus, ut pellentesque urna rhoncus…"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}

function ImageListWithText(props) {
  const { listData } = props;
  return (
    <ImageList sx={{ width: 450, height: 500 }}>
      {listData.map((m) => (
        <ImageListItem key={m.img}>
          <img src={m.img} alt={m.title} loading="lazy" />
          <ImageListItemBar title={m.title} position="below" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export { ListCommon, ListTimeline, ImageListWithText };
