import ItodoImage from "../../../elements/itodo-img";

function GeneralFAQContent() {
    return (
        <>
            <div className="aon-faq-content">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <div className="sx-acdn-style-1-section">
                            <div className="accordion sx-acdn-style-1" id="sf-faq-accordion">
                                {/*One*/}
                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ1" aria-expanded="false">
                                        What services does Sysconex provide?
                                    </button>
                                    <div id="FAQ1" className="accordion-collapse collapse" data-bs-parent="#sf-faq-accordion">
                                        <div className="accordion-body">
                                            Sysconex delivers end-to-end IT solutions including web & mobile app development, AI/ML integration, AR/VR solutions, cloud migration, and enterprise software systems tailored to your business needs.
                                        </div>
                                    </div>
                                </div>
                                {/*Two*/}
                                <div className="accordion-item">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ2" aria-expanded="true">
                                        Why should I choose Sysconex for my project?
                                    </button>
                                    <div id="FAQ2" className="accordion-collapse collapse show" data-bs-parent="#sf-faq-accordion">
                                        <div className="accordion-body">
                                            We focus on innovation, security, and scalability. Our team blends creative design with robust engineering, ensuring your solution is not only user-friendly but also future-ready and enterprise-grade.
                                        </div>
                                    </div>
                                </div>
                                {/*Three*/}
                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ3" aria-expanded="false">
                                        How does Sysconex ensure data security?
                                    </button>
                                    <div id="FAQ3" className="accordion-collapse collapse" data-bs-parent="#sf-faq-accordion">
                                        <div className="accordion-body">
                                            We follow industry best practices including secure coding, regular vulnerability testing, encryption protocols, and compliance with global security standards to safeguard client data.
                                        </div>
                                    </div>
                                </div>
                                {/*Four*/}
                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ4" aria-expanded="false">
                                        What industries does Sysconex work with?
                                    </button>
                                    <div id="FAQ4" className="accordion-collapse collapse" data-bs-parent="#sf-faq-accordion">
                                        <div className="accordion-body">
                                            We serve multiple industries including hospitality, healthcare, education, retail, and logistics. Our solutions are adaptable to any business domain requiring digital transformation.
                                        </div>
                                    </div>
                                </div>
                                {/*Five*/}
                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ5" aria-expanded="false">
                                        Does Sysconex provide ongoing support?
                                    </button>
                                    <div id="FAQ5" className="accordion-collapse collapse" data-bs-parent="#sf-faq-accordion">
                                        <div className="accordion-body">
                                            Yes, we provide continuous support and maintenance after project delivery. Our team ensures updates, monitoring, and improvements to keep your systems running smoothly.
                                        </div>
                                    </div>
                                </div>
                                {/*Six*/}
                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ6" aria-expanded="false">
                                        How do I start a project with Sysconex?
                                    </button>
                                    <div id="FAQ6" className="accordion-collapse collapse" data-bs-parent="#sf-faq-accordion">
                                        <div className="accordion-body">
                                            Simply reach out via our website or contact form. We’ll schedule a consultation to understand your goals, propose a roadmap, and build a tailored solution for your business.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="aon-faq-1-media">
                            {/* ✅ keep original image */}
                            <ItodoImage src="images/faq.png" alt="Sysconex FAQ" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function HelpFAQContent() {
    return (
        <>
            <div className="aon-faq-content">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <div className="sx-acdn-style-1-section">
                            <div className="accordion sx-acdn-style-1" id="sf-faq-accordion-1">
                                {/*One*/}
                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ1-1" aria-expanded="false">
                                        What technologies does Sysconex use?
                                    </button>
                                    <div id="FAQ1-1" className="accordion-collapse collapse" data-bs-parent="#sf-faq-accordion-1">
                                        <div className="accordion-body">
                                            We leverage modern stacks such as React, Angular, Node.js, Python (Django/Flask), TensorFlow, PyTorch, and cloud platforms like AWS and Azure for high-performing applications.
                                        </div>
                                    </div>
                                </div>
                                {/*Two*/}
                                <div className="accordion-item">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ2-1" aria-expanded="true">
                                        Can Sysconex build AI/AR/VR-based solutions?
                                    </button>
                                    <div id="FAQ2-1" className="accordion-collapse collapse show" data-bs-parent="#sf-faq-accordion-1">
                                        <div className="accordion-body">
                                            Absolutely! We specialize in AI-driven platforms, AR-powered food ordering, VR hotel tours, predictive analytics, and immersive digital experiences for modern businesses.
                                        </div>
                                    </div>
                                </div>
                                {/*Three*/}
                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ3-1" aria-expanded="false">
                                        How long does it take to deliver a project?
                                    </button>
                                    <div id="FAQ3-1" className="accordion-collapse collapse" data-bs-parent="#sf-faq-accordion-1">
                                        <div className="accordion-body">
                                            Timelines depend on scope and complexity. Smaller projects may take a few weeks, while enterprise solutions can span months. We follow agile methodology for iterative delivery.
                                        </div>
                                    </div>
                                </div>
                                {/*Four*/}
                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ4-1" aria-expanded="false">
                                        Does Sysconex offer customized solutions?
                                    </button>
                                    <div id="FAQ4-1" className="accordion-collapse collapse" data-bs-parent="#sf-faq-accordion-1">
                                        <div className="accordion-body">
                                            Yes, every solution is tailored. We analyze your workflows, industry requirements, and future goals to deliver software that aligns perfectly with your business strategy.
                                        </div>
                                    </div>
                                </div>
                                {/*Five*/}
                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ5-1" aria-expanded="false">
                                        Do you provide training for teams?
                                    </button>
                                    <div id="FAQ5-1" className="accordion-collapse collapse" data-bs-parent="#sf-faq-accordion-1">
                                        <div className="accordion-body">
                                            Yes, we provide onboarding, technical training, and documentation to ensure your team is confident in managing and scaling the solution.
                                        </div>
                                    </div>
                                </div>
                                {/*Six*/}
                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ6-1" aria-expanded="false">
                                        Where is Sysconex located and how do you work with clients globally?
                                    </button>
                                    <div id="FAQ6-1" className="accordion-collapse collapse" data-bs-parent="#sf-faq-accordion-1">
                                        <div className="accordion-body">
                                            Sysconex operates globally with clients across multiple regions. We collaborate remotely using modern tools, ensuring clear communication and smooth delivery across time zones.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="aon-faq-1-media">
                            {/* ✅ keep original image */}
                            <ItodoImage src="images/faq.png" alt="Sysconex Help FAQ" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function SectionFAQContent() {
    return (
        <>
            <div className="tab-content">
                {/*1*/}
                <div className="tab-pane fade show active" id="day_1" role="tabpanel">
                    <GeneralFAQContent />
                </div>
                {/*2*/}
                <div className="tab-pane fade" id="day_2" role="tabpanel">
                    <HelpFAQContent />
                </div>
            </div>
        </>
    )
}

export default SectionFAQContent;
