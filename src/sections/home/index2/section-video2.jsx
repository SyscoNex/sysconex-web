import { publicUrlFor } from "@/globals/constants";

function SectionVideo2() {
    return (
        <>
            <div className="section-full sx-video-2-outer sx-atc-fixed" style={{ backgroundImage: `url(${publicUrlFor("images/banner/abt-bnr1.png")})` }}>
                <div className="container">
                    <div className="sx-vodeo-section text-center">
                        <div className="sx-video-btn-wrap">
                            <a href="https://www.youtube.com/watch?v=SW6LPE99aII" className="mfp-video circle">
                                <i className="flaticon-play" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionVideo2;