import React from 'react';
import MovieTitle from './MovieTitle.jsx';

function MovieTitleList(props) {
  {props.titles.map((movie) => 
  	<MovieTitle movie={movie.title} />)}
};

export default MovieTitleList;
