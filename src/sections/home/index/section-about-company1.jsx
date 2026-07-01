import ItodoImage from "../../../elements/itodo-img";
import { publicUrlFor } from "@/globals/constants";
import SectionCounter1 from "./section-counter1";

function SectionAboutCompany1() {
    return (
        <>
            <div className="section-full  p-t110 p-b80 sx-bg-white sx-about-bx1-outer">
                <div className="container">
                    <div className="section-content">
                        <div className="sx-about-bx1-content-wrap">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-about-bx1-media">
                                        <div className="sx-dot-bx"><ItodoImage src="images/about/dotted-pic.png" alt="" /></div>
                                        <div className="sx-ab-img-outer">
                                            <div className="sx-ab-img-section-1-wrap">
                                                <div className="sx-ab-video">
                                                    <a href="https://www.youtube.com/watch?v=SW6LPE99aII" className="mfp-video circle">
                                                        <i className="flaticon-play" />
                                                    </a>
                                                </div>
                                                <div className="sx-ab-img-section-1" style={{ backgroundImage: `url(${publicUrlFor("images/about/left-pic.jpg")})` }} />
                                            </div>
                                            <div className="sx-ab-img-section-2">
                                                <ItodoImage src="images/about/p1.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-about-bx1-content">
                                        <h2 className="sx-title">That's why we're list of favorites.</h2>
                                        <span className="sx-title-2">Trusted for innovation, chosen for excellence</span>
                                        <p>At Sysconex Solutions, we are trusted for innovation and chosen for excellence. Our commitment to cutting-edge technology and smart solutions makes us a favorite in the industry. With a passion for transforming ideas into reality, we craft powerful, efficient, and future-ready applications that drive success. That’s why businesses rely on us—we don’t just meet expectations, we exceed them.</p>
                                        <div className="progress">
                                            <div className="progress-bar sx-bg-primary" role="progressbar" style={{ width: '90%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}><span>95.00% Work Success</span></div>
                                        </div>
                                        <div className="row sx-about-bx1-column">
                                            <div className="col-lg-6 col-md-6">
                                                <p>We ensure timely project completion without any delays.</p>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <p>Reliable 24/7 service whenever you need us.</p>
                                            </div>
                                        </div>
                                        <div className="row sx-about-icon-bx1-column">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="sx-icon-bx-2">
                                                    <div className="sx-media">
                                                        <i className="flaticon-mouse" />
                                                    </div>
                                                    <div className="sx-icon-bx-info">
                                                        <span className="sx-icon-bx-title">IT Solution</span>
                                                        <span className="sx-icon-bx-title-info">04 Project</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="sx-icon-bx-2">
                                                    <div className="sx-media">
                                                        <i className="flaticon-download" />
                                                    </div>
                                                    <div className="sx-icon-bx-info">
                                                        <span className="sx-icon-bx-title">IT Consultant</span>
                                                        <span className="sx-icon-bx-title-info">04 Project</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* COUNTER START */}
                        <SectionCounter1 />
                        {/* COUNTER  END */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionAboutCompany1;