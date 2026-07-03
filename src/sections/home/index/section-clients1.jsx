import NavLink from "@/elements/nav-link";

function SectionClients1() {
    const ecosystem = [
        {
            title: "Enterprise Java",
            desc: "Highly scalable, distributed backends built using modern Spring Boot microservices.",
            icon: "flaticon-coding"
        },
        {
            title: ".NET Platform",
            desc: "Secure, performant corporate application suites designed for enterprise environments.",
            icon: "flaticon-code"
        },
        {
            title: "Cloud & DevOps",
            desc: "High-availability AWS & Azure hosting, continuous delivery, and infrastructure as code.",
            icon: "flaticon-cloud"
        },
        {
            title: "AI Pipelines",
            desc: "Custom intelligent models, natural language processing, and advanced prediction pipelines.",
            icon: "flaticon-brain"
        },
        {
            title: "Modern Frontend",
            desc: "Lightning-fast web experiences powered by Next.js, React, and optimized styling systems.",
            icon: "flaticon-monitor"
        },
        {
            title: "Defense Hardening",
            desc: "Vulnerability audits, network security compliance, and comprehensive systems hardening.",
            icon: "flaticon-security"
        }
    ];

    return (
        <div className="section-full py-16 relative overflow-hidden" style={{ background: "#f8f9fa", borderTop: "1px solid rgba(0,0,0,0.05)", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
            <div className="container relative z-10">
                {/* Title Section */}
                <div className="section-head center mb-12">
                    <span className="text-[var(--primary)] font-semibold tracking-[3px] uppercase text-base mb-3 block">
                        Our Technological Ecosystem
                    </span>
                    <h2 className="text-gray-900 font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase" style={{ letterSpacing: "1px", lineHeight: "1.2" }}>
                        Engines Behind Legendary Solutions
                    </h2>
                    <p className="text-gray-600 mx-auto max-w-[700px] mt-3 font-light text-base" style={{ lineHeight: "1.6" }}>
                        We leverage industry-leading architectures and enterprise platforms to build secure, robust, and future-proof digital assets for our global partners.
                    </p>
                </div>

                {/* 6-Card Ecosystem Grid */}
                <div className="row justify-content-center">
                    {ecosystem.map((item, index) => (
                        <div key={index} className="col-lg-4 col-md-6 m-b30">
                            <div className="p-5 rounded-2xl border border-gray-100 bg-white h-100 transition-all duration-300 hover:border-[var(--primary)]/30 transform hover:-translate-y-1 shadow-sm hover:shadow-md flex flex-col justify-between">
                                <div>
                                    {/* <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center mb-4 text-[var(--primary)]">
                                        <i className={`${item.icon} text-2xl`} />
                                    </div> */}
                                    <h4 className="text-gray-900 font-bold text-xl mb-2">{item.title}</h4>
                                    <p className="text-gray-600 font-light text-base leading-relaxed mb-0">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SectionClients1;