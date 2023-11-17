import React from 'react'

function LocationInfo({locationData,error}) {
   
  return (
    <div className='location-info'>
        {error?<p className='error'>{error}</p>:locationData?(<div>
            <h2 className='postal-info'>Postal information</h2>
            <p>Country: <span className='postal-data'> {locationData?.country}</span></p>
            <p>State: <span className='postal-data'>{locationData?.places['0'].state}</span></p>
            <ul><span className='postal-data'>Cities:</span> {locationData?.places?.map((city,index)=>{
                return <li key={index}>{city['place name']}</li>
            })}</ul>
        </div>):null}
    </div>
  )
}

export default LocationInfo