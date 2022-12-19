import React from "react";
import { styled } from '@mui/material/styles'
import { Paper, Grid, ButtonBase, Typography, formControlLabelClasses } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { Button, Radio, RadioGroup } from '@mui/material'
import { FormControl, FormLabel, FormControlLabel } from '@mui/material'
import { Link } from '@mui/material'
// redux components
import { recordSelector, clearState } from "../slices/recordSlice";
import { useDispatch, useSelector } from "react-redux";
import { setRecord, deleteRecord } from "../services/record";
import { useAuthValue } from '../authContext';
import moment from 'moment'


// search result item UI
const SearchItemUI = (props) => {
    const { id, image, title, titleType, year } = props

    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState('')

    const dispatch = useDispatch()
    const { isFetching, isSuccess, isError, errorMessage } = useSelector(recordSelector)

    const { currentUser } = useAuthValue()

    //console.log(currentUser.email)

    React.useEffect(()=>{
        if (isSuccess) {
            dispatch(clearState())
        }
        if (isError) {
            // TODO: errmsg snackbar
            console.log(errorMessage)
            dispatch(clearState())
        }
    }, [isSuccess, isError])

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmit = () => {
        setOpen(false)
        // id is sth. like '/tt/title12345/'
        dispatch(setRecord({
            email: currentUser.email,
            movieId: id.split('/')[2],
            thumbnail: image.url,
            title: title,
            status: value,
            rating: "0.0", // default
            comment: "",
            date: moment().format("YYYY-MM-DD"),
            isPrivate: false,
            season: "1", // default
            episode: "1" // default
        }))
    }

    const handleRadioChange = (e) => {
        setValue(e.target.value)
    }

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%'
    })

    return (
        <div key={id}>
            <Paper sx={{ p: 2, margin: 'auto', maxWidth: '70%', flexGrow: 1, backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff' }}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <Img alt={title} src={image.url} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction='column' spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component='div'>
                                    {title}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {year}·{titleType}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography sx={{ cursor: 'pointer' }} variant='body2'>
                                    {isSuccess
                                    ?<Link>In my library</Link>
                                    :<Link onClick={handleClickOpen}>Add to Library</Link>}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            {/* review */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>My Review</DialogTitle>
                <DialogContent>
                    <FormControl>
                        <FormLabel id='radio-buttons-group'></FormLabel>
                        <RadioGroup row aria-labelledby="row-radio-buttons-group" name='row-radio-buttons-group' value={value} onChange={handleRadioChange}>
                            <FormControlLabel value='1' control={<Radio />} label="To Watch" />
                            <FormControlLabel value='2' control={<Radio />} label="In Progress" />
                            <FormControlLabel value='3' control={<Radio />} label="Watched" />
                            <FormControlLabel value='4' control={<Radio />} label="Dropped" />
                        </RadioGroup>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Done</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export { SearchItemUI }