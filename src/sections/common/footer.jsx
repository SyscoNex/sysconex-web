import NavLink from "@/elements/nav-link";
import ItodoImage from "../../elements/itodo-img";

function Footer() {
    return (
        <>
            <footer className="site-footer footer-dark">
                {/* FOOTER BLOCKES START */}
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            {/* ABOUT COMPANY */}
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="widget widget_about">
                                    <div className="logo-footer clearfix p-b15">
                                        <NavLink to="/" className="sx-text-primary"><ItodoImage src="images/footer-logo.png" alt="SyscoNex Logo" /></NavLink>
                                    </div>
                                    <p style={{ fontSize: "16px", lineHeight: "1.6", color: "rgba(255,255,255,0.7)" }}>
                                        To craft cutting-edge software and AI-driven solutions that drive growth, efficiency, and digital transformation.
                                    </p>
                                    <div className="widget_about-call-section">
                                        <div className="sx-f-call-icon"><i className="flaticon-telephone" /></div>
                                        <div className="sx-f-call-section">
                                            <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)" }}>Contact us 24/7</span>
                                            <a href="tel:+94761176061" style={{ fontSize: "19px", fontWeight: "600" }}>+94 76 117 6061</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* EXPLORE LINKS */}
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 col">
                                <div className="widget widget_services">
                                    <h4 className="sx-f-title" style={{ fontSize: "18px", textTransform: "uppercase" }}>Explore Links</h4>
                                    <ul>
                                        <li style={{ fontSize: "16px" }}><NavLink to="/services">Our Services</NavLink></li>
                                        <li style={{ fontSize: "16px" }}><NavLink to="/team">Meet Our Team</NavLink></li>
                                        <li style={{ fontSize: "16px" }}><NavLink to="/portfolio">Our Portfolio</NavLink></li>
                                        <li style={{ fontSize: "16px" }}><NavLink to="/contact-us">Contact</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            {/* USEFUL LINK */}
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 col">
                                <div className="widget widget_services">
                                    <h4 className="sx-f-title" style={{ fontSize: "18px", textTransform: "uppercase" }}>Useful Links</h4>
                                    <ul>
                                        <li style={{ fontSize: "16px" }}><NavLink to="/mission">Mission &amp; Vision</NavLink></li>
                                        <li style={{ fontSize: "16px" }}><NavLink to="/why-choose-us">Why Choose Us</NavLink></li>
                                        <li style={{ fontSize: "16px" }}><NavLink to="/portfolio">Portfolio</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            {/* SOLUTIONS */}
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 col footer-col-3">
                                <div className="widget widget_info">
                                    <h4 className="sx-f-title" style={{ fontSize: "18px", textTransform: "uppercase" }}>Solutions</h4>
                                    <ul>
                                        <li>
                                            <div className="widget-info-icon">
                                                <i className="flaticon-phone" />
                                            </div>
                                            <div className="widget-info-detail" style={{ fontSize: "16px" }}>
                                                <a href="tel:+94761176061" style={{ fontSize: "16px", display: "block" }}>+ 94 ( 76 ) 117 6061</a>
                                                <a href="tel:+94712758785" style={{ fontSize: "16px", display: "block" }}>+ 94 ( 71 ) 275 8785</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="widget-info-icon">
                                                <i className="flaticon-email" />
                                            </div>
                                            <div className="widget-info-detail" style={{ fontSize: "16px" }}>
                                                <p style={{ fontSize: "16px", margin: 0, color: "rgba(255,255,255,0.7)" }}>sysconex.solutions@gmail.com</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="widget-info-icon">
                                                <i className="flaticon-maps-and-flags" />
                                            </div>
                                            <div className="widget-info-detail" style={{ fontSize: "16px" }}>
                                                <p style={{ fontSize: "16px", margin: 0, color: "rgba(255,255,255,0.7)" }}>No 124, Winsant Park, Kadirana, Negombo</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sx-f-bottom-section">
                    <div className="sx-f-social">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/people/SyscoNex-Solutions/61578193958732/#" target="_blank" rel="noopener noreferrer">
                                    <i className="flaticon-facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="https://lk.linkedin.com/company/sysconex-solutions" target="_blank" rel="noopener noreferrer">
                                    <i className="flaticon-linkedin" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="flaticon-instagram" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="sx-f-copy" style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)" }}>
                        © 2025 by <NavLink to="/" style={{ color: "var(--primary)" }}>SyscoNex.</NavLink> All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;