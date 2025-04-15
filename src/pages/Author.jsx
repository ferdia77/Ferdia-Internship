import React from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Skeleton from "../components/UI/Skeleton";

const Author = () => {
  const [loading, setLoading] = useState(true);
  const [author, setAuthor] = useState({});
  const [collection, setCollection] = useState([]);
  const { authorId } = useParams()
  const [isFollowing, setIsFollowing] = useState(false)

  async function fetchAuthors() {
    const response = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${authorId}`
    );
    console.log(response.data);
    setLoading(false);
    setCollection(response.data.nftCollection);
    setAuthor(response.data);
  }

  useEffect(() => {
    fetchAuthors();
    console.log(authorId)
  }, []);

   function followBtn() {
    setIsFollowing((prev) => !prev)
   }

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              {loading ? (
                <>
                  <div className="col-md-12">
                    <div className="d_profile de-flex">
                      <Skeleton  width={70} height={70} borderRadius={50} />
                      <div className="profile_follow de-flex">
                        <div className="de-flex-col">
                          <Skeleton width={160} height={44} borderRadius={12}/>
                          
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="de_tab tab_simple">
                      <AuthorItems author={author} collection={collection} />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-12">
                    <div className="d_profile de-flex">
                      <div className="de-flex-col">
                        <div className="profile_avatar">
                          <img src={author.authorImage} alt="" />

                          <i className="fa fa-check"></i>
                          <div className="profile_name">
                            <h4>
                              {author.authorName}
                              <span className="profile_username">
                                {author.tag}
                              </span>
                              <span id="wallet" className="profile_wallet">
                                {author.address}
                              </span>
                              <button id="btn_copy" title="Copy Text">
                                Copy
                              </button>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="profile_follow de-flex">
                        <div className="de-flex-col">
                          <div className="profile_follower">
                             {isFollowing ? author.followers + 1 : author.followers} followers
                          </div>
                          <button
                            onClick={followBtn}
                            to="#"
                            className="btn-main"
                          >
                            {isFollowing ? "Unfollow" : "Follow"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="de_tab tab_simple">
                      <AuthorItems author={author} collection={collection} />
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

export default Author;
