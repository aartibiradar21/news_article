import React from "react";

const NewsItem = ({ news }) => {
  return (
    <div className="col-lg-4 col-sm-12 box">
        <img src={news.img}></img>
      <h2>{news.title}</h2>
      <p>{news.description}</p>
    </div>
  );
};

export default NewsItem;