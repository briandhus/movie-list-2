import React from 'react';
import $ from 'jquery';
import MovieTitleList from './MovieTitleList.jsx';
import MovieTitle from './MovieTitle.jsx';
import SearchBar from './SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    const movies = [];
    this.state = {
      // data: [],
      movie: movies,
      inputValue: ''
    },
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovies = this.getMovies.bind(this);
  }

  filteredSelection(str) {
    str = str.toLowerCase();
    let filteredMovies = [];
    this.state.movie.forEach((ele) => {
      let titleLowerCase = ele.title.toLowerCase();
      if (titleLowerCase.includes(str)) {
        filteredMovies.push(ele);
      }     
    });
    this.setState({movie: filteredMovies});
  }

  getMovies() {
    $.ajax('/movies', {
      success: (movie) => {
        this.setState({movie})
      }
    })
  }

  componentDidMount() {
    this.getMovies();
  }
  
  handleChange(event) {
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