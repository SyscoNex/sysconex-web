import ItodoImage from "../../../elements/itodo-img";
import NavLink from "@/elements/nav-link";
import SectionTestimonials2 from "./section-testimonials2";

export function SectionWhyChooseUs2Inner() {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="sx-about-bx4-media">
            <div className="sx-ab4-img-outer">
              <div className="sx-ab4-media">
                {/* 🔒 keep the same image */}
                <ItodoImage src="images/about/abt1.png" alt="Sysconex team at work" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="sx-about-bx4-content">
            <h2 className="sx-title">Why choose SyscoNex?</h2>

            <p>
              SyscoNex builds reliable, modern software that turns ideas into
              production systems. We blend clean UX with scalable back-ends and
              obsess over performance, security, and maintainability—so you can
              launch faster and grow with confidence.
            </p>

            <ul className="sx-arrow-circle-checked">
              <li>Full-stack delivery: web, mobile, APIs, and integrations</li>
              <li>Security-first engineering and best-practice DevOps</li>
              <li>Cloud-ready architecture that scales with your demand</li>
              <li>Transparent communication and iterative, on-time releases</li>
              <li> measurable outcomes: uptime, latency, and user satisfaction</li>
            </ul>

            <NavLink to="/why-choose-us" className="site-button sx-btn-primary icon sx-btn-lg">
              <i className="fa fa-long-arrow-right" />
              Learn more about SyscoNex
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

function SectionWhyChooseUs2() {
  return (
    <>
      <div className="section-full p-t110 p-b80 sx-bg-light sx-about-bx4-outer">
        <div className="container">
          <div className="section-content">
            <div className="sx-about-bx4-content-wrap p-b70">
              <SectionWhyChooseUs2Inner />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionWhyChooseUs2;
