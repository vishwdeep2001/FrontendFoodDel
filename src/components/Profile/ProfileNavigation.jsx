import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate, useNavigation } from 'react-router-dom';
import {useDispatch} from "react-redux";
import { logout } from '../State/Authentication/Action';
const menu=[
    {title: "Orders",icon:<ShoppingBagIcon/>},
    {title:"Favorites",icon:<FavoriteIcon/>},
    {title:"Events",icon:<EventIcon/>},
    {title:"Payments",icon:<AccountBalanceWalletIcon/>},
    {title:"Notification",icon:<NotificationsIcon/>},
    {title:"Address",icon:<HomeIcon/>},
    {title:"Logout",icon:<LogoutIcon/>}
 ]
export const ProfileNavigation = ({ open,handleClose }) => {
    const isSmallScreen = useMediaQuery("(max-width:1080)")
    const navigate = useNavigate();
    const dispatch=useDispatch()
    const handleNavigate =(item)=>{
      if(item.title ==="Logout"){
        dispatch(logout());
        navigate("/")
      }
      else
        navigate(`/my-profile/${item.title.toLowerCase()}`);
    }
  return (
    <div>
        <Drawer variant={isSmallScreen ? "temporary":"permanent"} onClose={handleClose} open ={isSmallScreen?open:true} anchor='left' sx={{zIndex:1}}>
        <div className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center  text-xl gap-8 ' >
        {menu.map((item,i)=><>
        <div  onClick={()=>handleNavigate(item)} className='px-5 flex items-center space-x-5 cursor-pointer'>
            {item.icon}
            <span>{item.title}</span>
        </div>
        {i!==menu.length-1 && <Divider/>}
        </>)}
        </div>
        </Drawer>
    </div>
  )
}
