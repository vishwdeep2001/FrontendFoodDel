import { Delete } from '@mui/icons-material'
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
export const EventCard = () => {
  return (
    <div>
        <Card sx={{width:345}}>
            <CardMedia  sx={{height:345}} image='https://cdn.pixabay.com/photo/2017/01/04/21/00/fireworks-1953253_640.jpg'></CardMedia>
            <CardContent >
                <Typography variant="h5" >
                    Indian Fast Food
                </Typography>
                <Typography variant="body2" >
                    50% off on your first order
                </Typography>
                <div className='py-2 space-y-2'>
                    <p>{"Mumbai"}</p>
                    <p className='text-sm text-blue-600'>12:00 PM Apr 15 2024</p>
                    <p className='text-sm text-red-600'>12:00 AM Apr 30 2024</p>
                </div>
            </CardContent>
           {true && <CardActions>
                <IconButton >
                    <DeleteIcon />

                </IconButton>
            </CardActions>}
        </Card>
    </div>
  )
}
