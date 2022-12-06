import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
//import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
// rating
import Rating from '@mui/material/Rating';
// dialog
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
// radio group
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// checkbox
import Checkbox from '@mui/material/Checkbox';

// for test
const catimg = { img: 'http://placekitten.com/g/200/200', title: 'cat' }
const itemData = new Array(9).fill(catimg)

function StandardImageList() {
    return (
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

function CollectionUI(props) {
    const { title } = props
    let hash = ''
    if (title === 'To Watch') hash = 'towatch'
    if (title === 'In Progress') hash = 'inprogress'
    if (title === 'Watched') hash = 'watched'

    return (
        <Box>
            <Typography variant='h4' gutterBottom align='left'>
                <Link href={hash}>{title}</Link>
            </Typography>
            <StandardImageList />
        </Box>
    )
}

function ItemUI(props) {
    const { title, img, description, date, myrate } = props

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // https://mui.com/material-ui/react-grid/
    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });
    return (
        <div>
            <Paper
                sx={{
                    p: 2,
                    margin: 'auto',
                    maxWidth: 500,
                    flexGrow: 1,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
            >
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <Img alt={title} src={img} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    {title}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {description}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {date}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                    <Link onClick={handleClickOpen}>Edit</Link> / <Link aria-disabled>Delete</Link>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                                <Rating name='size-small' value={myrate} size='small' readOnly />
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>My Review</DialogTitle>
                <DialogContent>
                    {/* radio group */}
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="To Watch" control={<Radio />} label="To Watch" />
                            <FormControlLabel value="In Progress" control={<Radio />} label="In Progress" />
                            <FormControlLabel value="Watched" control={<Radio />} label="Watched" />
                            <FormControlLabel value="Dropped" control={<Radio />} label="Dropped" />
                        </RadioGroup>
                    </FormControl>
                    {/* rating */}
                    <Rating name='size-medium' defaultValue={3.0} size='medium' />
                    {/* notes */}
                    <DialogContentText>
                        Brief note:
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        fullWidth
                        variant="standard"
                    />
                    <FormControlLabel control={<Checkbox />} label="This is a PRIVATE note." />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Done</Button>
                </DialogActions>
            </Dialog>
        </div>
    )

    {/* 
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tortor massa, egestas a pulvinar a, feugiat tincidunt dolor. Cras viverra convallis metus, ut pellentesque urna rhoncus facilisis.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
    */}
}

function ItemList(props) {
    const { listData } = props

    return (
        <Stack spacing={0}>
            {listData.map((i) => (
                <ItemUI title={i.title} img={i.img} description={i.description} myrate={i.myrate} date={i.date} />
            ))}
        </Stack>
    )
}

function LibraryTab() {
    return (
        <div>
            <CollectionUI title='To Watch' />
            <CollectionUI title='In Progress' />
            <CollectionUI title='Watched' />
        </div>
    )
}

export { CollectionUI, ItemList, LibraryTab }