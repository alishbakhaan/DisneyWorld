import React, { useState, useRef, useEffect } from 'react';
import MovieCard from './MovieCard';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import HrMovieCard from './HrMovieCard';

function MovieList({ genreId,index_ }) {
    // movie fetch api
    const [movieList, setMovieList] = useState([]);
    const elementRef=useRef();
    const getMovie = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=8be8d38debd6f3ca49f6944d9af307e2&with_genres=${genreId}`)
            .then(res => res.json())
            .then(json => setMovieList(json.results))
            .catch(error => console.error('Error fetching movies:', error));
    };

    useEffect(() => {
        getMovie();
    }, [genreId]);

    console.log(movieList);

  // Handle arrow slider
const sliderRight=(element)=>{
  element.scrollLeft+=500
}
const sliderLeft=(element)=>{
  element.scrollLeft-=500
}

    return (
        <div className='relative'>
      <HiChevronLeft className=
      {`hidden md:block text-white text-[50px] absolute mt-[150px] cursor-pointer z-10 ${index_%3==0?'mt-[50px]':'mt-[180px]'}`}
      onClick={()=>sliderLeft(elementRef.current)}/>

          <div ref={elementRef} className='flex gap-5 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth pt-5 px-3 pb-10 p-0'>
            {movieList.map((item, index) => (
                <>
                {index_%3==0?<HrMovieCard movie={item}/>:<MovieCard movie={item}/>}
                </>
            ))}
          </div>

         <HiChevronRight className=
         {`hidden md:block text-white text-[50px] mt-[-220px] absolute cursor-pointer right-0 ${index_%3==0?'mt-[-180px]':'mt-[150px]'}`}
      onClick={()=>sliderRight(elementRef.current)}/>

        </div>
    );
}

export default MovieList;
