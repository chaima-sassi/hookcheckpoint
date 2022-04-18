import React from 'react'
import Moviecard from './Moviecard'

 function Movielist({movies,name,rating}) {

  return (
    <div> 


{
movies.filter(e=>e.name.toLowerCase().includes(name.toLowerCase())&& e.rate >=rating).map(el=><Moviecard el={el}/>)
  }
  

    </div>
  )
}
export default Movielist