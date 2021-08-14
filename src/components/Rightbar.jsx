import {
  Avatar,
  Chip,
  ImageList,
  ImageListItem,
  Typography,
} from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { Container, makeStyles } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
    height: "50%",
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link: {
    marginRight: theme.spacing(3),
    color: "#555",
    fontSize: 16,
  },
}));

function Rightbar() {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={6} style={{ marginBottom: 20 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://pixabay.com/photos/man-black-portrait-male-black-man-2442565/"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://cdn.pixabay.com/photo/2015/11/07/11/11/woman-1030895__340.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://cdn.pixabay.com/photo/2015/09/22/14/34/lion-951778__340.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://cdn.pixabay.com/photo/2017/12/01/08/02/paint-2990357__340.jpg"
        />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={2}>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/breakfast.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/camera.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/honey.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/vegetables.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/bike.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/burgers.jpg"
            alt=""
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title} gutterBottom>
        Categories
      </Typography>
      <Link href="#" className={classes.link} variant="body2">
        Sport
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Food
      </Link>
      <Divider flexItem style={{ marginBottom: 5 }} />
      <Link href="#" className={classes.link} variant="body2">
        Movies
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Science
      </Link>

      <Typography
        className={classes.title}
        gutterBottom
        style={{ marginBottom: 20 }}
      >
        Friends
      </Typography>
      <Chip
        avatar={
          <Avatar
            alt="Natacha"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
        }
        label="Mike Kim"
      />
    </Container>
  );
}

export default Rightbar;
