import React, { Component } from 'react';
import './App.css';

import MovieLibraryMain from './containers/movie-library-main';
import MovieLibraryAside from './containers/movie-library-aside';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>MOVIE LIBRARY</h1>
        </header>
        <aside className="App-aside">
        <MovieLibraryAside/>
        </aside>
        <main className="App-main">
        <h2>New Movie</h2>
          <MovieLibraryMain/>
        </main>
     <footer className="App-footer">
     <div id="nameFromLocal"></div>
     <div id="genreFromLocal"></div>
     <div id="yearFromLocal"></div>
     <div id="starsFromLocal"></div>
     <div id="reviewFromLocal"></div>
     </footer>
      </div>
    );
  }
}

export default App;
