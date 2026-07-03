import SectionSlider1 from "../../sections/home/index/section-slider1";
import SectionServices1 from "../../sections/home/index/section-services1";
import SectionAboutCompany1 from "../../sections/home/index/section-about-company1";
import SectionWhyChooseUs2 from "../../sections/home/index2/section-why-choose-us2";
import SectionVideo1 from "../../sections/home/index/section-video1";
import SectionPricing1 from "../../sections/home/index/section-pricing1";
import SectionClients1 from "../../sections/home/index/section-clients1";
import SectionCaseStudy1 from "../../sections/home/index/section-case-study1";
import SectionFAQContent from "../../sections/company/faq/section-faq-content";
import SectionCTA1 from "../../sections/common/section-cta1";
import SectionBlogs1 from "../../sections/home/index/section-blogs1";
import { useEffect } from "react";
import { loadScript } from "@/globals/constants";

function Home1Page() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            <SectionSlider1 />
            <SectionServices1 />
            <SectionAboutCompany1 />
            <SectionWhyChooseUs2 />
            <SectionVideo1 />
            <SectionClients1 />
            <SectionCaseStudy1 />
            
            {/* FAQ Block */}
            <div className="section-full p-t110 p-b80 sx-bg-white">
                <div className="container">
                    <div className="section-head center">
                        <div className="sx-head-s-title">FAQ</div>
                        <div className="sx-head-l-title">
                            <h2 className="sx-title">Frequently Asked Questions</h2>
                        </div>
                    </div>
                    <SectionFAQContent />
                </div>
            </div>

            
            <SectionBlogs1 />
            <SectionCTA1 />
        </>
    )
}

export default Home1Page;