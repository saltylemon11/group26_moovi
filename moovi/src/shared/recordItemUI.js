import React from "react";
import { styled } from '@mui/material/styles'
import { Stack, Paper, Grid, ButtonBase, Typography, formControlLabelClasses } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { Button, Radio, RadioGroup } from '@mui/material'
import { FormControl, FormLabel, FormControlLabel } from '@mui/material'
import { Link } from '@mui/material'
import { Rating } from "@mui/material"
import { TextField } from '@mui/material'
import { Checkbox } from "@mui/material"
import { Chip } from "@mui/material"
// redux components
import { recordSelector, clearState } from "../slices/recordSlice";
import { useDispatch, useSelector } from "react-redux";
import { updateRecord, deleteRecord } from "../services/record";
// user authz
import { useAuthValue } from '../authContext';
// moment.js
import moment from 'moment'

function RecordItemUI(props) {
    //console.log(props)
    const { movieId, status, title, img, comment, date, rating, isPrivate } = props

    const [open, setOpen] = React.useState(false);
    const [newStatus, setNewStatus] = React.useState(status)
    const [newRate, setNewRate] = React.useState(rating)
    const [newComment, setNewComment] = React.useState(comment)
    const [newIsPrivate, setNewIsPrivate] = React.useState(isPrivate)


    const dispatch = useDispatch()
    const { isFetching, isSuccess, isError, errorMessage } = useSelector(recordSelector)

    const { currentUser } = useAuthValue()

    //console.log(currentUser.email)

    React.useEffect(() => {
        if (isSuccess) {
            dispatch(clearState())
            window.parent.location.reload()
        }
        if (isError) {
            // TODO: errmsg snackbar
            console.log(errorMessage)
            dispatch(clearState())
        }
    }, [isSuccess, isError])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChipClick = () => {
        //console.info('You clicked a chip.')
    }

    const handleRadioChange = (e) => {
        setNewStatus(e.target.value)
    }

    const handleRatingChange = (e) => {
        setNewRate(e.target.value.toString())
    }

    const handleTextChange = (e) => {
        setNewComment(e.target.value)
    }

    // const { title, img, comment, date, rating, isPrivate } = props
    const handleSubmit = () => {
        setOpen(false)
        dispatch(updateRecord({
            email: currentUser.email, // readonly
            movieId: movieId, // readonly
            status: newStatus,
            rating: newRate,
            comment: newComment,
            date: moment().format("YYYY-MM-DD"),
            isPrivate: newIsPrivate
        }))

    }

    // https://mui.com/material-ui/react-grid/
    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });
    return (
        <div key={title}>
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
                                    {comment}
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
                                <Rating name='size-small' value={Number(rating)} size='small' readOnly />
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            {/* Edit my review */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>My Review</DialogTitle>
                <DialogContent>
                    {/* categories */}
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={newStatus}
                            onChange={handleRadioChange}
                        >
                            <FormControlLabel value="1" control={<Radio />} label="To Watch" />
                            <FormControlLabel value="2" control={<Radio />} label="In Progress" />
                            <FormControlLabel value="3" control={<Radio />} label="Watched" />
                            <FormControlLabel value="4" control={<Radio />} label="Dropped" />
                        </RadioGroup>
                    </FormControl>
                    {/* rating */}
                    <Rating name='size-medium' value={Number(newRate)} size='medium' onChange={handleRatingChange} />
                    {/* Tags */}
                    {/*
                    <Typography>My Tags:</Typography>
                    <TextField
                        margin="dense"
                        width='25ch'
                        variant="outlined"
                        size='small'
                    />
                    <Stack direction='row' spacing={1}>
                        <Chip label='Comedy' size='small' variant='outlined' onClick={handleChipClick} />
                        <Chip label='Looooovit!' size='small' variant='outlined' onClick={handleChipClick} />
                        <Chip label='Cat Lovers Best 100' size='small' variant='outlined' onClick={handleChipClick} />
                    </Stack>
            */}
                    {/* notes */}
                    <DialogContentText>
                        Brief note:
                    </DialogContentText>
                    <TextField
                        value={newComment}
                        autoFocus
                        margin="dense"
                        multiline
                        fullWidth
                        variant="outlined"
                        onChange={handleTextChange}
                    />
                    {/*<FormControlLabel control={<Checkbox />} value={newIsPrivate} label="This is a PRIVATE note." />*/}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Done</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default RecordItemUI