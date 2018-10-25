import React from 'react';
import $ from 'jquery';
import MovieTitleList from './MovieTitleList.jsx';
import MovieTitle from './MovieTitle.jsx';
import SearchBar from './SearchBar.jsx';

let movies = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: movies,
      inputValue: ''
    },
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovies = this.getMovies.bind(this);
  }

  filteredSelection(str) {
    str = str.toLowerCase();
    let filteredMovies = this.state.movie.filter(el => {
      return el.title.toLowerCase().includes(str);
    })
    if (filteredMovies.length === 0) {
      this.setState({movie: [{title: `Sorry, we couldn't find a match for your search. Please try another search.`}]});
    } else {
      this.setState({movie: filteredMovies});  
    } 
  }


  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    $.ajax('/movies', {
      success: (movie) => {
        movies = movie;
        this.setState({movie})
      }
    })
  }
 
  handleChange(event) {
    if (event.target.value === '') {
      this.setState({movie: movies});
    }
    this.setState({inputValue: event.target.value});
  } 

  handleSubmit(event) {
    event.preventDefault();
    this.filteredSelection(this.state.inputValue);
  }


  render() {

    return (
      <div className="container movie-list">
        <div className="nav">
          <h1 className="titleText">MovieList</h1>
        </div>
        <SearchBar inputValue={this.state.inputValue} handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}/>
        <MovieTitleList titles={this.state.movie} />        
      </div>
    );
  }
}

export default App;