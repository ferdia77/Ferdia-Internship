import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import axios from "axios";
import SimpleSlider from "../../pages/Slider";






const HotCollections = () => {
  const [hotCollections, setHotCollections] = useState([])
  const [loading, setLoading] = useState(false)

  async function fetchHotCollections() {
    const response = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections"
    )
    console.log(response);
    setHotCollections(response.data)
  }

  useEffect(() => {
    fetchHotCollections();
  }, [fetchHotCollections])

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <SimpleSlider>
            {/* {
              loading ? (
                <div className="skeleton">
                  <div className="skeleton__loading">
                    <div className="skeleton__loading--state">
                      Loading
                    </div>
                  </div>
                </div>
              ) : (
                {hotCollections.map((hotCollection, index) => (
            
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
                    <div className="nft_coll">
                      <div className="nft_wrap">
                        <Link to="/item-details">
                          <img src={hotCollection.nftImage} className="lazy img-fluid" alt="" />
                        </Link>
                      </div>
                      <div className="nft_coll_pp">
                        <Link to="/author">
                          <img className="lazy pp-coll" src={hotCollection.authorImage} alt="" />
                        </Link>
                        <i className="fa fa-check"></i>
                      </div>
                      <div className="nft_coll_info">
                        <Link to="/explore">
                          <h4>{hotCollection.title}</h4>
                        </Link>
                        <span>{hotCollection.code}</span>
                      </div>
                    </div>
                  </div>
                
              ))}
              )}
             */}
            {hotCollections.map((hotCollection, index) => (
            
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
              <div className="nft_coll">
                <div className="nft_wrap">
                  <Link to="/item-details">
                    <img src={hotCollection.nftImage} className="lazy img-fluid" alt="" />
                  </Link>
                </div>
                <div className="nft_coll_pp">
                  <Link to="/author">
                    <img className="lazy pp-coll" src={hotCollection.authorImage} alt="" />
                  </Link>
                  <i className="fa fa-check"></i>
                </div>
                <div className="nft_coll_info">
                  <Link to="/explore">
                    <h4>{hotCollection.title}</h4>
                  </Link>
                  <span>{hotCollection.code}</span>
                </div>
              </div>
            </div>
          
        ))}
          </SimpleSlider>
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
