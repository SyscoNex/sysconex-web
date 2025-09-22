import ItodoImage from "../../../elements/itodo-img";

function SectionAboutCompany2Inner() {
    return (
        <>
            <div className="sx-about-bx3-content-wrap">
                <div className="row">
                    {/* IMAGE SIDE */}
                    <div className="col-lg-6 col-md-12">
                        <div className="sx-about-bx3-media">
                            <div className="sx-dot-bx1"><ItodoImage src="images/about/dotted-pic2.png" alt="image" /></div>
                            <div className="sx-dot-bx2"><ItodoImage src="images/about/dotted-pic2.png" alt="image" /></div>
                            <div className="sx-ab3-img-outer">
                                <div className="sx-ab3-media">
                                    <ItodoImage src="images/about/mission1.png" alt="Mission and Vision" />
                                </div>
                            </div>
                            <div className="sx-ab-circle-box">
                                <div className="sx-ab-circle-box-content">
                                    <span className="sx-exp">Sysconex</span>
                                    <div className="sx-exp-title-outer">
                                        <span className="sx-exp-title-1">Mission</span>
                                        <span className="sx-exp-title-2">& Vision</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CONTENT SIDE */}
                    <div className="col-lg-6 col-md-12">
                        <div className="sx-about-bx3-content">
                            <h2 className="sx-title">Our Mission & Vision</h2>
                            <span className="sx-title-2">Shaping the future of technology with purpose and passion.</span>

                            {/* Mission */}
                            <h4 className="m-t20">Mission 🎯 </h4>
                            <p>
                                At Sysconex, our mission is to deliver reliable, innovative, and scalable IT solutions that empower businesses and individuals. 
                                We aim to bridge technology with real-world challenges, ensuring efficiency, security, and growth for our clients.
                            </p>

                            {/* Vision */}
                            <h4 className="m-t20">Vision 🌍 </h4>
                            <p>
                                Our vision is to be a global leader in digital transformation, creating a future where technology inspires progress. 
                                We strive to build sustainable solutions powered by AI, cloud, and next-generation technologies that improve everyday life.
                            </p>

                            {/* Optional Contact Info (can remove if not needed) */}
                            <div className="row sx-about-icon-bx3-column m-t30">
                                <div className="col-lg-6 col-md-6">
                                    <div className="sx-icon-bx-3">
                                        <div className="sx-media">
                                            <i className="flaticon-incoming-call" />
                                        </div>
                                        <div className="sx-icon-bx-info">
                                            <span className="sx-icon-bx-title-info">Contact Phone</span>
                                            <span className="sx-icon-bx-title">+94 (76) 117 6061</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="sx-icon-bx-3">
                                        <div className="sx-media">
                                            <i className="flaticon-email-1" />
                                        </div>
                                        <div className="sx-icon-bx-info">
                                            <span className="sx-icon-bx-title-info">Contact Mail</span>
                                            <span className="sx-icon-bx-title">sysconex.solutions@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Background watermark */}
            <div className="hilite-title text-left p-l50 text-uppercase">
                <strong>Mission & Vision</strong>
            </div>
        </>
    );
}

export default SectionAboutCompany2Inner;
