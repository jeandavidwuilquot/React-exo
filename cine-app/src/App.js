// import React from 'react';
// import Header from './components/Header/Header';
// import FilmList from './components/FilmList/FilmList';
// import FilmDetail from './components/FilmDetail/FilmDetail';
// import FilmElement from './components/FilmDetail/FilmElement';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <Header />
//       <FilmList />
//       <FilmDetail />
//       <FilmElement />
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Header, FilmList, FilmDetail} from './components';

class App extends Component{

  
  constructor(props){
    super(props);
    this.state = {
      movie: [{
        titre: 'Kill Bill Vol.1',
        img: 'https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg?w=1920&h=1080',
        details: "2004 | Action | Thriller",
        description: "Super Hotchicks qui se tapent dessus"
      },
      {
        titre: 'Princesse Mononoké',
        img: 'https://m.media-amazon.com/images/M/MV5BMTVlNWM4NTAtNDQxYi00YWU5LWIwM2MtZmVjYWFmODZiODE5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,707,1000_AL_.jpg?w=1920&h=1080',
        details: "1997 | Anime",
        description: "Il y a un loup géant tu vas trop kiffé!"
      },
      {
        titre: "Torino",
        img: 'https://m.media-amazon.com/images/M/MV5BNWI1MTljYzUtMzM5OC00YTc3LWFiNzgtNzY1ODhjZjU5MDU3XkEyXkFqcGdeQXVyMjQ0NzgwNzY@._V1_.jpg?w=1920&h=1080',
        details: "2010 | Drame",
        description: "Il y a Clint, une voiture et des Coréens, tu veux quoi de plus!"
      },
      {
        titre: 'City of God',
        img: 'https://m.media-amazon.com/images/M/MV5BMGU5OWEwZDItNmNkMC00NzZmLTk1YTctNzVhZTJjM2NlZTVmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,677,1000_AL_.jpg?w=1920&h=1080',
        details: "2002 | Crime | Drame",
        description: "Histoire des favelas, drogues, sexes, violences, bon ça!"
      }],
      selectedMovie: 0
    }
  }
  updateSelected = (titre) => {
    const index = this.state.movie.findIndex((m) => {
      return titre === m.titre;
    })
    this.setState({
      selectedMovie: index
    })
  }
  render(){
    return (
      <div className="App d-flex flex-column">
        <Header />
        <div className='d-flex flex-row flex-fill pt-4'>
        <FilmList movie = { this.state.movie} updateSelected={ this.updateSelected}/>
        <FilmDetail movie = { this.state.movie[this.state.selectedMovie] } />
        </div>
  
      </div>
    );
  }
  
}

export default App;