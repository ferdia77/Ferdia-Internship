import React, { useEffect, useState } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "../components/UI/Skeleton";

const ItemDetails = () => {
  const { nftId } = useParams();

  const [loading, setLoading] = useState(true);
  const [itemDetails, setItemDetails] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function fetchItemDetails() {
    const response = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${nftId}`
    );
    console.log(response);
    setLoading(false);
    setItemDetails(response.data);
  }

  useEffect(() => {
    fetchItemDetails();
    console.log(nftId);
  }, []);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            <div className="row">
              {loading ? (
                <>
                  <div className="col-md-6 text-center">
                    <Skeleton width="100%" height="100%" borderRadius={6}/>
                  </div>
                  <div className="col-md-6">
                    <div className="item_info">
                      <h2><Skeleton width={160} height={40} borderRadius={4} /></h2>

                      <div className="item_info_counts">
                        <div className="item_info_views">
                         <Skeleton  width={50} height={30} borderRadius={4}/>
                        </div>
                        <div className="item_info_like">
                          <Skeleton width={30} height={30} borderRadius={4}/>
                        </div>
                      </div>
                      <p><Skeleton width="100%" height={70} borderRadius={8}/></p>
                      <div className="d-flex flex-row">
                        <Skeleton width={120} height={60} borderRadius={6} />
                        <div></div>
                      </div>
                      <div className="de_tab tab_simple">
                        <Skeleton width={120} height={60} borderRadius={6}/>
                        <div className="spacer-40"></div>
                        <h6>Price</h6>
                        <div className="nft-item-price">
                        <Skeleton width={120} height={60} borderRadius={6}/>
                          <span><Skeleton width={120} height={60} borderRadius={6}/></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-6 text-center">
                    <img
                      src={itemDetails.nftImage}
                      className="img-fluid img-rounded mb-sm-30 nft-image"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="item_info">
                      <h2>{itemDetails.title}</h2>

                      <div className="item_info_counts">
                        <div className="item_info_views">
                          <i className="fa fa-eye"></i>
                          {itemDetails.views}
                        </div>
                        <div className="item_info_like">
                          <i className="fa fa-heart"></i>
                          {itemDetails.likes}
                        </div>
                      </div>
                      <p>{itemDetails.description}</p>
                      <div className="d-flex flex-row">
                        <div className="mr40">
                          <h6>Owner</h6>
                          <div className="item_author">
                            <div className="author_list_pp">
                              <Link to="/author">
                                <img
                                  className="lazy"
                                  src={itemDetails.ownerImage}
                                  alt=""
                                />
                                <i className="fa fa-check"></i>
                              </Link>
                            </div>
                            <div className="author_list_info">
                              <Link to="/author">{itemDetails.ownerName}</Link>
                            </div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                      <div className="de_tab tab_simple">
                        <div className="de_tab_content">
                          <h6>Creator</h6>
                          <div className="item_author">
                            <div className="author_list_pp">
                              <Link to="/author">
                                <img
                                  className="lazy"
                                  src={itemDetails.creatorImage}
                                  alt=""
                                />
                                <i className="fa fa-check"></i>
                              </Link>
                            </div>
                            <div className="author_list_info">
                              <Link to="/author">
                                {itemDetails.creatorName}
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="spacer-40"></div>
                        <h6>Price</h6>
                        <div className="nft-item-price">
                          <img src={EthImage} alt="" />
                          <span>{itemDetails.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItemDetails;
