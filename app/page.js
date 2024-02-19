import React from 'react';
import News_box from './news_box';
import Search_box from './search_box';
import Footer from "./footer";

const Page = () => {
  return (
  <>
    <div className="container-fluid">
      <div className="heading">
        <div className="col d-flex justify-content-center">
          <h1>NewsAPI</h1>
           <img className="circleimg" src="/Ellipse 1.png" alt="circleimg"></img>
          <h1>Org</h1>
        </div>
        
      </div>
      < div className="box-2">
       <Search_box/>
      </div>
    </div>
    
     <News_box />
     <Footer/>
    
     </>
  );
};

export default Page;

