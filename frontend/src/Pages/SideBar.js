import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RecommendOutlinedIcon from '@mui/icons-material/RecommendOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function SideBar() {
  return (
    <div className='fixed left-0 top-0  ml-40 '>


<div className='flex items-center'> 
    <button className=' font-bold text-left rounded-xl mt-14 my-1 py-2 items-center  hover:bg-gray-200 w-full'>
    
    <span className='mx-10 '>
    <HomeOutlinedIcon/>
    <span className='mx-2'>Home</span>
    </span>
    </button>
</div>



<div className='flex items-center'> 
    <button className='font-bold text-left rounded-xl  my-1 py-2 items-center hover:bg-gray-200 w-full'>
    <span className='mx-10 '>
    <RecommendOutlinedIcon/>
    <span className='mx-2'>Interest</span>
    </span>
    </button>
</div>

<div className='flex items-center'> 
    <button className='font-bold text-left rounded-xl  my-1 py-2 items-center hover:bg-gray-200 w-full'>
    <span className='mx-10 '>
    <EmailOutlinedIcon/>
    <span className='mx-2'>Message</span>
    </span></button>
</div>

<div className='flex items-center'> 
    <button className='font-bold text-left rounded-xl  my-1 py-2 items-center hover:bg-gray-200 w-full'>
    <span className='mx-10 '>
    <NotificationsNoneOutlinedIcon/>
    <span className='mx-2'>Notification</span>
    </span></button>
</div>

<div className='flex items-center'> 
    <button className='font-bold text-left rounded-xl  my-1 py-2 items-center hover:bg-gray-200 w-full'>
    
    <span className='mx-10 '>
        <AccountCircleOutlinedIcon/>
    
    <span className='mx-2'>Profile</span>
    </span></button>
</div>














</div>

  )
}
