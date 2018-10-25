import React from 'react';

const SearchBar = (props) => (
	<div className="row">
    <div className="col-md-12">
		  <form onSubmit={props.handleSubmit}>
			  <input id="input" type="text" onChange={(e) => props.handleChange(e)} size="50"/>
			  <input id="button" type="submit" value="Go!" />
			</form>
		</div>
	</div>
)

export default SearchBar;