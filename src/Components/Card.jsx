import React from 'react'




function Card ({brewery}) {

  function handleClick() {
    window.open(brewery.website_url, '_blank')
  }

  return (
    <div key={brewery.id} className="card w-96 bg-primary text-primary-content m-4">
    <div className="card-body">
      <h2 className="card-title">{brewery.name}</h2>
      <p>{brewery.street}<br/>{brewery.city} {brewery.state} {brewery.postal_code}</p>
      <div className="card-actions justify-end">
        <button className='btn' onClick={handleClick}>Website</button>
      </div>
    </div>
  </div>
  )
}

export default Card