import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Slider from '../Components/Header/Slider';
import ProductionHouse from '../Components/Header/ProductionHouse';
import GenreMovieList from '../Components/Header/GenresList/GenreMovieList';

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user_login'));
    if (!user) {
      navigate('/login', { replace: true });
    }

    // Prevent back navigation to login page
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = () => {
      window.history.go(1);
    };

    return () => {
      window.onpopstate = null;
    };
  }, [navigate]);

  return (
    <div>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  );
};

export default LandingPage;

// import React, { useEffect, useState } from 'react'
// import Header from '../Components/Header/Header'
// import Slider from '../Components/Header/Slider'
// import ProductionHouse from '../Components/Header/ProductionHouse'
// import GenreMovieList from '../Components/Header/GenresList/GenreMovieList'

// const LandingPage = () => {

//   return (
//     <div>
//       <Header/>
//       <Slider/>
//       <ProductionHouse/>
//       <GenreMovieList/>
//     </div>
//   )
// }

// export default LandingPage