import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 350,
    width: 500,
    [theme.breakpoints.down("sm")]: {
      height: 170,
      width: 300,
    },
  },
}));

function Post() {
  const classes = useStyle();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.pixabay.com/photo/2021/03/15/05/38/girl-6096180__340.jpg"
          title="My Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            My first Post
          </Typography>
          <Typography variant="body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            esse eum repellat fugit corrupti tempora reiciendis ea quaerat ipsa,
            ratione voluptatem voluptates praesentium omnis, possimus blanditiis
            nulla cumque iste nemo. ratione voluptatem voluptates praesentium
            omnis, possimus blanditiis nulla cumque iste nemo.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
