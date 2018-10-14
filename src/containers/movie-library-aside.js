import React, { Component } from 'react';


const savedMovies = JSON.parse(localStorage.getItem('newMovie'));

class MovieLibraryAside extends Component {
    showSavedMovies(event) {
        let keyOfSavedMovies = event.target.textContent,
            fromLocal = savedMovies[keyOfSavedMovies];
           return(
             document.getElementById('nameFromLocal').textContent=fromLocal.movieName,
             document.getElementById('genreFromLocal').textContent=fromLocal.movieGenre,
             document.getElementById('yearFromLocal').textContent=fromLocal.movieYear,
             document.getElementById('starsFromLocal').textContent=fromLocal.movieStars,
             document.getElementById('reviewFromLocal').textContent=fromLocal.movieReview
           )
    }
  

    render() {
      
        if (savedMovies === null) {
            return;
        }
        return (
            <ul>
                {Object.keys(savedMovies).map(key => {
                    return (
                        <li key={key} onClick={event => { event.preventDefault(); this.showSavedMovies(event) }}>
                            {key}
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default MovieLibraryAside;