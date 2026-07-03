import NavLink from "@/elements/nav-link";

function SectionCTA1() {
    return (
        <div className="section-full p-t80 p-b80 text-gray-800 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
            {/* Ambient Background Glow */}
            <div className="absolute top-[-20%] left-[-10%] w-[350px] h-[350px] bg-[var(--primary)] rounded-full filter blur-[120px] opacity-10 pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[350px] h-[350px] bg-orange-500 rounded-full filter blur-[120px] opacity-10 pointer-events-none" />
            
            <div className="container relative z-10 text-center">
                <div className="max-w-[760px] mx-auto">
                    <span className="inline-block text-[var(--primary)] font-semibold tracking-wider text-base uppercase mb-3 px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20">
                        Get In Touch
                    </span>
                    <h2 className="text-gray-900 font-extrabold m-b20 text-3xl sm:text-4xl md:text-5xl" style={{ textTransform: "uppercase", letterSpacing: "1px", lineHeight: "1.2" }}>
                        Let's Build Something Legendary Together
                    </h2>
                    <p className="text-gray-600 m-b40 font-light" style={{ fontSize: "16px", lineHeight: "1.6" }}>
                        Operating out of Negombo, Sri Lanka, SyscoNex is your full-stack engineering, AI integration, cybersecurity, and creative design partner. Let's launch your business into global markets.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <NavLink to="/contact-us" className="site-button sx-btn-primary icon sx-btn-lg">
                            <i className="fa fa-long-arrow-right" /> Contact Us Now
                        </NavLink>
                        <NavLink to="/services" className="site-button border border-gray-300 text-gray-900 icon sx-btn-lg" >
                            <i className="fa fa-long-arrow-right" /> Explore Services
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionCTA1;
