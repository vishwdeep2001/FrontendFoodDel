import { Avatar, Badge, IconButton } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { pink ,red} from '@mui/material/colors';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import "./Navbar.css" 
import { useNavigate } from 'react-router-dom';
import { Person } from '@mui/icons-material';
import {useSelector} from "react-redux";
export const Navbar = () => {
  const {auth}=useSelector(store=>store)
  // console.log(auth.user);
  const navigate = useNavigate();
  const handleAvatarClick=()=>{
    if(auth.user?.role === "ROLE_CUSTOMER"){
      navigate("/my-profile")
    }
    else{
      navigate("/admin/restaurant")
    }
  }
  return (
    <div className='px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between'>
      <div className='flex items-center space-x-4'>
        
          <li onClick={()=>navigate("/")} className='logo font-semibold text-gray-30 text-2xl'>
            FoodieZone
          </li>
        </div>
        <div className='flex items-center space-x-2 lg:space-x-10'>
          <div className=''>
           
            <IconButton>
          
              <SearchIcon sx={{ fontSize: '1.5rem' }} />
            </IconButton>
          </div>
          <div className=''>
          {auth.user ?<Avatar onClick ={handleAvatarClick} sx={{ bgcolor: 'white', color: pink.A400 }}> {auth.user.fullName[0].toUpperCase()} </Avatar>:
          <IconButton onClick={()=>navigate("/account/login")}>
            <Person/>
          </IconButton>}
          </div>
          <div className=''>
          <IconButton>
          <Badge color="primary" badgeContent={3}>
            <ShoppingCartIcon sx={{ fontSize: '1.5rem' }}></ShoppingCartIcon>
            </Badge>
          
        </IconButton>
          </div>
        </div>
      
    </div>
  );
};
