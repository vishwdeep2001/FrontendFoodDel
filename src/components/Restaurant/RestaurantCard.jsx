import React from 'react';
import { Card, Chip, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RestaurantCard = () => {
  // Assuming this is your condition

  return (
    <Card className='w-[18rem] relative'>
      <div className={`${true ? "cursor-pointer" : "cursor-not-allowed"} relative`}>
        <img className="w-full h-[10rem] rounded-t-md object-cover" src="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg" alt="" />
        {/* Align chip to top right corner */}
        <Chip size="small" className='absolute top-2 right-2' 
              color={true ? 'success' : 'error'}
              label={true ? 'open' : 'closed'} />
      </div>
      
      <div className='p-4 textPart lg:flex w-full justify-between'>
        <div className='space-y-1'>
          <p className='font-semibold text-lg'>Indian Fast Food</p>
          <p className='text-gray-500 text-sm'>The place for all your Food cravings....</p>
        </div> 
        <div>
          <IconButton>
            {true ? <FavoriteBorderIcon/> : <FavoriteBorderIcon/>}
          </IconButton>
        </div>
      </div>
    </Card>
  );
}

export default RestaurantCard;
