import { publicUrlFor } from "@/globals/constants";

function SectionVideo1() {
    return (
        <>
            <div className="section-full sx-video-1-outer bg-cover relative" style={{ backgroundImage: `url(${publicUrlFor("images/vid-1-bg.jpg")})` }}>
                <div className="sx-bg-overlay" style={{ backgroundColor: "rgba(11, 15, 25, 0.85)" }} />
                <div className="container relative z-10">
                    <div className="sx-vodeo-section text-center py-20">
                        <h2 className="text-white font-extrabold mb-4" style={{ fontSize: "54px", lineHeight: "1.2", textTransform: "uppercase", letterSpacing: "1px" }}>
                            We Craft Legendary Technologies
                        </h2>
                        <p className="text-gray-300 mx-auto mb-8 font-light" style={{ fontSize: "18px", maxWidth: "760px", lineHeight: "1.6" }}>
                            From robust full-stack software and research-driven AI pipelines to infrastructure management and custom branding, we deliver high-performance digital products for global markets.
                        </p>
                        
                        <div className="sx-video-btn-wrap mb-12">
                            <a href="https://www.youtube.com/watch?v=SW6LPE99aII" className="mfp-video circle">
                                <i className="flaticon-play" />
                            </a>
                        </div>

                        {/* Value highlights grid inside video section */}
                        <div className="row justify-content-center text-left">
                            <div className="col-lg-3 col-md-6 m-b30">
                                <div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm h-100" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-2">99% Uptime</h4>
                                        <p className="text-gray-300 font-light mb-0" style={{ fontSize: "16px", lineHeight: "1.5" }}>Highly available server environments & active monitoring.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 m-b30">
                                <div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm h-100" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-2">AI-Driven</h4>
                                        <p className="text-gray-300 font-light mb-0" style={{ fontSize: "16px", lineHeight: "1.5" }}>Tailored machine learning models built for real problems.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 m-b30">
                                <div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm h-100" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-2">Secure First</h4>
                                        <p className="text-gray-300 font-light mb-0" style={{ fontSize: "16px", lineHeight: "1.5" }}>Project-based vulnerability audits & defensive hardening.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 m-b30">
                                <div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm h-100" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-2">One-Stop Shop</h4>
                                        <p className="text-gray-300 font-light mb-0" style={{ fontSize: "16px", lineHeight: "1.5" }}>Software engineering combined with design & branding.</p>
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

export default SectionVideo1;