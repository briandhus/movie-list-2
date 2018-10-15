import React from 'react';

const SearchBar = (props) => (
  <form onSubmit={props.handleSubmit}>
	  <input id="input" type="text" name="name" value="Search..." onChange={props.handleChange} size="50"/>
	  <input id="button" type="submit" value="Go!" />
	</form>
)

export default SearchBar;