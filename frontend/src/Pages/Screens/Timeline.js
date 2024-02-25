import React, { useState } from 'react';
import {Avatar} from '@mui/material'
import axios from 'axios';
import Post from './post';


function Timeline() {


  const[posts,setPosts]=useState()

  axios.get('http://127.0.0.1:8000/api/post/').then(
    response=>{
      setPosts(response.data)

      // console.log(response.data)
    
    }
  )

  function getUsername(id){

    const username=null
    axios.get(`http://127.0.0.1:8000/api/user/${id}`).then(
      response=>{
        const username=response.username

      }
    )

    return username

  }




  return (
    <div className=''> 
    
    <div className='flex mx-40 '>

        

        <div className=' ml-60 p-5 border-black-100 border-r-2 border-l-2 w-full h-full'> 

        <div className='mx-20 '>
        <span></span>
        <div className='flex'>
          <Avatar sx={{ width: 45, height: 45 }} alt="Remy Sharp" src="data:image/jpeg;base64,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" />
          <textarea className='border-b-2 m-2 p-2  w-4/5 h-20' placeholder='What are you feeling?' ></textarea></div>

          <div className='  flex justify-end items-end mr-36'><button className='bg-red-200 px-4 py-1 border-2 rounded-full w-24'>Post</button></div>
        
        </div>


        <div className='mt-10'>
          
          



          
        {
          posts && posts.map((post)=>(
            <Post key={post.id} post={post}/>
          ))
        }




















          
          
          

        </div>
        </div>
        


        <div className=' w-2/5'>
            Interestss
        </div>



    </div>
    


</div>
    
  )
}

export default Timeline