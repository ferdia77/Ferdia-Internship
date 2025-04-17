import React from "react";
import { Link } from "react-router-dom";

const BrowseByCategory = () => {
  return (
    <section id="section-category" className="no-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Browse by category</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <Link to="/explore" data-aos="fade-right" className="icon-box style-2 rounded">
              <i data-aos="fade-right" className="fa fa-image"></i>
              <span data-aos="fade-right">Art</span>
            </Link>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <Link to="/explore" data-aos="fade-right" className="icon-box style-2 rounded">
              <i data-aos="fade-right" className="fa fa-music"></i>
              <span data-aos="fade-right">Music</span>
            </Link>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <Link to="/explore" data-aos="fade-right" className="icon-box style-2 rounded">
              <i data-aos="fade-right" className="fa fa-search"></i>
              <span data-aos="fade-right">Domain Names</span>
            </Link>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <Link to="/explore" data-aos="fade-right" className="icon-box style-2 rounded">
              <i data-aos="fade-right" className="fa fa-globe"></i>
              <span data-aos="fade-right">Virtual Worlds</span>
            </Link>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <Link to="/explore" data-aos="fade-right" className="icon-box style-2 rounded">
              <i data-aos="fade-right" className="fa fa-vcard"></i>
              <span data-aos="fade-right">Trading Cards</span>
            </Link>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <Link to="/explore" data-aos="fade-right" className="icon-box style-2 rounded">
              <i data-aos="fade-right" className="fa fa-th"></i>
              <span data-aos="fade-right">Collectibles</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
