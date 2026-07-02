import { bannerData } from "@/globals/banner";
import Banner from "../../sections/common/banner";
import SectionClients2 from "../../sections/home/index2/section-clients2";
import testimonials from "@/data/testimonials";

function StarRating({ count = 5 }) {
    return (
        <ul className="sx-rating-st1">
            {Array.from({ length: count }).map((_, i) => (
                <li key={i}><span><i className="fa fa-star" /></span></li>
            ))}
        </ul>
    );
}

function TestimonialsPage() {
    return (
        <>
            <Banner _data={bannerData.testimonials} />

            <div className="section-full p-t100 p-b0 bg-white mobile-page-padding">
                {/* TESTIMONIAL START */}
                <div className="container">
                    <div className="section-content">
                        {/* TITLE START */}
                        <div className="section-head center">
                            <div className="sx-head-s-title">Our Testimonials</div>
                            <div className="sx-head-l-title">
                                <h2 className="sx-title">What Clients Say?</h2>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="masonry-outer mfp-gallery news-grid clearfix row">
                            {testimonials.map((t, idx) => (
                                <div className="masonry-item col-lg-4 col-md-6 col-sm-12 m-b30" key={idx}>
                                    <div className="testimonial-3 hover-animation-1 sx-bg-light">
                                        <div className="testimonial-detail">
                                            <div className="testimonial-user-info">
                                                <span className="testimonial-position">{t.position}</span>
                                                <h4 className="testimonial-name">{t.name}</h4>
                                            </div>
                                        </div>
                                        <div className="testimonial-text">
                                            <p>&ldquo;{t.quote}&rdquo;</p>
                                        </div>
                                        <div className="testimonial-footer">
                                            <div className="testimonial-quote sx-text-primary">
                                                <i className="flaticon-quote" />
                                            </div>
                                            <StarRating count={t.stars} />
                                            <span className="sx-review-count">({t.stars} Stars)</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* TESTIMONIAL END */}
            </div>

            <SectionClients2 />
        </>
    );
}

export default TestimonialsPage;