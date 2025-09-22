import Banner from "../../../sections/common/banner";
import SectionClients2 from "../../../sections/home/index2/section-clients2";
import { NavLink } from "react-router-dom";
import ItodoImage from "../../../elements/itodo-img";
import { bannerData } from "../../../../globals/banner";
import projectsData from "../../../../data/projects.json"; // ✅ import JSON

function Portfolio1Page() {
    return (
        <>
            <Banner _data={bannerData.portfolio1} />

            {/* SECTION CONTENT START */}
            <div className="section-full p-t100 p-b70 sx-bg-light mobile-page-padding">
                <div className="container">
                    <div className="section-content">
                        {/*Large Title*/}
                        <div className="large-title-block">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="section-head left">
                                        <div className="sx-head-s-title">Our Case Study</div>
                                        <div className="sx-head-l-title">
                                            <h2 className="sx-title">Our Itodo IT Solution Special Case Studies.</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="large-title-info">
                                        <p>
                                            Nunc tempor ultrices iaculis. Cras suscipit odio ut neque interdum, 
                                            sed faucibus lorem feugiat. Donec a lobortis arcu. Fusce viverra 
                                            a dolor quis tincidunt. Pellentesque vitae diam sodales nisl dapibus finibus.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Case Studies List from JSON */}
                        <div className="masonry-outer mfp-gallery news-grid clearfix row">
                            {projectsData.map(project => (
                                <div className="masonry-item col-lg-6 col-md-6 col-sm-12 m-b30" key={project.id}>
                                    <div className="sx-case-study-bx sx-overlay-effect">
                                        <div className="sx-case-media sx-img-overlay">
                                            <NavLink to={project.portfolioLink}>
                                                <ItodoImage src={project.image} alt={project.title} />
                                            </NavLink>
                                            <NavLink to={project.portfolioLink} className="sx-case-link">
                                                <i className="flaticon-up-right-arrow" />
                                            </NavLink>
                                        </div>
                                        <div className="sx-case-info">
                                            <div className="sx-s-title">{project.category} Design</div>
                                            <NavLink className="sx-l-title" to={project.portfolioLink}>
                                                <h2 className="sx-title">{project.title}</h2>
                                            </NavLink>
                                            <div className="sx-case-readmore" style={{ display: "flex", gap: "10px" }}>
                                                <NavLink 
                                                    to={project.portfolioLink} 
                                                    title="READ MORE" 
                                                    rel="bookmark" 
                                                    className="site-button icon"
                                                >
                                                    <i className="fa fa-long-arrow-right" /> Portfolio
                                                </NavLink>
                                                <a 
                                                    href={project.siteLink} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="site-button icon"
                                                >
                                                    <i className="fa fa-external-link" /> Visit Site
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Optional Pagination (you can keep or remove) */}
                    <div className="sx-pagination-wra text-center">
                        <ul className="sx-pagination">
                            <li><a href="#"><span className="fa fa-long-arrow-left" /></a></li>
                            <li><a href="#">01</a></li>
                            <li className="active"><a href="#">02</a></li>
                            <li><a href="#">03</a></li>
                            <li><a href="#">04</a></li>
                            <li><a href="#"><span className="fa fa-long-arrow-right" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* SECTION CONTENT END */}

            <SectionClients2 />
        </>
    )
}

export default Portfolio1Page;
