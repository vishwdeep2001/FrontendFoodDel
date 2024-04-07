import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = () => {
  return (
   <Card className='flex justify-between items-center p-5'>
    <div className='flex items-center space-x-5'>
        <img className='h-16 w-16 ' src='https://cdn.pixabay.com/photo/2022/06/27/05/38/spices-7286739_640.jpg'>

        </img>
        <div>
            <p>Biryani</p>
            <p>$399</p>

        </div>
    </div>
    <div>
        <Button desabled className='cursor-not-allowed'>Completed</Button>
    </div>
   </Card>
  )
}
