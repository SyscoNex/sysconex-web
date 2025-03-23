import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import SectionTestimonials1 from "./section-testimonials1";

const projectsData = [
    {
      id: 1,
      category: "Healthcare",
      title: "Blood Donation Project",
      image: "images/vid-1-bg.jpg",
      link: "/portfolio/blood-donation"
    },
    {
      id: 2,
      category: "Education",
      title: "LMS Project",
      image: "images/projects/Logo1.png",
      link: "https://student-management-system-frontend-lime.vercel.app/"
    },
    {
      id: 3,
      category: "Car Renting",
      title: "Car Renting Project",
      image: "images/projects/Screenshot 2025-03-04 153508.png",
      link: "https://weddingcarrenting.netlify.app/login"
    }
  ];

function SectionCaseStudy1() {
    return (
        <>
            <div className="section-full p-t110 p-b80 sx-bg-light sx-case-study-outer wow fadeInDown" data-wow-duration="1000ms">
                <div className="container">
                    {/*Large Title*/}
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
                                <div className=" large-title-info">
                                    <p> We have successfully delivered a wide range of innovative IT solutions that blend creativity with robust technology. Our common design approach ensures that every project is tailored to deliver high performance and meet the unique needs of our clients.
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
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to={project.link}>
                                            <ItodoImage src={project.image} alt={project.title} />
                                        </NavLink>
                                        <NavLink to={project.link} className="sx-case-link">
                                            <i className="flaticon-up-right-arrow" />
                                        </NavLink>
                                    </div>
                                    <div className="sx-case-info">
                                        <div className="sx-s-title">{project.category} Design</div>
                                        <NavLink className="sx-l-title" to={project.link}>
                                            <h2 className="sx-title">{project.title}</h2>
                                        </NavLink>
                                        <div className="sx-case-readmore">
                                            <NavLink to={project.link} title="READ MORE" rel="bookmark" className="site-button icon">
                                                <i className="fa fa-long-arrow-right" />Read More
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                        {/*testimonial section */}
                        <SectionTestimonials1 />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionCaseStudy1;