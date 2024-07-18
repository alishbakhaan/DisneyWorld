import React from 'react'

function MovieCard({movie}) {
  return (
    <div>
      <img
          key={movie.id} // Added key prop for each image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className='max-w-max rounded-lg cursor-pointer hover:border-[3px]
           border-gray-400 hover:scale-110 transition-all duration-150 ease-in'
          alt={movie.title} 
          width={200} // Added alt attribute for accessibility
        />
    </div>
  )
}

export default MovieCard
