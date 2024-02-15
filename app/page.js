import React from 'react';
import News_box from './news_box';
import Search_box from './search_box';

const Page = () => {
  return (
  <>
    <div className="container-fluid">
      <div className="box-1">
        <div className="col d-flex justify-content-center">
          <h1>NewsAPI</h1>
           <div class="circle"></div>
          <h1>Org</h1>
        </div>
        
      </div>
      < div className="box-2">
       <Search_box/>
      </div>
    </div>
    
     <News_box />
    
     </>
  );
};

export default Page;

