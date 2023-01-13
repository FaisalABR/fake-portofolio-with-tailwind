import React from "react";
import web1 from "../assets/web1.png";
import web2 from "../assets/web2.png";
import web3 from "../assets/web3.png";
import web4 from "../assets/web4.png";
import web5 from "../assets/web5.png";
import web6 from "../assets/web6.png";

const Portfolio = () => {
  return (
    <section className="max-w-full">
      <h1 className="text-center text-5xl text-emerald-500 font-ibm capitalize">
        my portfolio
      </h1>
      <div className="flex flex-wrap gap-5 p-10 lg:p-2 lg:justify-center">
        <div>
          <img src={web1} alt="portfolio1" className="lg:w-96 " />
        </div>
        <div>
          <img src={web2} alt="portfolio2" className="lg:w-96" />
        </div>
        <div>
          <img src={web3} alt="portfolio3" className="lg:w-96" />
        </div>
        <div>
          <img src={web4} alt="portfolio4" className="lg:w-96" />
        </div>
        <div>
          <img src={web5} alt="portfolio5" className="lg:w-96" />
        </div>
        <div>
          <img src={web6} alt="portfolio6" className="lg:w-96" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
