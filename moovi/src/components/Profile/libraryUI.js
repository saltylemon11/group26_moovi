import React from 'react'
import { Box, Typography } from '@mui/material'
import { StandardImageList } from './collection'
import recordTypes from '../../shared/recordTypes'

function LibraryUI(props) {
    const { data } = props
    return (
        <div>
            <CollectionUI title='To Watch' data={data.filter(i => i.status === recordTypes.TO_WATCH)} />
            <CollectionUI title='In Progress' data={data.filter(i => i.status === recordTypes.IN_PROGRESS)} />
            <CollectionUI title='Watched' data={data.filter(i => i.status === recordTypes.WATCHED)} />
        </div>
    )
}

function CollectionUI(props) {
    const { title, data } = props
    const itemData = data.map(i => {
        return {
            img: i.thumbnail,
            title: i.title
        }
    })

    return (
        <Box>
            <Typography variant='h4' gutterBottom align='left'>
                {title}
            </Typography>
            <StandardImageList data={itemData} />
        </Box>
    )
}

export default LibraryUI