import Banner from "../../sections/common/banner";
import ItodoImage from "../../elements/itodo-img";
import { bannerData } from "../../../globals/banner";
import { NavLink } from "react-router-dom";
import teamData from "../../../data/team.json";

function TeamPage() {
    return (
        <>
            <Banner _data={bannerData.team} />

            <div className="section-full p-t110 p-b80 sx-bg-light sx-ourteam-outer ">
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head center">
                        <div className="sx-head-s-title">Our Services</div>
                        <div className="sx-head-l-title">
                            <h2 className="sx-title">IT Solution Team Members</h2>
                        </div>
                    </div>
                    {/* TITLE END */}
                    <div className="section-content">
                        <div className="row sx-our-team-section">
                            {teamData.map(member => (
                                <div className="col-lg-3 col-md-6 col-sm-6" key={member.id}>
                                    <div className="our-team-2">
                                        <div className="profile-image">
                                            <ItodoImage src={member.image} alt={member.name} />
                                            <div className="icons">
                                                {member.facebook && <a href={member.facebook}><i className="fa fa-facebook" /></a>}
                                                {member.instagram && <a href={member.instagram}><i className="fa fa-instagram" /></a>}
                                                {member.dribbble && <a href={member.dribbble}><i className="fa fa-dribbble" /></a>}
                                                {member.behance && <a href={member.behance}><i className="fa fa-behance" /></a>}
                                                {member.linkedin && <a href={member.linkedin}><i className="fa fa-linkedin" /></a>}
                                                {member.portfolio && <a href={member.portfolio}><i className="fa fa-globe" /></a>}
                                            </div>
                                        </div>
                                        <div className="figcaption">
                                            <p>{member.role}</p>
                                            <h4 className="sx-title"><NavLink to="/about-us">{member.name}</NavLink></h4>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/*Pagination*/}
                {/* <div className="sx-pagination-wra text-center">
                    <ul className="sx-pagination">
                        <li><a href="#"><span className="fa fa-long-arrow-left" /></a></li>
                        <li><a href="#">01</a></li>
                        <li className="active"><a href="#">02</a></li>
                        <li><a href="#">03</a></li>
                        <li><a href="#">04</a></li>
                        <li><a href="#"><span className="fa fa-long-arrow-right" /></a></li>
                    </ul>
                </div> */}
            </div>
        </>
    )
}

export default TeamPage;
