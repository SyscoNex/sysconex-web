import { publicUrlFor } from "@/globals/constants";
import NavLink from "@/elements/nav-link";
import { register } from 'swiper/element/bundle';
register();

import { useEffect, useState } from "react";

function SectionSlider1() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            <div className="sx-bnr-1-wrap-outer home-1-slider relative bg-[#f8f9fa]">
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
                    {/* Slide 1 */}
                    <swiper-slide class="sx-bnr-1-wrap swiper-slide relative flex items-center justify-center px-2 pb-4 md:px-4 md:pb-6 pt-0 md:pt-0 bg-[#f8f9fa]">
                        {/* Floating Rounded Background Image Wrapper */}
                        <div 
                            className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden flex items-center bg-cover bg-bottom shadow-xl"
                            style={{ backgroundImage: `url(${publicUrlFor("images/main-slider/slider1/slide1.jpg")})` }}
                        >
                            {/* Overlay to ensure text readability */}
                            <div className="absolute inset-0 bg-black/60 z-1" />

                            {/* Content */}
                            <div className="container relative z-10 mx-auto px-6 md:px-12 py-10 flex flex-col justify-center h-full">
                                <div className="max-w-[720px] text-left">
                                    <span className="inline-block text-[var(--primary)] font-bold tracking-[3px] uppercase text-base mb-3">
                                        SyscoNex Solutions
                                    </span>
                                    <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-white leading-[1.15] mb-5 uppercase">
                                        Inspired and passionate about <span className="text-[var(--primary)] text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-orange-400">innovation</span>.
                                    </h1>
                                    <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-6 font-light max-w-[620px]">
                                        At SyscoNex Solutions, we are passionate, inspired, and dedicated to innovation. We craft smart, efficient, and future-ready IT solutions to help businesses grow and succeed.
                                    </p>
                                    <div className="flex flex-wrap gap-5 items-center">
                                        <NavLink to="/about-us" className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-orange-500/20">
                                            <span>Read More</span>
                                            <i className="fa fa-long-arrow-right" />
                                        </NavLink>
                                        <NavLink to="/contact-us" className="inline-flex items-center gap-2 border border-white/20 hover:border-white bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300">
                                            <span>Contact Us</span>
                                        </NavLink>
                                        
                                        {/* Play Video Button */}
                                        <a href="https://www.youtube.com/watch?v=SW6LPE99aII" className="mfp-video inline-flex items-center gap-3 text-white hover:text-[var(--primary)] transition-all group ml-2">
                                            <span className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-[var(--primary)] border border-white/25 hover:border-[var(--primary)] transition-all duration-300 shadow-md">
                                                <span className="absolute -inset-1 rounded-full bg-white/10 animate-ping opacity-60" />
                                                <i className="fa fa-play text-base text-white" />
                                            </span>
                                            <span className="font-semibold text-base tracking-wide">Watch Video</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="sx-bnr-1-wrap swiper-slide relative flex items-center justify-center px-2 pb-4 md:px-4 md:pb-6 pt-0 md:pt-0 bg-[#f8f9fa]">
                        <div 
                            className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden flex items-center bg-cover bg-bottom shadow-xl"
                            style={{ backgroundImage: `url(${publicUrlFor("images/main-slider/slider1/slide2.jpg")})` }}
                        >
                            {/* Overlay to ensure text readability */}
                            <div className="absolute inset-0 bg-black/60 z-1" />

                            {/* Content */}
                            <div className="container relative z-10 mx-auto px-6 md:px-12 py-10 flex flex-col justify-center h-full">
                                <div className="max-w-[720px] text-left">
                                    <span className="inline-block text-[var(--primary)] font-bold tracking-[3px] uppercase text-base mb-3">
                                        Smart Integration
                                    </span>
                                    <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-white leading-[1.15] mb-5 uppercase">
                                        We are ready To <span className="text-[var(--primary)] text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-orange-400">IT Solution</span> Work.
                                    </h1>
                                    <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-6 font-light max-w-[620px]">
                                        At SyscoNex Solutions, we make IT simple, smart, and powerful. From innovation to execution, we build solutions that drive success. Let’s create the future together!
                                    </p>
                                    <div className="flex flex-wrap gap-5 items-center">
                                        <NavLink to="/about-us" className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-orange-500/20">
                                            <span>Read More</span>
                                            <i className="fa fa-long-arrow-right" />
                                        </NavLink>
                                        <NavLink to="/contact-us" className="inline-flex items-center gap-2 border border-white/20 hover:border-white bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300">
                                            <span>Contact Us</span>
                                        </NavLink>
                                        
                                        {/* Play Video Button */}
                                        <a href="https://www.youtube.com/watch?v=SW6LPE99aII" className="mfp-video inline-flex items-center gap-3 text-white hover:text-[var(--primary)] transition-all group ml-2">
                                            <span className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-[var(--primary)] border border-white/25 hover:border-[var(--primary)] transition-all duration-300 shadow-md">
                                                <span className="absolute -inset-1 rounded-full bg-white/10 animate-ping opacity-60" />
                                                <i className="fa fa-play text-base text-white" />
                                            </span>
                                            <span className="font-semibold text-base tracking-wide">Watch Video</span>
                                        </a>
                                    </div>
                                </div>
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