"use client";

import { useState } from "react";
import ItodoImage from "../../../elements/itodo-img";

function AccordionItem({ id, question, answer, isOpen, onToggle }) {
    return (
        <div className="accordion-item">
            <button
                className={`accordion-button${isOpen ? "" : " collapsed"}`}
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                {question}
            </button>
            <div
                id={id}
                style={isOpen ? { display: "block" } : { display: "none" }}
            >
                <div className="accordion-body">
                    {answer}
                </div>
            </div>
        </div>
    );
}

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

function FAQAccordion({ faqs, defaultOpen = 1 }) {
    const [openIndex, setOpenIndex] = useState(defaultOpen);

    return (
        <div className="sx-acdn-style-1-section">
            <div className="accordion sx-acdn-style-1">
                {faqs.map((faq, index) => (
                    <AccordionItem
                        key={faq.id}
                        id={faq.id}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                    />
                ))}
            </div>
        </div>
    );
}

function GeneralFAQContent() {
    return (
        <>
            <div className="aon-faq-content">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <FAQAccordion faqs={generalFAQs} defaultOpen={1} />
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="aon-faq-1-media">
                            <ItodoImage src="images/faq.png" alt="SyscoNex FAQ" />
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
                        <FAQAccordion faqs={helpFAQs} defaultOpen={1} />
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="aon-faq-1-media">
                            <ItodoImage src="images/faq.png" alt="SyscoNex Help FAQ" />
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
