import React from 'react';
import $ from 'jquery';
// import movies from '../data/sampleMovieList.js';
import MovieTitleList from './MovieTitleList.jsx';
import MovieTitle from './MovieTitle.jsx';

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
      movieTitle: movies
    }
  }

  render() {
    return (
      <div className="container movie-list">
        <div className="nav">
          <h1 className="titleText">MovieList</h1>
        </div>
        <div>
          <MovieTitleList titles={this.state.movieTitle} />
        </div>        
      </div>
    );
  }
}

export default App;