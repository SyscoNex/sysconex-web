import { useParams } from "next/navigation";
import NavLink from "../../../elements/nav-link";
import { useEffect } from "react";
import services from "@/data/services.json"; // adjust path if needed
import ItodoImage from "../../../elements/itodo-img";
import SectionCounter1 from "../../../sections/home/index/section-counter1";
import SectionVideo2 from "../../../sections/home/index2/section-video2";
import SectionWhyChooseUs4 from "../../../sections/company/about/section-why-choose-us4";
import SectionClients2 from "../../../sections/home/index2/section-clients2";
import SectionCaseStudy1 from "../../../sections/home/index/section-case-study1";
import SectionFAQContent from "../../../sections/company/faq/section-faq-content";
import SectionCTA1 from "../../../sections/common/section-cta1";
import { loadScript, publicUrlFor } from "@/globals/constants";

function ServiceDetailPage() {
  const { slug } = useParams();

  // Find the current service by slug
  const currentIndex = services.findIndex((s) => s.slug === slug);
  const service = services[currentIndex];

  // Get prev/next for navigation
  const prevService =
    currentIndex > 0 ? services[currentIndex - 1] : services[services.length - 1];
  const nextService =
    currentIndex < services.length - 1 ? services[currentIndex + 1] : services[0];

  useEffect(() => {
    loadScript("js/custom.js");
  }, []);

  if (!service) {
    return (
      <div className="section-full p-t110 p-b80 sx-bg-white">
        <div className="container text-center">
          <h2>Service Not Found</h2>
          <NavLink to="/services" className="site-button m-t20">
            Back to Services
          </NavLink>
        </div>
      </div>
    );
  }

  const bannerImg = `images/banner/bnr1.png`;

  return (
    <>
      {/* Theme-Aligned Service Hero Start */}
      <div 
        className="full-landing-image sx-bnr-inr overlay-wraper bg-top-center" 
        style={{ 
          backgroundImage: `url(${publicUrlFor(bannerImg)})` 
        }}
      >
        <div className="overlay-main bg-black opacity-60" />
        <div className="container">
          <div className="sx-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                {/* Clean inline breadcrumb without template pill styles */}
                <div className="m-b20" style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", fontWeight: "500" }}>
                  <NavLink to="/" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>Home</NavLink>
                  <span style={{ margin: "0 8px" }}>/</span>
                  <NavLink to="/services" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>Services</NavLink>
                  <span style={{ margin: "0 8px" }}>/</span>
                  <span style={{ color: "var(--primary)" }}>{service.title}</span>
                </div>
                
                <span className="sx-bnr-sm-title" style={{ color: "var(--primary)" }}>Dedicated Consultancy</span>
                <h2 className="sx-title" style={{ color: "white", textTransform: "uppercase" }}>{service.title}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="sx-bnr-outline-text">
          <h1>Service</h1>
        </div>
      </div>

      <div className="section-full p-t100 p-b80 sx-ser-detail-outer sx-bg-white">
        <div className="container">
          <div className="section-content">
            <div className="sx-our-service-detail">
              {/* TITLE START */}
              <div className="section-head2">
                <div className="sx-head-s-title">Core Capability</div>
                <div className="sx-head-l-title">
                  <h2 className="sx-title2">Delivering Results & Value</h2>
                </div>
              </div>
              {/* TITLE END */}

              <div className="sx-our-service-info m-b80">
                {service.longDescription &&
                  service.longDescription.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}

                <div className="row sx-about-icon-bx1-column p-t50 p-b20">
                  {service.highlights &&
                    service.highlights.map((item, i) => (
                      <div key={i} className="col-lg-4 col-md-6 m-b30">
                        <div className="sx-icon-bx-2">
                           <div className="sx-media">
                            <i className={item.icon} />
                          </div>
                          <div className="sx-icon-bx-info">
                            <span className="sx-icon-bx-title">{item.title}</span>
                            <span className="sx-icon-bx-title-info">
                              {item.subtitle}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Prev / Next navigation */}
              <div className="sx-pagination-wra text-center m-b40">
                <ul className="sx-pagination">
                  <li>
                    <NavLink to={`/services/${prevService.slug}`}>
                      <span className="fa fa-long-arrow-left" /> {prevService.title}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={`/services/${nextService.slug}`}>
                      {nextService.title}{" "}
                      <span className="fa fa-long-arrow-right" />
                    </NavLink>
                  </li>
                </ul>
              </div>

              <SectionCounter1 />
            </div>
          </div>
        </div>
      </div>
      {/* Service Detail SECTION END */}

      <SectionWhyChooseUs4 />
      <SectionCaseStudy1 />

      {/* FAQ SECTION */}
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

      {/* RELATED SERVICES SECTION */}
      <div className="section-full p-t110 p-b80 sx-bg-light">
        <div className="container">
          <div className="section-head center">
            <div className="sx-head-s-title">Explore More</div>
            <div className="sx-head-l-title">
              <h2 className="sx-title">Related Services</h2>
            </div>
          </div>
          <div className="section-content">
            <div className="row justify-content-center">
              {services
                .filter((s) => s.slug !== slug)
                .slice(0, 3)
                .map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6 m-b30">
                    <div className="sx-service-bx-1">
                      <div className="sx-icon-box-wraper" style={{ minHeight: "280px" }}>
                        <div className="sx-service-bx-icon scale-in-center">
                          <span className="sx-text-primary">
                            <i className={item.icon} />
                          </span>
                        </div>
                        <div className="icon-content">
                          <NavLink to={`/services/${item.slug}`}>
                            <h4 className="sx-tilte">{item.title}</h4>
                          </NavLink>
                          <p>{item.description}</p>
                          <div className="sx-center-btn">
                            <NavLink
                              to={`/services/${item.slug}`}
                              className="site-button-circle"
                            >
                              <i className="fa fa-long-arrow-right" />
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <SectionVideo2 />
      <SectionClients2 />
      <SectionCTA1 />
    </>
  );
}

export default ServiceDetailPage;
