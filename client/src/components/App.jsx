import React from 'react';
import $ from 'jquery';
// import movies from '../data/sampleMovieList.js';
import MovieTitleList from './MovieTitleList.jsx';
import MovieTitle from './MovieTitle.jsx';
import SearchBar from './SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    const movies = [
      {title: 'Mean Girls'},
      {title: 'Hackers'},
      {title: 'The Grey'},
      {title: 'Sunshine'},
      {title: 'Ex Machina'}
    ];
    this.state = {
      // data: [],
      title: movies,
      inputValue: ''
    },
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  filteredSelection(str) {
    this.state.title.forEach((ele) => {
      if (ele.includes(str)) {
        this.setState({title: ele});
      }     
    });
  }
  
  handleChange(event) {
    this.setState({inputValue: event.target.value});
  } 

  handleSubmit(event) {
    event.preventDefault();
    filteredSelection(this.state.inputValue);
  }


  render() {

    return (
      <div className="container movie-list">
        <div className="nav">
          <h1 className="titleText">MovieList</h1>
        </div>
        <SearchBar inputValue={this.state.inputValue} handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}/>
        <MovieTitleList titles={this.state.title} />        
      </div>
    );
  }
}

export default App;