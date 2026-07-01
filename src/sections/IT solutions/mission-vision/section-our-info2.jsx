import ItodoImage from "../../../elements/itodo-img";

function SectionOurInfo2() {
    return (
        <>
            <div className="section-full p-t110 p-b80 sx-bg-light sx-our-info-outer ">
                <div className="container">
                    <div className="section-content">
                        <div className="row sx-our-info-content-wrap">
                            {/* Left column */}
                            <div className="col-lg-4 col-md-4">
                                <div className="sx-our-info-content">
                                    <ul>
                                        <li>
                                            <div className="sx-our-info-content-list left">
                                                <span className="sx-sub-title">Working Experience</span>
                                                <h3 className="sx-bx-title">2+ Years in IT & Software Development</h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sx-our-info-content-list left">
                                                <span className="sx-sub-title">Expertise</span>
                                                <h3 className="sx-bx-title">Full-stack Development & Emerging Tech</h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sx-our-info-content-list left">
                                                <span className="sx-sub-title">Service Focus</span>
                                                <h3 className="sx-bx-title">AI, AR/VR, Web & Mobile Solutions</h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sx-our-info-content-list left">
                                                <span className="sx-sub-title">Approach</span>
                                                <h3 className="sx-bx-title">Innovation with Reliability</h3>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Center image */}
                            <div className="col-lg-4 col-md-4">
                                <div className="sx-our-info-media-wrap">
                                    <div className="sx-our-info-media">
                                        <ItodoImage src="images/t1.png" alt="Sysconex Info" />
                                    </div>
                                </div>
                            </div>

                            {/* Right column */}
                            <div className="col-lg-4 col-md-4">
                                <div className="sx-our-info-content">
                                    <ul>
                                        <li>
                                            <div className="sx-our-info-content-list right">
                                                <span className="sx-sub-title">Contact</span>
                                                <h3 className="sx-bx-title">sysconex.solutions@gmail.com<br />+94 77 123 4567</h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sx-our-info-content-list right">
                                                <span className="sx-sub-title">Location</span>
                                                <h3 className="sx-bx-title">Negombo, Sri Lanka</h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sx-our-info-content-list right">
                                                <span className="sx-sub-title">Expert Team</span>
                                                <h3 className="sx-bx-title">Software Engineers, Researchers & Designers</h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sx-our-info-content-list right">
                                                <span className="sx-sub-title">Connect</span>
                                                <h3 className="sx-bx-title">Facebook · LinkedIn · Instagram</h3>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionOurInfo2;
