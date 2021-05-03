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

const post = {
    "id": 1,
    "descriptions": "Working on farm",
    "likes": 20,
    "author": {
        "id": 1,
        "username": "AlanIberra",
        "email": "alan@vicinosoftware.com",
        "provider": "local",
        "confirmed": true,
        "blocked": false,
        "role": 1,
        "created_at": "2021-05-03T00:01:56.995Z",
        "updated_at": "2021-05-03T00:01:57.010Z"
    },
    "created_at": "2021-05-02T23:06:56.135Z",
    "updated_at": "2021-05-03T00:01:57.003Z",
    "image": {
        "id": 1,
        "name": "cropped-Tractor.jpeg",
        "alternativeText": "",
        "caption": "",
        "width": 2000,
        "height": 1200,
        "formats": {
            "thumbnail": {
                "name": "thumbnail_cropped-Tractor.jpeg",
                "hash": "thumbnail_cropped_Tractor_546ae40f61",
                "ext": ".jpeg",
                "mime": "image/jpeg",
                "width": 245,
                "height": 147,
                "size": 9.3,
                "path": null,
                "url": "/uploads/thumbnail_cropped_Tractor_546ae40f61.jpeg"
            },
            "large": {
                "name": "large_cropped-Tractor.jpeg",
                "hash": "large_cropped_Tractor_546ae40f61",
                "ext": ".jpeg",
                "mime": "image/jpeg",
                "width": 1000,
                "height": 600,
                "size": 114.08,
                "path": null,
                "url": "/uploads/large_cropped_Tractor_546ae40f61.jpeg"
            },
            "medium": {
                "name": "medium_cropped-Tractor.jpeg",
                "hash": "medium_cropped_Tractor_546ae40f61",
                "ext": ".jpeg",
                "mime": "image/jpeg",
                "width": 750,
                "height": 450,
                "size": 69.49,
                "path": null,
                "url": "/uploads/medium_cropped_Tractor_546ae40f61.jpeg"
            },
            "small": {
                "name": "small_cropped-Tractor.jpeg",
                "hash": "small_cropped_Tractor_546ae40f61",
                "ext": ".jpeg",
                "mime": "image/jpeg",
                "width": 500,
                "height": 300,
                "size": 34.72,
                "path": null,
                "url": "/uploads/small_cropped_Tractor_546ae40f61.jpeg"
            }
        },
        "hash": "cropped_Tractor_546ae40f61",
        "ext": ".jpeg",
        "mime": "image/jpeg",
        "size": 364.31,
        "url": "/uploads/cropped_Tractor_546ae40f61.jpeg",
        "previewUrl": null,
        "provider": "local",
        "provider_metadata": null,
        "created_at": "2021-05-02T23:04:31.536Z",
        "updated_at": "2021-05-02T23:04:31.547Z"
    }
};

const API_URL = 'http://localhost:1337';

const formatImageUrl = (url) => `${API_URL}${url}`;

export default () => {
    const classes = useStyles();

    const imageUrl = post.image.url;
    const imageName = post.image.name;
    const descriptions = post.descriptions;
    const likes = post.likes;
    const author = post.author.username;

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
