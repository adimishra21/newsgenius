import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Carousel.css';

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch news images from NewsAPI
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=9e76e457ea734bd79ae1f3b784796948' // Replace with your NewsAPI key
        );
        console.log('API Response:', response.data); // Log the response for debugging
        const articlesWithImages = response.data.articles.filter(
          (article) => article.urlToImage // Filter articles with valid images
        );
        setImages(articlesWithImages);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching images:', err); // Log the error for debugging
        setError('Failed to fetch images. Please try again later.');
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Automatically change the image every 3 seconds
  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds
      return () => clearInterval(interval);
    }
  }, [images]);

  return (
    <div className="carousel">
      {loading ? (
        <p>Loading images...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : images.length > 0 ? (
        <div className="carousel-inner">
          <img
            src={images[currentIndex].urlToImage}
            alt={images[currentIndex].title}
            className="carousel-image"
          />
          <div className="carousel-caption">
            <h3>{images[currentIndex].title}</h3>
          </div>
        </div>
      ) : (
        <p>No images found.</p>
      )}
    </div>
  );
};

export default Carousel;