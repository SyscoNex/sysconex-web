"use client";

import { useState } from "react";
import Banner from "../../sections/common/banner";
import SectionClients2 from "../../sections/home/index2/section-clients2";
import { bannerData } from "@/globals/banner";
import ItodoImage from "../../elements/itodo-img";

// ─── FAQ Data ──────────────────────────────────────────────────────────────────

const generalFAQs = [
    {
        id: "FAQ1",
        question: "What services does SyscoNex provide?",
        answer: "SyscoNex delivers end-to-end technology and digital marketing solutions including web & mobile app development, AI/ML integration, cybersecurity, networking & Linux administration, SEO, and graphic design/branding.",
    },
    {
        id: "FAQ2",
        question: "Why should I choose SyscoNex for my project?",
        answer: "We focus on innovation, security, and scalability. Our team blends creative design and marketing strategy with robust full-stack engineering under one roof, so you don't need to juggle multiple vendors.",
    },
    {
        id: "FAQ3",
        question: "How does SyscoNex ensure data security?",
        answer: "We follow industry best practices including secure coding, regular vulnerability testing, encryption protocols, and compliance with global security standards to safeguard client data.",
    },
    {
        id: "FAQ4",
        question: "What industries does SyscoNex work with?",
        answer: "We serve multiple industries including e-commerce, retail, travel, education, logistics, and tech startups. Our solutions are adaptable to any business domain requiring digital transformation.",
    },
    {
        id: "FAQ5",
        question: "Does SyscoNex provide ongoing support?",
        answer: "Yes, we provide continuous support, server administration, systems architecture support, and maintenance after project delivery to ensure updates, monitoring, and improvements.",
    },
    {
        id: "FAQ6",
        question: "How do I start a project with SyscoNex?",
        answer: "Simply reach out via our website or contact form. We'll schedule a consultation to understand your goals, propose a roadmap, and build a tailored solution for your business.",
    },
];

const helpFAQs = [
    {
        id: "FAQ1-1",
        question: "What technologies does SyscoNex use?",
        answer: "We leverage modern stacks such as React, Next.js, Node.js, Python (Django/Flask), TensorFlow, PyTorch, Linux systems administration, and cloud platforms like AWS, GCP, and Azure.",
    },
    {
        id: "FAQ2-1",
        question: "Can SyscoNex build AI and ML-based solutions?",
        answer: "Absolutely! We specialize in research-driven AI integration, custom machine learning models, predictive analytics, natural language processing, and automation pipelines tailored to real business problems.",
    },
    {
        id: "FAQ3-1",
        question: "How long does it take to deliver a project?",
        answer: "Timelines depend on scope and complexity. Smaller projects may take a few weeks, while enterprise solutions can span months. We follow agile methodology for iterative delivery.",
    },
    {
        id: "FAQ4-1",
        question: "Does SyscoNex offer customized solutions?",
        answer: "Yes, every solution is tailored. We analyze your workflows, industry requirements, and future goals to deliver software and branding that aligns perfectly with your business strategy.",
    },
    {
        id: "FAQ5-1",
        question: "Do you provide training for teams?",
        answer: "Yes, we provide onboarding, technical training, and documentation to ensure your team is confident in managing and scaling the solution.",
    },
    {
        id: "FAQ6-1",
        question: "Where is SyscoNex located and how do you work with clients globally?",
        answer: "SyscoNex operates globally out of Negombo, Sri Lanka, serving clients across international markets including Australia, the US, and the UK. We collaborate remotely using modern communication tools.",
    },
];

// ─── Accordion Component ────────────────────────────────────────────────────────

function FAQAccordion({ faqs, defaultOpen = 1 }) {
    const [openIndex, setOpenIndex] = useState(defaultOpen);

    return (
        <div className="sx-acdn-style-1-section">
            <div className="accordion sx-acdn-style-1">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div className="accordion-item" key={faq.id}>
                            <button
                                className={`accordion-button${isOpen ? "" : " collapsed"}`}
                                type="button"
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                aria-expanded={isOpen}
                            >
                                {faq.question}
                            </button>
                            <div
                                className="accordion-collapse"
                                style={{
                                    display: isOpen ? "block" : "none",
                                    overflow: "hidden",
                                }}
                            >
                                <div className="accordion-body">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// ─── FAQ Tab Content ───────────────────────────────────────────────────────────

function FAQTabContent({ faqs }) {
    return (
        <div className="aon-faq-content">
            <div className="row">
                <div className="col-lg-7 col-md-12">
                    <FAQAccordion faqs={faqs} defaultOpen={1} />
                </div>
                <div className="col-lg-5 col-md-12">
                    <div className="aon-faq-1-media">
                        <ItodoImage src="images/faq.png" alt="SyscoNex FAQ" />
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─── Combined FAQ Section ──────────────────────────────────────────────────────

function FAQCombined() {
    const [activeTab, setActiveTab] = useState("general");

    return (
        <>
            <div className="section-full p-t100 p-b0 sx-bg-white sx-faq--outer">
                <div className="container">
                    <div className="aon-faq-row-section">
                        <div className="sx-faq-style-1-wrap">
                            {/* Tab Navigation */}
                            <ul className="nav nav-pills sx-tab-style-1" role="tablist">
                                <li className="nav-item">
                                    <div
                                        className={`nav-link${activeTab === "general" ? " active" : ""}`}
                                        onClick={() => setActiveTab("general")}
                                        style={{ cursor: "pointer" }}
                                        role="tab"
                                    >
                                        <h5 className="tb-title">General Faq</h5>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div
                                        className={`nav-link${activeTab === "help" ? " active" : ""}`}
                                        onClick={() => setActiveTab("help")}
                                        style={{ cursor: "pointer" }}
                                        role="tab"
                                    >
                                        <h5 className="tb-title">Help Faq</h5>
                                    </div>
                                </li>
                            </ul>

                            {/* Tab Content */}
                            <div className="tab-content">
                                {activeTab === "general" && (
                                    <div className="tab-pane fade show active" role="tabpanel">
                                        <FAQTabContent faqs={generalFAQs} />
                                    </div>
                                )}
                                {activeTab === "help" && (
                                    <div className="tab-pane fade show active" role="tabpanel">
                                        <FAQTabContent faqs={helpFAQs} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// ─── Page Export ───────────────────────────────────────────────────────────────

function FAQPage() {
    return (
        <>
            <Banner _data={bannerData.faq} />
            <FAQCombined />
            <SectionClients2 />
        </>
    )
}

export default FAQPage;