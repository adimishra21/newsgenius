import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useFormik } from 'formik';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  outline: 'none',
  borderRadius: 4
};

export default function ReplyModal({ handleClose, open }) {  
  const navigate = useNavigate();
  const [uploadingImage, setUploadingImage] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState("");
  
  const handleSubmit = (values) => {
    console.log("handle submit", values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      postId: 4
    },
    onSubmit: handleSubmit
  });

  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setUploadingImage(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='flex space-x-5'>
            <Avatar
              onClick={() => navigate('/profile/${6}')}
              className="cursor-pointer" 
              alt="username" 
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
            />
            <div className='w-full'>
              <div className='flex justify-between items-center'>
                <div className='flex cursor-pointer items-center space-x-2'>
                  <span className='font-semibold'>Aditya Kumar Mishra</span>
                  <span className='text-grey-600'>@Adikra21 . 2m</span>
                  <img className='ml-2 w-5 h-5' src="data:image/png;base64,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" alt="" />
                </div>
              </div>
              <div className='mt-2'>
                <div onClick={() => navigate('/articledetails/${3}')} className='cursor-pointer'>
                  <p className='mb-2 p-0'>news genius full stack project with springboot and react</p>
                </div>
              </div>
            </div>
          </div>
          <section className={`py-10`}>
            <div className='flex space-x-5'>
              <Avatar alt="username" src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png' />
              <div className='w-full'>
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <input type="text" name='content' placeholder='Got-a-scoop?📰✨Share your thoughts.'
                      className={'border-none outline-none text-xl bg-transparent'}
                      {...formik.getFieldProps("content")} />
                    {formik.errors.content && formik.touched.content && (
                      <span className='text-red-500'>{formik.errors.content}</span>
                    )}
                  </div>
                  <div className='flex justify-between items-center mt-5'>
                    <div className='flex space-x-5 items-center '>
                      <label className="flex item-center space-x-2 rounded-md cursor-pointer">
                        <ImageIcon className='text-[#1d9bf0]' />
                        <input type="file" 
                          name='ImageFile' 
                          className='hidden' 
                          onChange={handleSelectImage} 
                        />
                      </label>
                      <FmdGoodIcon className="text-[#1d9bf0]" />
                      <TagFacesIcon className="text-[#1d9bf0]" />
                    </div>
                    <div>
                      <Button sx={{
                        width: "100%",
                        borderRadius: "20px",
                        paddingY: "8px",
                        paddingX: "20px",
                        bgcolor: '#1e88e5'
                      }}
                        variant='contained'
                        type='submit'
                      > 
                        Post 
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </Box>
      </Modal>
    </div>
  );
}
