"use client";

import { useEffect } from "react";
import testimonials from "@/data/testimonials";

function SectionTestimonials1() {
    useEffect(() => {
        function initCarousel() {
            const $ = window.jQuery || window.$;
            if (!$ || !$.fn.owlCarousel) return false;

            const $carousel = $(".sx-testimonial-carousel");

            // Destroy any previous instance cleanly
            try {
                $carousel.trigger("destroy.owl.carousel");
                $carousel.removeClass("owl-loaded owl-hidden");
                $carousel.find(".owl-stage-outer").children().unwrap();
                $carousel.find(".owl-stage-outer, .owl-stage, .owl-item").remove();
            } catch (e) {}

            // Init fresh
            try {
                $carousel.owlCarousel({
                    loop: true,
                    margin: 30,
                    dots: true,
                    nav: false,
                    autoplay: true,
                    autoplayTimeout: 4000,
                    autoplayHoverPause: true,
                    responsive: {
                        0: { items: 1 },
                        768: { items: 2 },
                        1200: { items: 3 }
                    }
                });
            } catch (e) {}
            return true;
        }

        // Try immediately, then retry after short delay if Owl not yet loaded
        if (!initCarousel()) {
            const t = setTimeout(initCarousel, 500);
            return () => clearTimeout(t);
        }

        return () => {
            try {
                const $ = window.jQuery || window.$;
                if (!$) return;
                const $carousel = $(".sx-testimonial-carousel");
                $carousel.trigger("destroy.owl.carousel");
                $carousel.removeClass("owl-loaded owl-hidden");
                $carousel.find(".owl-stage-outer").children().unwrap();
                $carousel.find(".owl-stage-outer, .owl-stage, .owl-item").remove();
            } catch (e) {}
        };
    }, []);


    return (
        <>
            <div className="sx-testimonial-bx-1 p-t50">
                {/* Section Header */}
                <div className="section-head center m-b30">
                    <div className="sx-head-s-title">Client Reviews</div>
                    <div className="sx-head-l-title">
                        <h2 className="sx-title">What Our Clients Say</h2>
                    </div>
                </div>
                <div className="owl-carousel sx-testimonial-carousel">
                    {testimonials.map((t, idx) => (
                        <div className="item" key={idx}>
                            <div
                                className="testimonial-2 hover-animation-11"
                                style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "220px" }}
                            >
                                <div className="testimonial-text">
                                    <span className="testimonial-quote sx-text-primary">
                                        <i className="flaticon-quote" />
                                    </span>
                                    <p style={{ fontSize: "16px", lineHeight: "1.65" }}>
                                        &ldquo;{t.quote}&rdquo;
                                    </p>
                                </div>
                                <div className="testimonial-detail" style={{ marginTop: "16px" }}>
                                    <div className="testimonial-user-info">
                                        <h4 className="testimonial-name">{t.name}</h4>
                                        <span className="testimonial-position">{t.position}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SectionTestimonials1;