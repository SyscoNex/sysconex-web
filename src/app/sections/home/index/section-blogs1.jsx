import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";

function SectionBlogs1() {
    return (
        <>
            <div className="section-full p-t110 p-b80 sx-bg-white sx-latest-blog-outer wow fadeInDown" data-wow-duration="1000ms">
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head center">
                        {/*<div className="sx-head-s-title">Our Blogs</div>*/}
                        <div className="sx-head-l-title">
                            <h2 className="sx-title">Meet Our Team</h2>
                        </div>
                    </div>
                    {/* TITLE END */}
                    <div className="section-content">
                        <div className="owl-carousel sx-latest-blog-1-carousel m-b30">
                            {/*One block*/}
                            <div className="item">
                                <div className="sx-latest-post-st-1">
                                    <div className="sx-post-media sx-img-effect img-reflection">
                                        <NavLink to="/blogs/detail"><ItodoImage src="images/team/sachintha.jpeg" alt="" /></NavLink>
                                    </div>
                                    <div className="sx-post-info p-t30">
                                        {/*<div className="sx-post-meta ">
                                            <ul>
                                                <li className="post-date"><NavLink to="/blogs/detail"><i className="fa fa-calendar" />01 Jan 2023</NavLink></li>
                                                <li className="post-author"><NavLink to="/blogs/detail"><i className="fa fa-comments" />0 Comments</NavLink></li>
                                            </ul>
                                        </div>*/}
                                        <div className="sx-post-title ">
                                            <h4 className="post-title"><NavLink to="https://sachinthahasaranga.netlify.app/">Sachintha Niyangoda</NavLink></h4>
                                        </div>
                                        <div className="sx-post-readmore">
                                            <NavLink to="/blogs/detail" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*One two*/}
                            <div className="item">
                                <div className="sx-latest-post-st-1">
                                    <div className="sx-post-media sx-img-effect img-reflection">
                                        <NavLink to="/blogs/detail"><ItodoImage src="images/team/akashi.jpeg" alt="" /></NavLink>
                                    </div>
                                    <div className="sx-post-info p-t30">
                                        {/*<div className="sx-post-meta ">
                                            <ul>
                                                <li className="post-date"><NavLink to="/blogs/detail"><i className="fa fa-calendar" />01 Jan 2023</NavLink></li>
                                                <li className="post-author"><NavLink to="/blogs/detail"><i className="fa fa-comments" />0 Comments</NavLink></li>
                                            </ul>
                                        </div>*/}
                                        <div className="sx-post-title ">
                                            <h4 className="post-title"><NavLink to="/blogs/detail">Akash Induruwa</NavLink></h4>
                                        </div>
                                        <div className="sx-post-readmore">
                                            <NavLink to="/blogs/detail" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*One three*/}
                            <div className="item">
                                <div className="sx-latest-post-st-1">
                                    <div className="sx-post-media sx-img-effect img-reflection">
                                        <NavLink to="/blogs/detail"><ItodoImage src="images/team/sahan.jpeg" alt="" /></NavLink>
                                    </div>
                                    <div className="sx-post-info p-t30">
                                        {/*<div className="sx-post-meta ">
                                            <ul>
                                                <li className="post-date"><NavLink to="/blogs/detail"><i className="fa fa-calendar" />01 Jan 2023</NavLink></li>
                                                <li className="post-author"><NavLink to="/blogs/detail"><i className="fa fa-comments" />0 Comments</NavLink></li>
                                            </ul>
                                        </div>*/}
                                        <div className="sx-post-title ">
                                            <h4 className="post-title"><NavLink to="/blogs/detail">Sahan Thilakaratne</NavLink></h4>
                                        </div>
                                        <div className="sx-post-readmore">
                                            <NavLink to="/blogs/detail" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionBlogs1;