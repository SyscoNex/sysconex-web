import NavLink from "@/elements/nav-link";
import servicesData from "@/data/services.json";

function SectionServices1() {
    return (
        <>
            <div className="section-full p-t110 p-b80 sx-our-services-outer sx-bg-light">
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head center">
                        <div className="sx-head-s-title">Our Services</div>
                        <div className="sx-head-l-title">
                            <h2 className="sx-title">Sophisticated expertise for fast-evolving IT solutions and digital growth.</h2>
                        </div>
                    </div>
                    {/* TITLE END */}
                    <div className="section-content">
                        <div className="sx-our-services-bx">
                            <div className="row">
                                {servicesData.slice(0, 3).map((service, index) => (
                                    <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms" key={service.id}>
                                        <div className="sx-service-bx-1">
                                            <div className="sx-icon-box-wraper" style={{ minHeight: "280px" }}>
                                                <div className="sx-service-bx-icon scale-in-center">
                                                    <span className="sx-text-primary"><i className={service.icon} /></span>
                                                </div>
                                                <div className="icon-content">
                                                    <h4 className="sx-tilte">{service.title}</h4>
                                                    <p>{service.description}</p>
                                                    <div className="sx-center-btn">
                                                        <NavLink to={`/services/${service.slug}`} className={`site-button-circle ${index === 1 ? 'active' : ''}`}>
                                                            <i className="fa fa-long-arrow-right" />
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionServices1;