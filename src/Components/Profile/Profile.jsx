import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PostCard from "../HomeSection/PostCard";
import GradeIcon from '@mui/icons-material/Grade';
import ProfileModal from "./ProfileModal";


const Profile = () => {
  const [tabValue,setTabValue]=useState("1")
  const navigate = useNavigate();
  const [openProfileModal, setOpenProfileModal]=useState(false);
  const handleOpenProfileModel = () => setOpenProfileModal(true);
  const handleClose = () => setOpenProfileModal(false);

  const handleBack = () => navigate(-1);

  
  const handleFollowUser = () => {
    console.log("follow user");
  };
  const handletabChange=(event,newVlaue)=>{
    setTabValue(newVlaue)

    if(newVlaue===4){
      console.log("liked articles")
    }
    else if(newVlaue===1){
      console.log("user articles")
    }
  }

  return (
    <div>
      <section className={"bg-white z-50 flex items-center sticky top-0 bg-opacity-95"}>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">
          Aditya Kumar Mishra
        </h1>
      </section>
      <section>
        <img
          className="w-[100%] h-[20rem] object-cover"
          src="https://cdn.pixabay.com/photo/2021/07/02/00/20/woman-6380562_640.jpg"
          alt=""
        />
      </section>

      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt="Aditya Kumar Mishra"
            src="https://media.geeksforgeeks.org/auth/profile/x366g58qs61x5uzs4vkh"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />

          {true ? (
            <Button
              onClick={handleOpenProfileModel}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              {true ? "Follow" : "Unfollow"}
            </Button>
          )}
        </div>
        <div>
        <div className="flex items-center">
          <h1 className="font-bold text-lg">Aditya Kumar Mishra</h1>
          {true && <img
            className="ml-2 w-5 h-5"
            src="data:image/png;base64,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"
            alt=""
          />}
        </div>
        <h1 className="text-gray-500">@Adikra21</h1>
        </div>

        <div className="mt-2 space-y-3">
          <p>Hello , I am Aditya</p>
          <div className="py-1 flex space-x-5">
            
            <div className="flex items-center text-gray-500">
           <BusinessCenterIcon/>
           <p className="ml-2">Education</p>
            </div>

            <div className="flex items-center text-gray-500">
           <LocationOnIcon/>
           <p className="ml-2">Indian</p>
            </div>

            <div className="flex items-center text-gray-500">
           <CalendarMonthIcon/>
           <p className="ml-2">Joined June 2022</p>
            </div>
            </div>
     
     
             <div className="flex-items-center space-x-5">
             <div className="flex items-center space-x-1 font-semibold">
                <span>190</span>
                <span className="text-gray-500">Following</span>
            
              <div className="flex items-center space-x-1 font-semibold">

                <span>590</span>
                <span className="text-gray-500">Followers</span>

                </div>
                
                <div className="flex items-center space-x-1 font-semibold">
                <span>4.3</span>
                <GradeIcon/>
                <span className="text-gray-500">Reporter Rating</span>
                </div>

              </div>
                 
             </div>


        </div>
      </section>

      <section className="py-5">
      <TabContext value={tabValue}>
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <TabList onChange={handletabChange} aria-label="lab API tabs example">
      <Tab label="Articles" value="1" />
      <Tab label="Replies" value="2" />
      <Tab label="Media" value="3" />
      <Tab label="Likes" value="4" />
    </TabList>
  </Box>
  <TabPanel value="1">
    {[1,1,1,1].map((item)=><PostCard/>)}
  </TabPanel>
  <TabPanel value="2">user's Replies</TabPanel>
  <TabPanel value="3">Media</TabPanel>
  <TabPanel value="4">Likes</TabPanel>
</TabContext>
      </section>

      <section>
        <ProfileModal handleClose={handleClose} open={openProfileModal}/>
      </section>

    </div>
  );
};

export default Profile;
