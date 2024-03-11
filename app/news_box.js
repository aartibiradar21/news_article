import React from "react";
import NewsItem from "./column.js";

const News_box = ({ newsList }) => {
  return (
    <div className="container">
      <h1 className="newsitem">Top News from India</h1>
      <div className="row">
        <NewsItem news={newsList[0]} />
        <NewsItem news={newsList[1]} />
        <NewsItem news={newsList[2]} />
        <NewsItem news={newsList[3]} />
        <NewsItem news={newsList[4]} />
        <NewsItem news={newsList[5]} />
        <NewsItem news={newsList[6]} />
        <NewsItem news={newsList[7]} />
        <NewsItem news={newsList[8]} />
      </div>
    </div>
  );
};

export default News_box;

