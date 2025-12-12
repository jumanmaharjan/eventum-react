import React from "react";

const SinglePostSection = () => {
  return (
    <>
      <section className="single-post-section">
        <div className="container">
          <figure className="single-content-imgage figure-round-border mb-5">
            <img src="assets/img/eventux-image-037.jpg" alt="" />
          </figure>

          <div className="row">
            <div className="col-lg-8 pe-lg-5">
              <p className="single-content-wrap">
                Orci rerum. Ipsa enim excepturi tincidunt, voluptatem sociosqu,
                tincidunt ac, anim ex morbi porta mollis taciti officia potenti.
                Lectus reiciendis. Commodo aliqua tellus! Repudiandae, illo
                ornare, ut odit dictumst! Senectus, sociis. Cupiditate dolorum
                perspiciatis, aliquip alias? Ipsam error varius sem aperiam
                sunt, tenetur integer ridiculus praesentium sequi pellentesque.
                Recusandae provident cum blandit assumenda. Quod, odit dicta
                pellentesque parturient necessitatibus laboriosam, odit odit
                sagittis sint, laoreet? Dictum facilisi ante lacus a! Diam
                semper, habitasse pretium assumenda proident aliqua, egestas
                tellus, provident tempus, faucibus, tempore commodi, unde? Illo
                duis per eros sunt! Quaerat ipsa! A aliquip quasi! Provident, in
                iste, metus irure.
              </p>

              <div className="post-socail-wrap">
                <h6>SHARE IT ON SOCIAL MEDIA :</h6>
                <div className="social-icon-wrap">
                  <div className="social-icon social-facebook">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook"></i>
                      <span>Facebook</span>
                    </a>
                  </div>
                  <div className="social-icon social-twitter">
                    <a
                      href="https://www.twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                      <span>Twitter</span>
                    </a>
                  </div>
                  <div className="social-icon social-skype">
                    <a
                      href="https://www.skype.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-skype"></i>
                      <span>Skype</span>
                    </a>
                  </div>
                  <div className="social-icon social-whatsapp">
                    <a
                      href="https://www.whatsapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-whatsapp"></i>
                      <span>Whatsapp</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="meta-wrap">
                <div className="tag-links">
                  <a href="blog-archive.html">ATTENDENT</a>,
                  <a href="blog-archive.html">CONFERENCE</a>,
                  <a href="blog-archive.html">EVENT</a>,
                  <a href="blog-archive.html">PROGRAMME</a>
                </div>
              </div>

              <div className="divider-line">
                <span className="st-line"></span>
              </div>

              <div id="commentArea" className="comment-area">
                <h3 className="comment-title">3 Comments</h3>
                <div className="comment-area-inner">
                  <ol>
                    <li>
                      <figure className="comment-thumb">
                        <img src="assets/img/eventux-image-038.jpg" alt="" />
                      </figure>
                      <div className="comment-content">
                        <div className="comment-header">
                          <h5 className="author-name">Tom Sawyer</h5>
                          <span className="post-on">Jana 10 2021</span>
                        </div>
                        <p>
                          Officia amet posuere voluptates, mollit montes eaque
                          accusamus laboriosam quisque cupidatat dolor pariatur,
                          pariatur auctor.
                        </p>
                        <a href="#replyForm" className="reply">
                          <i className="fas fa-reply"></i>Reply
                        </a>
                      </div>
                    </li>
                    <li>
                      <ol>
                        <li>
                          <figure className="comment-thumb">
                            <img
                              src="assets/img/eventux-image-039.jpg"
                              alt=""
                            />
                          </figure>
                          <div className="comment-content">
                            <div className="comment-header">
                              <h5 className="author-name">John Doe</h5>
                              <span className="post-on">Jana 10 2020</span>
                            </div>
                            <p>
                              Officia amet posuere voluptates, mollit montes
                              eaque accusamus laboriosam quisque cupidatat dolor
                              pariatur, pariatur auctor.
                            </p>
                            <a href="#replyForm" className="reply">
                              <i className="fas fa-reply"></i>Reply
                            </a>
                          </div>
                        </li>
                      </ol>
                    </li>
                  </ol>

                  <ol>
                    <li>
                      <figure className="comment-thumb">
                        <img src="assets/img/eventux-image-040.jpg" alt="" />
                      </figure>
                      <div className="comment-content">
                        <div className="comment-header">
                          <h5 className="author-name">Jaan Smith</h5>
                          <span className="post-on">Jana 10 2020</span>
                        </div>
                        <p>
                          Officia amet posuere voluptates, mollit montes eaque
                          accusamus laboriosam quisque cupidatat dolor pariatur,
                          pariatur auctor.
                        </p>
                        <a href="#replyForm" className="reply">
                          <i className="fas fa-reply"></i>Reply
                        </a>
                      </div>
                    </li>
                  </ol>
                </div>

                <div id="replyForm" className="comment-form-wrap">
                  <h2 className="comment-title">Leave a Reply</h2>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <form className="comment-form">
                    <p className="full-width">
                      <label>Comment*</label>
                      <textarea rows="9"></textarea>
                    </p>
                    <p>
                      <label>Name *</label>
                      <input type="text" name="name" />
                    </p>
                    <p>
                      <label>Email *</label>
                      <input type="email" name="email" />
                    </p>
                    <p>
                      <label>Website*</label>
                      <input type="text" name="web" />
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" name="s" />
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </p>
                    <p className="full-width">
                      <input type="submit" name="submit" value="Post comment" />
                    </p>
                  </form>
                </div>

                <div className="post-navigation">
                  <div className="nav-prev">
                    <a href="single-blog.html">
                      <span className="nav-label">Previous</span>
                      <span className="nav-title">
                        WHY YOU SHOULD ATTEND OUR GRAND BUSINESS EVENT?
                      </span>
                    </a>
                  </div>
                  <div className="nav-next">
                    <a href="single-blog.html">
                      <span className="nav-label">Next</span>
                      <span className="nav-title">
                        GOOD NUMBERS OF ATTENDEES IS EXPECTED TO ATTEND EVENT
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <aside className="sidebar">
                <div className="widget widget-bg icon-list-content round-border">
                  <h5 className="bg-title round-border">SEARCH HERE</h5>
                  <p className="widget-bg-info">
                    Luctus nec ullamcorper mattis, pulvinar dapibus leo.
                  </p>
                  <form className="search-form">
                    <input type="text" name="search" placeholder="Search..." />
                    <button className="search-btn">
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                </div>

                <div className="widget widget-bg icon-list-content round-border blog-category">
                  <h5 className="bg-title round-border">OTHER EVENT LIST</h5>
                  <ul>
                    <li>
                      <a href="event-detail.html">
                        <i className="jki jki-arrow-right-circle-line"></i>EVENT
                      </a>
                    </li>
                    <li>
                      <a href="event-detail.html">
                        <i className="jki jki-arrow-right-circle-line"></i>
                        CONFERENCE
                      </a>
                    </li>
                    <li>
                      <a href="event-detail.html">
                        <i className="jki jki-arrow-right-circle-line"></i>EVENT
                        CATEGORIES
                      </a>
                    </li>
                    <li>
                      <a href="event-detail.html">
                        <i className="jki jki-arrow-right-circle-line"></i>
                        ATTENDANCE
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="widget widget-bg icon-list-content round-border side-latest-post">
                  <h5 className="bg-title round-border">RECENT POSTS</h5>
                  <div className="side-latest-post-thumb-wrapper">
                    <div className="side-latest-post-thumb">
                      <figure className="post-thumb">
                        <a href="single-blog.html">
                          <img src="assets/img/eventux-image-034.jpg" alt="" />
                        </a>
                      </figure>
                      <div className="post-content">
                        <h6>
                          <a href="single-blog.html">
                            WHY YOU SHOULD ATTEND OUR GRAND BUSINESS EVENT?
                          </a>
                        </h6>
                        <div className="entry-meta">
                          <span className="posted-on">
                            <a href="blog-archive.html">
                              <i className="icon icon-calendar-page-empty"></i>{" "}
                              August 17, 2023
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="side-latest-post-thumb">
                      <figure className="post-thumb">
                        <a href="single-blog.html">
                          <img src="assets/img/eventux-image-037.jpg" alt="" />
                        </a>
                      </figure>
                      <div className="post-content">
                        <h6>
                          <a href="single-blog.html">
                            “DIGITAL MARKETING” IS POPULAR AMONG OTHER EVENT
                            LIST
                          </a>
                        </h6>
                        <div className="entry-meta">
                          <span className="posted-on">
                            <a href="blog-archive.html">
                              <i className="icon icon-calendar-page-empty"></i>{" "}
                              August 17, 2023
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="side-latest-post-thumb">
                      <figure className="post-thumb">
                        <a href="single-blog.html">
                          <img src="assets/img/eventux-image-035.jpg" alt="" />
                        </a>
                      </figure>
                      <div className="post-content">
                        <h6>
                          <a href="single-blog.html">
                            GOOD NUMBERS OF ATTENDEES IS EXPECTED TO ATTEND
                            EVENT
                          </a>
                        </h6>
                        <div className="entry-meta">
                          <span className="posted-on">
                            <a href="blog-archive.html">
                              <i className="icon icon-calendar-page-empty"></i>{" "}
                              August 17, 2023
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="may-like-post-section">
        <div className="container">
          <h4 className="like-post-title">You may also like..</h4>
          <div className="like-post-warpper">
            <div className="post-like-itme">
              <figure className="post-thumb">
                <a href="single-blog.html">
                  <img src="assets/img/eventux-image-036.jpg" alt="" />
                </a>
              </figure>
              <div className="post-content">
                <h6>
                  <a href="single-blog.html">
                    LATEST UPDATE ON OUR BUSINESS EVENT’S SPEAKER LIST
                  </a>
                </h6>
                <div className="entry-meta">
                  <span className="posted-on">
                    <a href="blog-archive.html">
                      <i className="fas fa-clock"></i> February 29, 2024
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="post-like-itme">
              <figure className="post-thumb">
                <a href="single-blog.html">
                  <img src="assets/img/eventux-image-035.jpg" alt="" />
                </a>
              </figure>
              <div className="post-content">
                <h6>
                  <a href="single-blog.html">
                    GOOD NUMBERS OF ATTENDEES IS EXPECTED TO ATTEND EVENT
                  </a>
                </h6>
                <div className="entry-meta">
                  <span className="posted-on">
                    <a href="blog-archive.html">
                      <i className="fas fa-clock"></i> February 29, 2024
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="post-like-itme">
              <figure className="post-thumb">
                <a href="single-blog.html">
                  <img src="assets/img/eventux-image-037.jpg" alt="" />
                </a>
              </figure>
              <div className="post-content">
                <h6>
                  <a href="single-blog.html">
                    “DIGITAL MARKETING” IS POPULAR AMONG OTHER EVENT LIST
                  </a>
                </h6>
                <div className="entry-meta">
                  <span className="posted-on">
                    <a href="blog-archive.html">
                      <i className="fas fa-clock"></i> February 29, 2024
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="post-like-itme">
              <figure className="post-thumb">
                <a href="single-blog.html">
                  <img src="assets/img/eventux-image-034.jpg" alt="" />
                </a>
              </figure>
              <div className="post-content">
                <h6>
                  <a href="single-blog.html">
                    WHY YOU SHOULD ATTEND OUR GRAND BUSINESS EVENT?
                  </a>
                </h6>
                <div className="entry-meta">
                  <span className="posted-on">
                    <a href="blog-archive.html">
                      <i className="fas fa-clock"></i> February 29, 2024
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePostSection;
