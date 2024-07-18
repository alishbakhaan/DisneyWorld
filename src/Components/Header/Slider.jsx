import React, { useEffect, useRef, useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
const screenwidth=window.innerWidth;

function Slider() {
  // movie fetch api
  const [movieList,setMovieList] = useState([])
  const elementRef=useRef()
  const getMovie = ()=>{
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=8be8d38debd6f3ca49f6944d9af307e2")
      .then(res => res.json())
      .then(json => setMovieList(json.results))
  }
  useEffect(()=>{
    getMovie()
    },[])
    
  console.log(movieList)

  // Handle arrow slider
const sliderRight=(element)=>{
  element.scrollLeft+=screenwidth-110
}
const sliderLeft=(element)=>{
  element.scrollLeft-=screenwidth-110
}

  return (
    <div>
      <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer'
      onClick={()=>sliderLeft(elementRef.current)}/>
      <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0'
      onClick={()=>sliderRight(elementRef.current)}/>

      <div className='flex overflow-x-auto scrollbar-hide px-2 md:px-4 py-4 scroll-smooth' ref={elementRef}>
      {movieList.map((movie) => (
        <img
          key={movie.id} // Added key prop for each image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className='md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out'
          alt={movie.title} // Added alt attribute for accessibility
        />
      ))}
    </div>
    </div>
  )
}

export default Slider