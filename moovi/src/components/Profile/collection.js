import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { textAlign } from '@mui/system';

// for test
const catimg = {img: 'http://placekitten.com/g/200/200', title: 'cat'}
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

function CollectionUI(props){
    const { title } = props

    return (
        <Box>
            <Typography variant='H3' gutterBottom align='left'>
                {title}
            </Typography>
            <StandardImageList />
        </Box>
    )
}

export default CollectionUI