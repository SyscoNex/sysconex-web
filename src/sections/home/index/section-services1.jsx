import NavLink from "@/elements/nav-link";

function SectionServices1() {
    return (
        <>
            <div className="section-full p-t110 p-b80 sx-our-services-outer sx-bg-light">
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head center">
                        <div className="sx-head-s-title">Our Services</div>
                        <div className="sx-head-l-title">
                            <h2 className="sx-title">Sophisticated expertise for fast-evolving IT solutions in the legal industry.</h2>
                        </div>
                    </div>
                    {/* TITLE END */}
                    <div className="section-content">
                        <div className="sx-our-services-bx">
                            <div className="row">
                                {/* Block one */}
                                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-service-bx-1">
                                        <div className="sx-icon-box-wraper">
                                            <div className="sx-service-bx-icon scale-in-center">
                                                <span className="sx-text-primary"><i className="flaticon-security" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="sx-tilte">Web And Desktop Application</h4>
                                                <p>Scalable, secure, and high-performance applications tailored to your business needs.</p>
                                                <div className="sx-center-btn">
                                                    <NavLink to="/services/detail" className="site-button-circle">
                                                        <i className="fa fa-long-arrow-right" />
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block Two */}
                                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-service-bx-1">
                                        <div className="sx-icon-box-wraper">
                                            <div className="sx-service-bx-icon scale-in-center">
                                                <span className="sx-text-primary"><i className="flaticon-coding" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="sx-tilte">Mobile Application Development</h4>
                                                <p>Intuitive and powerful mobile apps that enhance user experience and engagement.</p>
                                                <div className="sx-center-btn">
                                                    <NavLink to="/services/detail" className="site-button-circle active">
                                                        <i className="fa fa-long-arrow-right" />
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block Three */}
                                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-service-bx-1">
                                        <div className="sx-icon-box-wraper">
                                            <div className="sx-service-bx-icon scale-in-center">
                                                <span className="sx-text-primary"><i className="flaticon-smart-contracts" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="sx-tilte">AI & ML Based Research Applications</h4>
                                                <p>Cutting-edge AI solutions that drive insights, automation, and innovation.</p>
                                                <div className="sx-center-btn">
                                                    <NavLink to="/services/detail" className="site-button-circle">
                                                        <i className="fa fa-long-arrow-right" />
                                                    </NavLink>
                                                </div>
                                            </div>
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

export default SectionServices1;