import React from 'react'
import './FeaturedMovie.css'

const FeaturedMovie = ({item}) => {
  return (
    <section className='featured'  >
     {item.name}
    </section>
  )
}

export default FeaturedMovie
