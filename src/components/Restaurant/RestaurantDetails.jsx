

import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuCard from './MenuCard';

const categories = [
    "pizza",
    "biryani",
    "burger",
    "chicken",
    "rice"
]

const foodTypes = [
    { label: "All", value: "all" },
    { label: "Vegetarian Only", value: "vegetarian" },
    { label: "Non-Vegetarian", value: "non_vegetarian" },
    { label: "Seasonal", value: "seasonal" },
]

const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("all");
    const [foodCategory, setFoodCategory] = useState("all");

    const handleFoodTypeChange = (e) => {
        setFoodType(e.target.value);
    }

    const handleFoodCategoryChange = (e) => {
        setFoodCategory(e.target.value);
    }

    const menu  = [1,1,1,1,1,1]
    return (
        <div className='px-5 lg:px-20'>
            <section>
            <h3 className='text-gray-500 mt-100'>
                Home/India/indian fast food/
            </h3>
            <div >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img className ='w-full h-[40vh] object-cover' src="https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_1280.jpg"></img>
                    </Grid>
                    
                    <Grid item xs={12} lg={6}>
                        <img className ='w-full h-[40vh] object-cover' src="https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_640.jpg"></img>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img className ='w-full h-[40vh] object-cover' src="https://cdn.pixabay.com/photo/2020/06/30/15/03/table-5356682_1280.jpg"></img>
                    </Grid>
                </Grid>
            </div>
            <div className='pt-3 pb-5 '>
                <h1 className='text-4xl font-semibold'>Indian Fast Food</h1>
                <p className='text-gray-500 mt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, similique quasi! Quo similique quibusdam vel ad quod consequuntur sequi. Id explicabo, exercitationem enim dolores rerum quod quae laudantium corrupti voluptas?</p>
                <div className='space-y-3 mt-3'>
                <p className='text-gray-500 flex item-center gap-3'><PlaceIcon></PlaceIcon><span>Khan Market ,Delhi</span></p>
               <p className='text-gray-500 flex item-center gap-3'><CalendarTodayIcon></CalendarTodayIcon><span>Monday-Saturday 10:00 AM to 9:00 PM (Today) </span></p>
                </div>
                           
            </div>
        </section>
            <Divider />
            <section className='pt-[2rem] lg:flex relative'>
                <div className='space-y-10 lg:w-[20%] filter p-5 shad'>
                    <div className='box space-y-5 lg:sticky top-28'>
                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                                Food Type
                            </Typography>
                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={handleFoodTypeChange} name="food_type" value={foodType}>
                                    {foodTypes.map((item) => <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />)}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider/>
                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                                Food Category
                            </Typography>
                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={handleFoodCategoryChange} name="food_category" value={foodCategory}>
                                    {categories.map((item) => <FormControlLabel key={item} value={item} control={<Radio />} label={item} />)}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                {menu.map((item)=> <MenuCard/>)}
                </div>
            </section>
        </div>
    )
}

export default RestaurantDetails
