import { useLocation } from "react-router-dom";
import Footer from "../app/sections/common/footer";
import Header1 from "../app/sections/common/header1";
import AppRoutes from "../routing/app-routes";
import Home1Page from "../app/components/home";
import SiteUpdateNotice from "../app/components/siteupdatenotice/siteupdatenotice";

function RootLayout() {
    const { pathname } = useLocation();

    return (
        <>
            <div className="page-wraper">
                {
                    <Header1 />
                }

                <div className="page-content">
                    <AppRoutes />
                </div>

                

                <Footer /> 
                {/* <div className="page-content">
                    <SiteUpdateNotice />
                </div> */}

                <button className="scroltop"><span className="fa fa-angle-up  relative" id="btn-vibrate"></span></button>
            </div>
        </>
    )
}

export default RootLayout;