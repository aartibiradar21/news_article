import React from 'react';

const Search_box = () => {
  return (
    <div className="form">
      <form>
        <input
          type="search"
          placeholder="Search"
          aria-label="Go"
        />
        <button className="go" type="submit">Go</button>
      </form>
      
    </div>
    
   
  );
}

export default Search_box;

