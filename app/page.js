import React from 'react';
import Search_box from './search_box';
import Footer from './footer';
import News_box from "./news_box";
import news from "./news_data";

const Page = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center heading">
          <div className="col text-center">
            <span>NewsAPI</span>
            <img className="circleimg" src='/Ellipse 1.png' alt="circleimg" />
            <span>Org</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col text-center search">
            <Search_box />
          </div>
        </div>
        <News_box newsList={news} />
        <Footer />
      </div>
    </>
  );
};

export default Page;

