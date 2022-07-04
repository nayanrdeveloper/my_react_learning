import Navbar from './Components/Navbar';
import './App.css';
import Slider from './Components/Slider';
import Footer from './Components/Footer';
import Card from './Components/Card';
import React, { useState } from 'react';
import UserSubmitForm from './Components/UserSubmitForm';
import ControlledForm from './Components/ControlledForm';

function App() {
  const [themeMode, setThemeMode] = useState({
    'background': 'light',
    'color': 'white',
  });

  const [movieList, setMovieList] = useState([
    {
        'name': 'Nayan Radadiya',
        'skill': 'Developer',
    },
    {
        'name': 'Mayur Savaliya',
        'skill': 'Blockceveloper',
    },
    {
        'name': 'Karan Pithadiya',
        'skill': 'Developer',
    },
    {
        'name': 'Sagar Vore',
        'skill': 'Education',
    },
])

const movieListComponents = movieList.map((movie) => {
  return <Card key={movie.name} name={movie.name}></Card>
})

  return (
    
    <div className='container-fluid' id="particles-js">
      <Navbar themeMode={themeMode} setThemeMode={setThemeMode}></Navbar>
      <Slider themeMode={themeMode} setThemeMode={setThemeMode}></Slider>
      <Footer themeMode={themeMode} setThemeMode={setThemeMode}></Footer>
      <UserSubmitForm />
      <ControlledForm />
      <div className='row'>
        {/* console.log(this.state.movieList); */}
      {/* {this.state.movieList && this.state.movieList.map((movie) => {
                
                  <Card name={movie.name}  />
              })} */}
              {movieListComponents}
        
      </div>
    </div>
  );
}

export default App;
