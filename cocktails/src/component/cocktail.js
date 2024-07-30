import React from 'react'
import { Link } from 'react-router-dom'

const cocktail = ({ img, name, id, info, glass }) => {
  return (
    <article className='cocktail'>
    <div className='img-container'>
      <img src={img} alt={name} />
    </div>
    <div className='cocktail-footer'>
      <h3>{name}</h3>
      <h4>{glass}</h4>
      <p>{info}</p>
      <Link to={`/cocktial/${id}`} className='btn btn-primary btn-details'>
        details
      </Link>
    </div>
  </article>
  )
}

export default cocktail
