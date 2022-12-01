
import React, { useState, useEffect } from 'react'
import Card from './Card'
import MapWithMarkers from './Map/MapWithMarkers';





function Hero() {

  const [brewerys, setBrewerys] = useState([]);
  
  

  const fetchData = e => {
    fetch(`https://api.openbrewerydb.org/breweries?by_state=arizona&per_page=100`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setBrewerys(data)
      })
      
  }
  useEffect(() => {

    fetchData();
  }, [])

  const filteredData = brewerys.filter((brewerys) => brewerys.latitude != null && brewerys.longitude != null );
  


  return (
    <div className='flex flex-col w-full'>
    <div className='grid place-items-center'>
     <MapWithMarkers data={filteredData} />
    
    
    </div>

    <div className='carousel rounded-box '>
    <div className='carousel-item' >
      {brewerys.map(brewery => (
        <Card key={brewery.id} brewery={brewery} />
      ))}
      </div>
    </div> 
    
    </div>
  )
}

export default Hero