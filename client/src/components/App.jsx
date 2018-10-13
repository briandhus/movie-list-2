import React from 'react';
import movies from '../data/sampleMovieList.js';
import MovieTitleList from './MovieTitleList.jsx';
// import MovieTitle from './MovieTitle.js';

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
      <div className="movie-list">
        <h1>Movie List</h1>
        <div>
          <ul><MovieTitleList titles={this.state.movieTitle} /></ul>
        </div>
      </div>
    );
  }
}

export default App;