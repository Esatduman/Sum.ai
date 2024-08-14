import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import loadingAnimation from '../assets/Animation - 1723581654111.json'; // Path to your Lottie JSON file
import '../App.css';

const Loading = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/summary'; // Redirect to the SummaryPage after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="loading-page">
      <Lottie options={defaultOptions} height={400} width={400} />
      <h2>Loading...</h2>
    </div>
  );
};

export default Loading;