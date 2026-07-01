import Banner from "../../../sections/common/banner";
import ItodoImage from "../../../elements/itodo-img";
import { useParams, useRouter } from "next/navigation";
import NavLink from "../../../elements/nav-link";
import { bannerData } from "@/globals/banner";
import { useEffect, useMemo } from "react";
import { loadScript } from "@/globals/constants";
import projectsData from "@/data/projects.json";

function PortfolioDetailPage() {
  const { slug } = useParams();
  const router = useRouter();

  useEffect(() => {
    const $ = window.jQuery || window.$;
    if (!$) return;
    const $carousel = $(".sx-case-st-carousel-2");
    try {
      $carousel.trigger("destroy.owl.carousel");
      $carousel.removeClass("owl-loaded owl-hidden");
      $carousel.find(".owl-stage-outer").children().unwrap();
      $carousel.find(".owl-stage-outer, .owl-stage, .owl-item").remove();
    } catch (e) {
    }

    try {
      $carousel.owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: { 0: { items: 1 }, 768: { items: 2 }, 1200: { items: 3 } }
      });
    } catch (e) {}
    return () => {
      try {
        $carousel.trigger("destroy.owl.carousel");
        $carousel.removeClass("owl-loaded owl-hidden");
        $carousel.find(".owl-stage-outer").children().unwrap();
        $carousel.find(".owl-stage-outer, .owl-stage, .owl-item").remove();
      } catch (e) {}
    };
  }, [slug]);

  useEffect(() => {
    loadScript("js/custom.js");
  }, []);

  // Find the project by slug
  const project = useMemo(
    () => projectsData.find(p => p.slug === slug),
    [slug]
  );

  // Basic guard: if not found, go back to portfolio list
  useEffect(() => {
    if (!project) {
      router.replace("/portfolio");
    }
  }, [project, router]);

  if (!project) return null; // brief guard while redirecting

  // Build related items (fallback to first 4 if config missing)
  const related = (project.relatedSlugs || [])
    .map(s => projectsData.find(p => p.slug === s))
    .filter(Boolean);

  return (
    <>
      <Banner _data={bannerData.portfoliodetail} />

      {/* SECTION CONTENT START */}
      <div className="section-full p-t110 mobile-page-padding">
        <div className="container">
          {/* Hero */}
          <div className="sx-pic-l">
            <ItodoImage src={project.heroImage || project.image} alt={project.title} />
          </div>

          <div className="section-content">
            {/* TITLE START */}
            <div className="section-head left">
              <div className="sx-head-s-title">{project.category || "Case Study"}</div>
              <div className="sx-head-l-title">
                <h2 className="sx-title">{project.title}</h2>
              </div>
              {project.summary && (
                <p style={{ marginTop: 10 }}>{project.summary}</p>
              )}
            </div>
            {/* TITLE END */}

            {/* Meta strip */}
            <div className="sx-about-icon-bx2-column sx-bg-light m-tb50">
              <div className="row ">
                <div className="col-lg-3 col-md-6">
                  <div className="sx-icon-bx-6">
                    <div className="sx-media sx-text-secondry">
                      <i className="flaticon-category" />
                    </div>
                    <div className="sx-icon-bx-info">
                      <span className="sx-icon-bx-title">Category:</span>
                      <span className="sx-icon-bx-title-info">{project.categoryLabel || project.category}</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="sx-icon-bx-6">
                    <div className="sx-media sx-text-secondry">
                      <i className="flaticon-calendar" />
                    </div>
                    <div className="sx-icon-bx-info">
                      <span className="sx-icon-bx-title">Date:</span>
                      <span className="sx-icon-bx-title-info">
                        {new Date(project.date).toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        })}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="sx-icon-bx-6">
                    <div className="sx-media sx-text-secondry">
                      <i className="flaticon-leaf" />
                    </div>
                    <div className="sx-icon-bx-info">
                      <span className="sx-icon-bx-title">Author:</span>
                      <span className="sx-icon-bx-title-info">{project.author || "Sysconex Team"}</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="sx-icon-bx-6">
                    <div className="sx-media sx-text-secondry">
                      <i className="flaticon-image" />
                    </div>
                    <div className="sx-icon-bx-info">
                      <span className="sx-icon-bx-title">Class:</span>
                      <span className="sx-icon-bx-title-info">{project.class || "-"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Intro paragraphs */}
            {project.content?.intro?.length ? (
              <div className="sx-our-service-info m-b30">
                {project.content.intro.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            ) : null}

            {/* Content sections (text + side image) */}
            {project.content?.sections?.map((sec, i) => (
              <div className="sx-r-part-image-content-box" key={i}>
                <div className="row">
                  <div className="col-lg-8 col-md-12">
                    <div className="sx-r-part-content">
                      {sec.heading && <h3 className="sx-title">{sec.heading}</h3>}
                      {sec.paragraphs?.map((p, k) => <p key={k}>{p}</p>)}
                      {/* CTA Buttons */}
                      <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
                        <NavLink to={project.portfolioLink} className="site-button icon">
                          <i className="fa fa-long-arrow-right" /> Portfolio
                        </NavLink>
                        {project.siteLink && (
                          <a
                            href={project.siteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="site-button icon"
                          >
                            <i className="fa fa-external-link" /> Visit Site
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="sx-r-part-media">
                      <ItodoImage src={sec.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Prev/Next (optional: you can wire these using index in projectsData if you like) */}
          <div className="s-post-pagination-control previous-next previous next">
            <div className="paging-left paging-item">
              <div className="paging-content">
                <NavLink className="paging-link" to="/portfolio">
                  <i className="fa  fa-long-arrow-left" />
                </NavLink>
                <div className="paging-content-inner">
                  <NavLink className="paging-link2" to="/portfolio">Back to Portfolio</NavLink>
                  <h4 className="paging-title">
                    <NavLink to="/portfolio">{project.category}</NavLink>
                  </h4>
                </div>
              </div>
            </div>
            <div className="paging-right paging-item">
              <div className="paging-content reverse">
                <a className="paging-link" href={project.siteLink} target="_blank" rel="noopener noreferrer">
                  <i className="fa  fa-long-arrow-right" />
                </a>
                <div className="paging-content-inner">
                  <a className="paging-link2" href={project.siteLink} target="_blank" rel="noopener noreferrer">Live Site</a>
                  <h4 className="paging-title">
                    <a href={project.siteLink} target="_blank" rel="noopener noreferrer">{project.title}</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OUR CASE STUDY SECTION */}
      <div className="section-full p-t110 p-b80 sx-bg-white sx-case-study3-outer">
        <div className="container">
          <div className="section-head center">
            <div className="sx-head-s-title">Our Case Study</div>
            <div className="sx-head-l-title">
              <h2 className="sx-title">Related Case Study</h2>
            </div>
          </div>

          <div className="section-content">
            <div key={`related-${slug}`} className="owl-carousel sx-case-st-carousel-2 m-b30">
              {related.map(r => (
                <div className="item" key={r.slug}>
                  <div className="sx-case-study-bx three-blocks sx-overlay-effect">
                    <div className="sx-case-media sx-img-overlay">
                      <NavLink to={r.portfolioLink}>
                        <ItodoImage src={r.heroImage || r.image} alt={r.title} />
                      </NavLink>
                      <NavLink to={r.portfolioLink} className="sx-case-link">
                        <i className="flaticon-up-right-arrow" />
                      </NavLink>
                    </div>
                    <div className="sx-case-info">
                      <div className="sx-s-title">{r.categoryLabel || r.category}</div>
                      <NavLink className="sx-l-title" to={r.portfolioLink}>
                        <h2 className="sx-title">{r.title}</h2>
                      </NavLink>
                      <div className="sx-case-readmore">
                        <NavLink to={r.portfolioLink} title="READ MORE" rel="bookmark" className="site-button icon">
                          <i className="fa  fa-long-arrow-right" /> Read More
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Fallback if related empty */}
              {!related.length && projectsData.slice(0, 4).map(r => (
                <div className="item" key={r.slug}>
                  <div className="sx-case-study-bx three-blocks sx-overlay-effect">
                    <div className="sx-case-media sx-img-overlay">
                      <NavLink to={r.portfolioLink}>
                        <ItodoImage src={r.heroImage || r.image} alt={r.title} />
                      </NavLink>
                      <NavLink to={r.portfolioLink} className="sx-case-link">
                        <i className="flaticon-up-right-arrow" />
                      </NavLink>
                    </div>
                    <div className="sx-case-info">
                      <div className="sx-s-title">{r.categoryLabel || r.category}</div>
                      <NavLink className="sx-l-title" to={r.portfolioLink}>
                        <h2 className="sx-title">{r.title}</h2>
                      </NavLink>
                      <div className="sx-case-readmore">
                        <NavLink to={r.portfolioLink} title="READ MORE" rel="bookmark" className="site-button icon">
                          <i className="fa  fa-long-arrow-right" /> Read More
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      {/* OUR CASE STUDY END */}
    </>
  );
}

export default PortfolioDetailPage;
