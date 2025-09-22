import { useParams, NavLink } from "react-router-dom";
import { useEffect } from "react";
import services from "../../../../data/services.json"; // adjust path if needed
import ItodoImage from "../../../elements/itodo-img";
import SectionCounter1 from "../../../sections/home/index/section-counter1";
import SectionVideo2 from "../../../sections/home/index2/section-video2";
import SectionWhyChooseUs4 from "../../../sections/company/about/section-why-choose-us4";
import SectionClients2 from "../../../sections/home/index2/section-clients2";
import { loadScript } from "../../../../globals/constants";

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

  return (
    <>
      {/* Service Detail SECTION START */}
      <div className="section-full p-b80 sx-ser-detail-outer sx-bg-white">
        <div className="sx-ser-detail-l-pic p-b80">
          <div className="sx-media relative">
            <ItodoImage src={service.image} alt={service.title} />
            <div className="sx-bnr-outline-text">
              <h1>{service.title}</h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="section-content">
            <div className="sx-our-service-detail">
              {/* TITLE START */}
              <div className="section-head2">
                <div className="sx-head-s-title">Why Choose Us</div>
                <div className="sx-head-l-title">
                  <h2 className="sx-title2">{service.description}</h2>
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

      <SectionVideo2 />
      <SectionWhyChooseUs4 />
      <SectionClients2 />
    </>
  );
}

export default ServiceDetailPage;
