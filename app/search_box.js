import React from 'react';

const Search_box = () => {
  return (
   <>
        <input
          type="search"
          placeholder="Search"
          aria-label="Go"
        />
        <button className="go" type="submit">Go</button>
    
   </>
  );
}

export default Search_box;

