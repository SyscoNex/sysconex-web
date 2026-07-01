import ItodoImage from "../../../elements/itodo-img";
import NavLink from "@/elements/nav-link";
import teamData from "@/data/team.json";

function SectionBlogs1() {
    // pick just the featured team members for this carousel
    const featuredMembers = (teamData || []).filter(m => m.featured);

    return (
        <>
            <div className="section-full p-t110 p-b80 sx-bg-white sx-latest-blog-outer wow fadeInDown" data-wow-duration="1000ms">
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head center">
                        <div className="sx-head-l-title">
                            <h2 className="sx-title">Meet Our Team</h2>
                        </div>
                    </div>
                    {/* TITLE END */}

                    <div className="section-content">
                        <div className="owl-carousel sx-latest-blog-1-carousel m-b30">
                            {featuredMembers.map(member => {
                                const hasExternal = member.portfolio && /^https?:\/\//i.test(member.portfolio);
                                const TitleLink = ({ children }) =>
                                    hasExternal ? (
                                        <a href={member.portfolio} target="_blank" rel="noopener noreferrer">{children}</a>
                                    ) : (
                                        <NavLink to="/team">{children}</NavLink>
                                    );

                                const ImageLink = ({ children }) =>
                                    hasExternal ? (
                                        <a href={member.portfolio} target="_blank" rel="noopener noreferrer">{children}</a>
                                    ) : (
                                        <NavLink to="/team">{children}</NavLink>
                                    );

                                return (
                                    <div className="item" key={member.id}>
                                        <div className="sx-latest-post-st-1">
                                            <div className="sx-post-media sx-img-effect img-reflection">
                                                <ImageLink>
                                                    <ItodoImage src={member.image} alt={member.name} />
                                                </ImageLink>
                                            </div>
                                            <div className="sx-post-info p-t30">
                                                <div className="sx-post-title">
                                                    <h4 className="post-title">
                                                        <TitleLink>{member.name}</TitleLink>
                                                    </h4>
                                                </div>
                                                <div className="sx-post-readmore">
                                                    {hasExternal ? (
                                                        <a href={member.portfolio} target="_blank" rel="noopener noreferrer" title="READ MORE" className="site-button icon">
                                                            <i className="fa fa-long-arrow-right" /> Visit Portfolio
                                                        </a>
                                                    ) : (
                                                        <NavLink to="/team" title="READ MORE" rel="bookmark" className="site-button icon">
                                                            <i className="fa fa-long-arrow-right" /> Read More
                                                        </NavLink>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SectionBlogs1;
