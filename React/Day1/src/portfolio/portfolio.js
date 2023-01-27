import React from "react";
import PortfolioCard from "./portfolioCard/PortfolioCard";
import img1 from './imagesPortfolio/covide.png'
import img2 from './imagesPortfolio/pizzaReturent.png'
import img3 from './imagesPortfolio/mywork.png'
import img4 from './imagesPortfolio/wp4974496.webp'
function Portfolio() {
  return (
    <div className="portfolio py-5">
      <div className="head text-capitalize">
        <h2 className=" text-center" style={{color:"#F4BC11 "}}>
          portfolio
        </h2>
      </div>
      <div className="container">
        <div className="row justify-content-center">
            {/* card Of portfolio */}
            <PortfolioCard image={img1}/>
            <PortfolioCard image={img2}/>
            <PortfolioCard image={img3}/>
            <PortfolioCard image={img4}/>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
