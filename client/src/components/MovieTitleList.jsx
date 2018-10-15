import React from 'react';
import MovieTitle from './MovieTitle.jsx';

const MovieTitleList = ({titles}) => (
  <div>
	  <ul className="list-group">
	    {titles.map((ele, i) => 
	  	(<MovieTitle movie={ele.title} key={i} />))}
	  </ul>
  </div>
);

export default MovieTitleList;
