import ItodoImage from "../../../elements/itodo-img";
import NavLink from "@/elements/nav-link";

function SectionClients2({ hideTitle }) {
    const logos = [
        "images/client-logo/logo-lixr.png",
        "images/client-logo/ocean-tec.png",
        "images/client-logo/smt-holiday.png",
        "images/client-logo/pristinecode.png",
        "images/client-logo/accessara-logo.png",
        "images/client-logo/crown-lodge.png"
    ];

    // Duplicate logos for seamless looping marquee
    const marqueeLogos = [...logos, ...logos, ...logos];

    return (
        <>
            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-200px * 6)); }
                }
                .marquee-container {
                    overflow: hidden;
                    width: 100%;
                    position: relative;
                    padding: 30px 0;
                    background: transparent;
                }
                .marquee-container::before,
                .marquee-container::after {
                    content: "";
                    height: 100%;
                    position: absolute;
                    width: 150px;
                    z-index: 2;
                    pointer-events: none;
                }
                .marquee-container::before {
                    left: 0;
                    top: 0;
                    background: linear-gradient(to right, white 0%, transparent 100%);
                }
                .marquee-container::after {
                    right: 0;
                    top: 0;
                    background: linear-gradient(to left, white 0%, transparent 100%);
                }
                .marquee-track {
                    display: flex;
                    width: calc(200px * 18);
                    animation: scroll 20s linear infinite;
                }
                .marquee-track:hover {
                    animation-play-state: paused;
                }
                .marquee-item {
                    width: 200px;
                    height: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 35px;
                    transition: all 0.3s ease;
                    filter: grayscale(100%);
                    opacity: 0.55;
                }
                .marquee-item:hover {
                    filter: grayscale(0%);
                    opacity: 1;
                    transform: scale(1.1);
                }
                .marquee-item img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }
            `}</style>

            <div className="section-full p-t110 p-b80 sx-client-logo-1-outer sx-bg-white">
                <div className="container">
                    {/* TITLE START */}
                    {
                        (hideTitle === undefined ||
                            hideTitle === null ||
                            !hideTitle) &&
                        <div className="section-head center max-900">
                            <div className="sx-head-s-title">Our Clients</div>
                            <div className="sx-head-l-title">
                                <h2 className="sx-title2">Trusted by Innovative Brands Worldwide</h2>
                            </div>
                        </div>
                    }
                    {/* TITLE END */}
                    
                    <div className="section-content">
                        <div className="marquee-container">
                            <div className="marquee-track">
                                {marqueeLogos.map((logo, index) => (
                                    <div key={index} className="marquee-item">
                                        <NavLink to="/contact-us">
                                            <ItodoImage src={logo} alt={`Client logo ${index}`} />
                                        </NavLink>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionClients2;