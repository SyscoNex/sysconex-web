import { publicUrlFor } from "@/globals/constants";
import NavLink from "@/elements/nav-link";
import servicesData from "@/data/services.json";

function SectionWhyChooseUs1() {
    return (
        <>
            <div
                className="section-full p-t110 p-b80 sx-why-chooseus-outer sx-bg-light bg-cover"
                style={{ backgroundImage: `url(${publicUrlFor("images/background/bg-1.jpg")})` }}
            >
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head center">
                        <div className="sx-head-s-title" style={{ color: "white" }}>
                            Why Choose Us
                        </div>
                        <div className="sx-head-l-title">
                            <h2 className="sx-title" style={{ color: "white" }}>
                                Our Work Services
                            </h2>
                        </div>
                    </div>
                    {/* TITLE END */}

                    <div className="section-content">
                        <div className="sx-icon-bx-wrap">
                            <div className="row">
                                {servicesData.map(service => (
                                    <div
                                        className="col-lg-4 col-md-6 wow fadeInDown"
                                        data-wow-duration="1000ms"
                                        key={service.id}
                                    >
                                        <div className="sx-icon-bx-1">
                                            <div className="sx-icon-box-wraper" style={{ minHeight: "250px" }}>
                                                <div className="sx-icon-bx-icon">
                                                    <span className="sx-text-primary">
                                                        <i className={service.icon} />
                                                    </span>
                                                </div>
                                                <div className="icon-content">
                                                    <NavLink to={`/services/${service.slug}`}>
                                                        <h4 className="sx-tilte">{service.title}</h4>
                                                    </NavLink>
                                                    <p>{service.description}</p>
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
    );
}

export default SectionWhyChooseUs1;
