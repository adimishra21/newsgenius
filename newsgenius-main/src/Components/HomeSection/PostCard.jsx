import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Avatar,Button,Menu,MenuItem} from '@mui/material';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteOutlined } from '@mui/icons-material';
import RepeatIcon from '@mui/icons-material/Repeat';
import ReplyModal from './ReplyModal';


const PostCard = () => {
     const navigate=useNavigate();
     const [anchorEl, setAnchorEl] = React.useState(null);
     const open = Boolean(anchorEl);
     const [openReplyModal, setOpenReplyModal]=useState(false);
     const handleOpenReplyModel = () => setOpenReplyModal(true);
     const handleCloseReplyModal = () => setOpenReplyModal(false);
    
     const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 const handleDeleteArticle=()=>{
    console.log("delete article");
    handleClose();
 }
 

 const handleCreateReArticle=()=>{
    console.log("handle create Rearticle");
 }
 const handleLikedArticle=()=>{
    console.log("handle liked articles");
 }
  return (
    <React.Fragment>
      
     {/* <div className='flex-items-center font-semibold text-grey-700 py-2'>
        <RepeatIcon/>
        <p>You Repost</p>

      </div>*/}
        
      <div className='flex space-x-5'>
        <Avatar
        onclick={()=>navigate('/profile/${6}')}
        className="cursor-pointer" 
        alt="username" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
        />
       
    <div className='w-full'>
        <div className='flex justify-between items-center'>
            <div className='flex cursor-pointer items-center space-x-2'>

                <span className='font-semibold'>Aditya Kumar Mishra</span>
                <span className='text-grey-600'>@Adikra21 . 2m</span>
                <img className='ml-2 w-5 h-5' src="data:image/png;base64,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" alt="" />
            </div>

           <div>

           <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
          <MoreHorizIcon/>

      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleDeleteArticle}>Delete</MenuItem>
        <MenuItem onClick={handleDeleteArticle}>Edit</MenuItem>
      </Menu>
           </div>
        </div>


        <div className='mt-2'>
            <div onClick={()=>navigate('/articledetails/${3}')}className='cursor-pointer'>
                <p className='mb-2 p-0'>news genius full stack project with springboot and react</p>
                <img className="w-[28rem] border border-gray-400 p-5 rounded-md" src='https://motionarray.imgix.net/preview-327986-dY2hb6egMT-high_0015.jpg?w=660&q=60&fit=max&auto=format' alt=''/>
            </div>
            <div className='py-5 flex flex-wrap justify-between items-center'>
                <div className='space-x-3 flex-items-center text-gray-600'>

              <ChatBubbleOutlineIcon className='cursor-pointer' onClick={handleOpenReplyModel}/>
              <p>43</p>
                </div>
                <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex item-center`}>
                 <RepeatIcon 
                 onClick={handleCreateReArticle}
                 className="cursor-pointer"/>
                 <p>54</p>
                </div>

                <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex item-center`}>
                 {true?<FavoriteIcon 
                 onClick={handleLikedArticle}
                 className="cursor-pointer"/>:<FavoriteOutlined 
                 onClick={handleLikedArticle}
                 className="cursor-pointer"/>}
                 <p>54</p>

                    </div>
                    <div className='space-x-3 flex-items-center text-gray-600'>
                   <BarChartIcon className='cursor-pointer' onClick={handleOpenReplyModel}/>
                   <p>430</p>

            </div>
             <div className='space-x-3 flex-items-center text-gray-600'>
            <FileUploadIcon className='cursor-pointer' onClick={handleOpenReplyModel}/>


        </div>
       </div>
       </div>

    </div>
    </div>
    <section>
      <ReplyModal open={openReplyModal} handleClose={handleCloseReplyModal}/>
    </section>
  </React.Fragment>
 );
};

export default PostCard
