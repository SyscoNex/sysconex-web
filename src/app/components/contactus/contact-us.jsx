import { bannerData } from "../../../globals/banner";
import Banner from "../../sections/common/banner";
import Swal from "sweetalert2";

function ContactUsPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Coming Soon 🚀",
            text: "This feature will be available soon!",
            icon: "info",
            confirmButtonText: "OK"
        });
    };

    return (
        <>
            <Banner _data={bannerData.contact} />

            {/* Contact us START */}
            <div className="section-full p-t110 p-b80 sx-bg-white sx-ourteam-outer ">
                <div className="container">
                    <div className="section-content">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-12 m-b30">
                                <div className="contact-info">
                                    <div className="section-head left">
                                        <div className="sx-head-s-title">Contact Us</div>
                                        <div className="sx-head-l-title">
                                            <h2 className="sx-title">
                                                Get in Touch with Sysconex Solutions
                                            </h2>
                                        </div>
                                    </div>

                                    <div className="row sx-contact-form-icon-bx">
                                        <div className="col-lg-6 col-md-6 m-b30">
                                            <div className="sx-icon-bx-5">
                                                <div className="sx-media">
                                                    <i className="flaticon-telephone" />
                                                </div>
                                                <div className="sx-icon-bx-info">
                                                    <span className="sx-icon-bx-title-info">Contact Phone</span>
                                                    <span className="sx-icon-bx-title">+94 76 117 6061</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 m-b30">
                                            <div className="sx-icon-bx-5">
                                                <div className="sx-media">
                                                    <i className="flaticon-email-2" />
                                                </div>
                                                <div className="sx-icon-bx-info">
                                                    <span className="sx-icon-bx-title-info">Contact Mail</span>
                                                    <span className="sx-icon-bx-title">sysconex.solutions@gmail.com</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 m-b30">
                                            <div className="sx-icon-bx-5">
                                                <div className="sx-media">
                                                    <i className="flaticon-map-location" />
                                                </div>
                                                <div className="sx-icon-bx-info">
                                                    <span className="sx-icon-bx-title-info">Contact Location</span>
                                                    <span className="sx-icon-bx-title">Negombo, Sri Lanka</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 m-b30">
                                            <div className="sx-icon-bx-5">
                                                <div className="sx-media">
                                                    <i className="flaticon-clock" />
                                                </div>
                                                <div className="sx-icon-bx-info">
                                                    <span className="sx-icon-bx-title-info">Office Time</span>
                                                    <span className="sx-icon-bx-title">Mon - Fri: 9.00 - 18.00</span>
                                                    <span className="sx-icon-bx-title">Sat - Sun: Closed</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="col-lg-4 col-md-12 m-b30">
                                <div className="contact-home1-right">
                                    <div className="contact-home-1-form sx-bg-light">
                                        <h4 className="sx-title">Get In Touch</h4>
                                        <form
                                            className="cons-contact-form2 form-transparent"
                                            onSubmit={handleSubmit}
                                        >
                                            <div className="input input-animate">
                                                <input type="text" name="username" placeholder="Your Name" required />
                                                <span className="spin" />
                                            </div>
                                            <div className="input input-animate">
                                                <input type="email" name="email" placeholder="Your Email" required />
                                                <span className="spin" />
                                            </div>
                                            <div className="input input-animate">
                                                <input type="text" name="phone" placeholder="Phone Number" required />
                                                <span className="spin" />
                                            </div>
                                            <div className="input textarea input-animate">
                                                <textarea name="message" placeholder="Your Message" required />
                                                <span className="spin" />
                                            </div>
                                            <div className="sx-btn-center text-center p-t10">
                                                <button type="submit" className="site-button sx-btn-primary icon sx-btn-lg">
                                                    <i className="fa fa-long-arrow-right" />
                                                    Send Message
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact us END */}

            {/* Map */}
            <div className="gmap-outline">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63365.05390516251!2d79.8083!3d7.2083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f88c0b8f9e7d%3A0x8e8c3b8d7df33e3!2sNegombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1695555555555"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="sysconexmap"
                />
            </div>
        </>
    );
}

export default ContactUsPage;
