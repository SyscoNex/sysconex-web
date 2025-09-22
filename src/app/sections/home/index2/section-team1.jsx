import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import teamData from "../../../../data/team.json"; // adjust path if needed

function SectionTeam1() {
    // Take first 4 members from JSON
    const teamMembers = teamData.slice(0, 4);

    return (
        <>
            <div className="section-full p-t110 p-b80 sx-bg-light sx-ourteam-outer ">
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head center">
                        <div className="sx-head-s-title">Our Team</div>
                        <div className="sx-head-l-title">
                            <h2 className="sx-title">Sysconex Team Members</h2>
                        </div>
                    </div>
                    {/* TITLE END */}

                    <div className="section-content">
                        <div className="row sx-our-team-section">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="our-team-2">
                                        <div className="profile-image">
                                            <ItodoImage src={member.image} alt={member.name} />
                                            <div className="icons">
                                                {member.socials?.facebook && (
                                                    <a href={member.socials.facebook} target="_blank" rel="noreferrer">
                                                        <i className="fa fa-facebook" />
                                                    </a>
                                                )}
                                                {member.socials?.instagram && (
                                                    <a href={member.socials.instagram} target="_blank" rel="noreferrer">
                                                        <i className="fa fa-instagram" />
                                                    </a>
                                                )}
                                                {member.socials?.linkedin && (
                                                    <a href={member.socials.linkedin} target="_blank" rel="noreferrer">
                                                        <i className="fa fa-linkedin" />
                                                    </a>
                                                )}
                                                {member.socials?.portfolio && (
                                                    <a href={member.socials.portfolio} target="_blank" rel="noreferrer">
                                                        <i className="fa fa-globe" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <div className="figcaption">
                                            <p>{member.role}</p>
                                            <h4 className="sx-title">
                                                <NavLink to="/team">{member.name}</NavLink>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SectionTeam1;
