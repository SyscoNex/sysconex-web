import ItodoImage from "../../../elements/itodo-img";
import NavLink from "@/elements/nav-link";
import SectionTestimonials1 from "./section-testimonials1";
import projectsData from "@/data/projects.json"; // <-- import JSON

function SectionCaseStudy1() {
    return (
        <>
            <div className="section-full p-t110 p-b80 sx-bg-light sx-case-study-outer wow fadeInDown" data-wow-duration="1000ms">
                <div className="container">
                    {/* Large Title */}
                    <div className="large-title-block">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                {/* TITLE START */}
                                <div className="section-head left">
                                    <div className="sx-head-s-title">Our Projects So far</div>
                                    <div className="sx-head-l-title">
                                        <h2 className="sx-title">Innovative IT Solutions for Every Industry.</h2>
                                    </div>
                                </div>
                                {/* TITLE END */}
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="large-title-info">
                                    <p>
                                        We have successfully delivered a wide range of innovative IT solutions that blend creativity with robust technology. 
                                        Our common design approach ensures that every project is tailored to deliver high performance and meet the unique needs of our clients.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section-content">
                        <div className="owl-carousel sx-case-st-carousel">
                            {projectsData.map(project => (
                                <div className="item" key={project.id}>
                                    <div className="sx-case-study-bx sx-overlay-effect">
                                        <div className="sx-case-media sx-img-overlay" style={{ height: "260px", overflow: "hidden", flexShrink: 0 }}>
                                            {/* Portfolio link */}
                                            <NavLink to={project.portfolioLink} style={{ display: "block", height: "100%" }}>
                                                <ItodoImage src={project.image} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                                            </NavLink>
                                            <NavLink to={project.portfolioLink} className="sx-case-link">
                                                <i className="flaticon-up-right-arrow" />
                                            </NavLink>
                                        </div>

                                        <div className="sx-case-info">
                                            <div className="sx-s-title">{project.category} Design</div>

                                            {/* Portfolio Title */}
                                            <NavLink className="sx-l-title" to={project.portfolioLink}>
                                                <h2 className="sx-title">{project.title}</h2>
                                            </NavLink>

                                            <div className="sx-case-readmore">
                                                {/* Internal Portfolio Link */}
                                                <NavLink 
                                                    to={project.portfolioLink} 
                                                    title="READ MORE" 
                                                    rel="bookmark" 
                                                    className="site-button icon"
                                                >
                                                    <i className="fa fa-long-arrow-right" /> Portfolio
                                                </NavLink>

                                                {/* External Site Link */}
                                                {project.siteLink && (
                                                <a 
                                                    href={project.siteLink} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="site-button icon" 
                                                    style={{ marginLeft: "10px" }}
                                                >
                                                    <i className="fa fa-external-link" /> Visit Site
                                                </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* testimonial section */}
                        <SectionTestimonials1 />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SectionCaseStudy1;
