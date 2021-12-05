import './App.css';
import { useState } from 'react';
import Sidenavbar from './components/Sidenavbar';
import Nav from './components/Nav';
import {  Route, Routes } from 'react-router-dom';
import Trailer from './components/Trailer';

import MovieList from './components/MovieList';


function App() {
  let movies = [
    {
      title: 'Invisible Guest',
      poster: 'https://fr.web.img6.acsta.net/pictures/16/11/18/11/16/356441.jpg',
      rate:4,
      trailer: "https://www.youtube.com/watch?v=epCg2RbyF80&ab_channel=NorthwestFilmCenter", 
      description: "Description : La vie de l'homme d'affaires Adrián Doria tourne au cauchemar le jour où il se réveille aux côtés de sa petite-amie sans vie. Convaincu de son innocence, il engage une grande avocate afin de comprendre ce qu'il s'est réellement passé et prouvé son innocence.",
      id: 2
    },
    {
      title: 'Red Notice',
      poster: 'https://fr.web.img4.acsta.net/c_310_420/pictures/21/10/21/15/41/2023058.jpg',
      rate:3,
      trailer: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix",
      description: "Description : Lorsqu'Interpol déclenche une Alerte Rouge, destinée à traquer et à capturer les criminels les plus recherchés au monde, le FBI fait appel à son meilleur profiler, John Hartley.",
      id: 3
    },
    {
      title: 'Searching',
      poster: 'https://fr.web.img4.acsta.net/pictures/18/07/13/11/17/4339524.jpg',
      rate:5,
      trailer: "https://www.youtube.com/watch?v=3Ro9ebQxEOY&ab_channel=SonyPicturesEntertainment", 
      description: "Description : David Kim devient désespéré lorsque sa fille de 16 ans, Margot, disparaît et que l'enquête des policiers ne mène nulle part. Il décide de chercher la seule chose que personne d'autre n'a eu l'idée de chercher -- l'ordinateur de Margot.",
      id: 5
    },
    
   
  ];

  const [movieList, setMovieList] = useState(movies);
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(false);
  const addMovie = (newmovie) => {
    setMovieList([...movieList, newmovie]);
  };
  

  
  return (
      <div className="main5">
        <Nav search={search}  rate={rate}  setSearch={setSearch} setRate={setRate}/>
        <Sidenavbar  addMovies={addMovie}/>
        <Trailer movies={movieList} />
        <MovieList className="cards"
                  movies= {movieList} 
                  search={search}
                  rate={rate}
                 
                />

        <Routes>
          <Route className="main70">
              <Route exact path="/">
                
              </Route>
              <Route path="/Trailer/:id">
                
              </Route>
              </Route>
          </Routes>
      </div>
  );
}

export default App;