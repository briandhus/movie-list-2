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
      data: [],
      title: movies,
      value: ''
    },
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  } 

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="container movie-list">

        <div className="nav">
          <h1 className="titleText">MovieList</h1>
        </div>

        <div className="row">
          <div className="col-md-12">
            <SearchBar value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
          </div>
        </div>
     
        <div>
          <MovieTitleList titles={this.state.title} />
        </div> 
       
      </div>
    );
  }
}

export default App;