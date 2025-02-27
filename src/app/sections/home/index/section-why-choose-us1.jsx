import { publicUrlFor } from "../../../../globals/constants";
import { NavLink } from "react-router-dom";

function SectionWhyChooseUs1() {
    return (
        <>
            <div className="section-full p-t110 p-b80 sx-why-chooseus-outer sx-bg-light bg-cover" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg-1.jpg")})` }}>
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head center">
                        <div className="sx-head-s-title" style={{color:"white"}}>Why Choose Us</div>
                        <div className="sx-head-l-title" >
                            <h2 className="sx-title" style={{color:"white"}}>Our Work Services</h2>
                        </div>
                    </div>
                    {/* TITLE END */}
                    <div className="section-content">
                        <div className="sx-icon-bx-wrap">
                            <div className="row">
                                {/* Block one */}
                                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-icon-bx-1">
                                        <div className="sx-icon-box-wraper" style={{minHeight:"250px"}}>
                                            <div className="sx-icon-bx-icon ">
                                                <span className="sx-text-primary"><i className="flaticon-data" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <NavLink to="/services/detail"><h4 className="sx-tilte">Web And Desktop Application</h4></NavLink>
                                                <p>Scalable, secure, and high-performance applications tailored to your business.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block Two */}
                                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-icon-bx-1">
                                        <div className="sx-icon-box-wraper" style={{minHeight:"250px"}}>
                                            <div className="sx-icon-bx-icon ">
                                                <span className="sx-text-primary"><i className="flaticon-programmer" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <NavLink to="/services/detail"><h4 className="sx-tilte">Mobile Application Development</h4></NavLink>
                                                <p>Intuitive and powerful mobile apps that enhance user experience and engagement.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block Three */}
                                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-icon-bx-1">
                                        <div className="sx-icon-box-wraper" style={{minHeight:"250px"}}>
                                            <div className="sx-icon-bx-icon ">
                                                <span className="sx-text-primary"><i className="flaticon-positive-review" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <NavLink to="/services/detail"><h4 className="sx-tilte">AI & ML Based Research Applications</h4></NavLink>
                                                <p>Cutting-edge AI solutions that drive insights, automation, and innovation.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block Four */}
                                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-icon-bx-1">
                                        <div className="sx-icon-box-wraper" style={{minHeight:"250px"}}>
                                            <div className="sx-icon-bx-icon ">
                                                <span className="sx-text-primary"><i className="flaticon-profit" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <NavLink to="/services/detail"><h4 className="sx-tilte">Search Engine Optimization (SEO)</h4></NavLink>
                                                <p>Enhance your online visibility and drive more traffic with our expert SEO strategies.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block Five */}
                                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-icon-bx-1">
                                        <div className="sx-icon-box-wraper" style={{minHeight:"250px"}}>
                                            <div className="sx-icon-bx-icon ">
                                                <span className="sx-text-primary"><i className="flaticon-chart" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <NavLink to="/services/detail"><h4 className="sx-tilte">Networking And Linux Based Assignment</h4></NavLink>
                                                <p>Expert help with Networking and Linux assignments, from setup to security.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block SIx */}
                                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-icon-bx-1">
                                        <div className="sx-icon-box-wraper" style={{minHeight:"250px"}}>
                                            <div className="sx-icon-bx-icon ">
                                                <span className="sx-text-primary"><i className="flaticon-security" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <NavLink to="/services/detail"><h4 className="sx-tilte">Cybersecurity Projects</h4></NavLink>
                                                <p>Get expert support for cybersecurity assignments and projects.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block seven */}
                                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms" >
                                    <div className="sx-icon-bx-1">
                                        <div className="sx-icon-box-wraper" style={{minHeight:"250px"}}>
                                            <div className="sx-icon-bx-icon ">
                                                <span className="sx-text-primary"><i className="flaticon-coding" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <NavLink to="/services/detail"><h4 className="sx-tilte">Graphic Designing & Branding</h4></NavLink>
                                                <p>Creative and professional graphic design solutions for all your needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block Eight */}
                                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-icon-bx-1">
                                        <div className="sx-icon-box-wraper" style={{minHeight:"250px"}}>
                                            <div className="sx-icon-bx-icon ">
                                                <span className="sx-text-primary"><i className="flaticon-smart-contracts" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <NavLink to="/services/detail"><h4 className="sx-tilte">Research Paper and Thesis</h4></NavLink>
                                                <p>Expert support for research documentation and thesis writing with precision and clarity.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block Nine */}
                                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-icon-bx-1">
                                        <div className="sx-icon-box-wraper" style={{minHeight:"250px"}}>
                                            <div className="sx-icon-bx-icon ">
                                                <span className="sx-text-primary"><i className="flaticon-smart-contracts" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <NavLink to="/services/detail"><h4 className="sx-tilte">Project Assistance & Explanation</h4></NavLink>
                                                <p>Get guidance & clear explanations for your projects, ensuring accuracy and success.</p>
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

export default SectionWhyChooseUs1;