import React, { Component} from 'react';


const newMovieObject=localStorage.getItem('newMovie') !== null ?JSON.parse(localStorage.getItem("newMovie")):{};
class MovieLibraryMain extends Component{

    constructor(){
        super();
        this.state={
            newMovie:{}
        }
    }

    saveNewMovie(){
        this.setState({
            newMovienew:{
                movieName:this.refs.movieName.value,
                movieGenre:this.refs.movieGenre.value,
                movieYear:this.refs.movieYear.value,
                movieStars:this.refs.movieStars.value,
                movieReview:this.refs.movieReview.value
            }
        },function(){
            if (newMovieObject[this.refs.movieName.value ]!== undefined) {
                alert("Movie already exist")
                return;
            }
            newMovieObject[this.refs.movieName.value]=this.state.newMovienew;
            localStorage.setItem('newMovie',JSON.stringify(newMovieObject));
            alert("Successfully Saved !")
            this.resetInputs();
        }
        )
    }

    resetInputs(){
        this.refs.movieName.value="";
        this.refs.movieGenre.value="";
        this.refs.movieYear.value="";
        this.refs.movieStars.value="";
        this.refs.movieReview.value="";
    }

    
   
    render(){
        return(
            <div>
            <form action="?" method="POST" className="formMain">
            <input type="text" ref="movieName" placeholder="New movie"/> <br/>
            <input type="text" ref="movieGenre" placeholder="Movie genre"/><br/>
            <input type="number" ref="movieYear" placeholder="Movie year"/><br/>
            <input type="text" ref="movieStars" placeholder="Movie stars" /><br/>
            <input type="text" ref="movieReview" placeholder="Movie review" className="movieReviewClass"/><br/>
            </form>
            <button className="addNewMovie" onClick={event=>{event.preventDefault();this.saveNewMovie();}}>Add new movie</button>
            </div>
        )
    }
}
export default MovieLibraryMain;