import React from 'react'
import {useParams}from 'react-router-dom'


const Trailer = ({movies}) => {
     let{id}=useParams()
     const trailss = movies.find(el=>el.id==id)
     console.log('movies', movies)
  return (
    <div>
        name : {trailss.name} <br/>
        url :  {trailss.url}  <br/>
        rate :{trailss.rate} <br/>
    
        <iframe width="560" height="315" src={trailss.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

            

    </div>
  )
}

export default Trailer