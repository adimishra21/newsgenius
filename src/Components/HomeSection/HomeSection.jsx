import { Avatar, Button } from '@mui/material'
import { useFormik } from 'formik'
import axios from 'axios';
import React, { useState,useEffect } from 'react'
import * as Yup from 'yup'
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import PostCard from './PostCard';
import Carousel from '../Carousel/Carousel';

const validationSchema= Yup.object().shape({
  content:Yup.string().required("Text is required ")
})

const HomeSection = () => {
// frame begins
const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch news headlines from NewsAPI
  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=9e76e457ea734bd79ae1f3b784796948' // Replace with your NewsAPI key
        );
        console.log('API Response:', response.data); 
        setHeadlines(response.data.articles.map((article) => article.title));
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch headlines');
        setLoading(false);
      }
    };

    fetchHeadlines();
  }, []);

//frame ends 
 const[uploadingImage,setUploadingImage]= useState(false);
 const[selectedImage,setSelectedImage]=useState("");
  const handleSubmit= (values)=>{
console.log("vlaues" , values)
  }
  const formik=useFormik({
    initialValues:{
      content:"",
      image:""
    },
    onSubmit:handleSubmit,
    validationSchema,
  })
const handleSelectImage=(event)=>{
setUploadingImage(true);
const imgUrl= event.target.files[0]
formik.setFieldValue("image",imgUrl);
setSelectedImage(imgUrl);
setUploadingImage(false);

}

  return (
  
    <div className='space-y-5'>
      <section>
        <h1 className='py-5 text-x1 font-bold opacity-90'>Home</h1>
      {/* Scrolling headlines */}
      <div
          style={{
            backgroundColor: 'darkred',
            color: 'gold',
            padding: '5px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            marginBottom: '20px', // Add some spacing below the headlines
            fontSize: '20px',
          }}
        >
          <marquee behavior="scroll" direction="left">
            {loading
              ? 'Loading headlines...'
              : error
              ? error
              : headlines.join(' | ')}
          </marquee>
        </div>
      </section>
      
     <Carousel  />
      <section className={'pb=10'}>

        <div className='flex space-x-5'>
          <Avatar alt= "username"
          src= 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png'/>
          <div className='w-full'>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input type="text" name = 'content'placeholder='Got-a-scoop?📰✨Share your thoughts.'
                className={'border-none outline-none text-xl bg-transparent'}
                {...formik.getFieldProps("content")}/>
                {formik.errors.content && formik.touched.content && (
                  <span className='text-red-500'>{formik.errors.content}</span>
                )}
              </div>
              {/*<div>
                <img src="" alt="" />
              </div>*/}
              <div className='flex justify-between items-center mt-5'>

               <div className='flex space-x-5 items-center '>
                <label className="flex item-center space-x-2 rounded-md cursor-pointer">

                <ImageIcon className='text-[#1d9bf0]'/>
                <input type="file" 
                name='ImageFile' 
                className='hidden' 
                onChange={handleSelectImage} 
                />

                </label>
                <FmdGoodIcon className="text-[#1d9bf0]"/>
                <TagFacesIcon className="text-[#1d9bf0]"/>
               </div>
               <div>
                <Button sx={{
                width:"100%",
                borderRadius:"20px",
                paddingY:"8px",
                paddingX:"20px",
                bgcolor:'#1e88e5'}}
            variant='contained'
            type='submit'
            > 
                  Post Atricle
                </Button>
               </div>
              </div>
            </form>

          </div>
        </div>
      </section>

     <div classname="post-cards-container">
    <section>
      {[1,1,1,1,1].map((item)=><PostCard/>)}
    </section>
    </div>
    </div>
  )
}

export default HomeSection
