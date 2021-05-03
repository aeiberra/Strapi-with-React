import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: 345,
    },
    media: {
        height: 140,
    },
});

const API_URL = 'http://localhost:1337';

const formatImageUrl = (url) => `${API_URL}${url}`;

export default ({imageUrl, imageName, descriptions, likes, author}) => {
    const classes = useStyles();

    return (
        <div className="Post">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={formatImageUrl(imageUrl)}
                        title={imageName}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {descriptions}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <span>{likes}</span>
                    <IconButton aria-label="Author" className="Card-Author">
                        <span>{author}</span>
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}
