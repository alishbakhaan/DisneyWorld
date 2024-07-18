import React from 'react'

function HrMovieCard({movie}) {
  return (
    <section className='hover:scale-110 transition-all duration-150 ease-in'>
      <img
          key={movie.id} // Added key prop for each image
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          className='max-w-max rounded-lg cursor-pointer hover:border-[3px]
           border-gray-400'
          alt={movie.title} 
          width={200} // Added alt attribute for accessibility
        />
        <h2 className='mt-2 font-mono text-sm'>{movie.title} </h2>
    </section>
  )
}

export default HrMovieCard