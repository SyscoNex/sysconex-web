import { publicUrlFor } from "../../../../globals/constants";
import { NavLink } from "react-router-dom";
import { register } from 'swiper/element/bundle';
register();

function SectionSlider1() {
    return (
        <>
            <div className="sx-bnr-1-wrap-outer home-1-slider">
                {/* swiper slides */}
                <swiper-container
                    loop="true"
                    space-between="30"
                    effect="fade"
                    navigation-next-el=".swiper-button-next"
                    navigation-perv-el=".swiper-button-prev"
                    pagination-el=".swiper-pagination"
                    pagination-clickable="true"
                    autoplay-delay="7000"
                    autoplay-disable-on-interaction="true"
                    class="swiper-wrapper"
                >
                    <swiper-slide class="sx-bnr-1-wrap swiper-slide overlay-overlay" style={{ backgroundImage: `url(${publicUrlFor("images/main-slider/slider1/slide1.jpg")})` }}>
                        <div className="sx-bg-overlay opacity-0 sx-bg-primary" />
                        <div className="container">
                            <div className="sx-bnr-1-content">
                                <span className="sx-bnr-1-small-title" data-swiper-parallax="-300">We are Dedicated</span>
                                <h2 className="sx-bnr-1-large-title">inspired and passionate about innovation.</h2>
                                <div className="sx-bnr-1-info">"At SyscoNex Solutions, we are passionate, inspired, and dedicated to innovation. We craft smart, efficient, and future-ready IT solutions to help businesses grow and succeed."</div>
                                <div className="sx-bnr-readmore">
                                    <NavLink to="/about-us" className="site-button sx-btn-primary icon">
                                        <i className="fa  fa-long-arrow-right" />
                                        Read More
                                    </NavLink>
                                </div>
                                <div className="sx-bnr-video">
                                    <a href="https://www.youtube.com/watch?v=SW6LPE99aII" className="mfp-video circle">
                                        <i className="flaticon-play" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="sx-bnr-text-masking">
                            <div className="light">
                                <h1 className="animate-charcter">IT Solution</h1>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="sx-bnr-1-wrap swiper-slide overlay-overlay" style={{ backgroundImage: `url(${publicUrlFor("images/main-slider/slider1/slide2.jpg")})` }}>
                        <div className="sx-bg-overlay opacity-0 sx-bg-primary" />
                        <div className="container">
                            <div className="sx-bnr-1-content">
                                <span className="sx-bnr-1-small-title" data-swiper-parallax="-300">We are The best</span>
                                <h2 className="sx-bnr-1-large-title">We are ready To IT Solution Work.</h2>
                                <div className="sx-bnr-1-info">"At SyscoNex Solutions, we make IT simple, smart, and powerful. From innovation to execution, we build solutions that drive success. Let’s create the future together!"</div>
                                <div className="sx-bnr-readmore">
                                    <NavLink to="/about-us" className="site-button sx-btn-primary icon">
                                        <i className="fa  fa-long-arrow-right" />
                                        Read More
                                    </NavLink>
                                </div>
                                <div className="sx-bnr-video">
                                    <a href="https://www.youtube.com/watch?v=SW6LPE99aII" className="mfp-video circle">
                                        <i className="flaticon-play" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="sx-bnr-text-masking">
                            <div className="light">
                                <h1 className="sx-title">Analytics</h1>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper-container>
                {/* !swiper slides */}
                {/* Add Arrows */}
                <div className="swiper-button-next" />
                <div className="swiper-button-prev" />
            </div>
        </>
    )
}

export default SectionSlider1;