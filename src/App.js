import logo from './logo.svg';
import './App.css';
import Navbarr from './component/Navbarr';
import 'bootstrap/dist/css/bootstrap.min.css';
import {moviesData} from './component/Moviedata';
import { useState } from 'react';
import Movielist from './component/Movielist';
import Addmovie from './component/Addmovie';
function App() {
  
 const[movies,setMovies]=useState(moviesData);
 const[name,setName]=useState("");
 const[rating,setRating]=useState(0)
 console.log(rating)
 
  return (
    <div className="App">
   <Navbarr setName={setName} setRating={setRating} />
   <Movielist movies={movies} name={name} rating={rating}/>
   <Addmovie setMovies={setMovies} movies={movies}/>
    </div>
  );
}

export default App;
