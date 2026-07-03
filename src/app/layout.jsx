"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Loader from "../elements/loader";
import ScrollToTop from "../elements/scroll-to-top";
import Footer from "../sections/common/footer";
import Header1 from "../sections/common/header1";
import "./globals.css";

export default function RootLayout({ children }) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="SyscoNex Solutions, technology consultancy Sri Lanka, Web & Mobile development Negombo, AI & Machine Learning solutions, Cybersecurity Sri Lanka, Networking and Linux Systems, SEO services, Graphic design Sri Lanka, Branding and digital marketing" />
        <meta name="description" content="SyscoNex Solutions is a Sri Lanka-based technology consultancy delivering innovative, scalable, and secure IT and digital marketing solutions worldwide." />
        <meta name="author" content="SyscoNex Solutions" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="SyscoNex Solutions - Innovative IT Solutions in Sri Lanka" />
        <meta property="og:description" content="Leading IT provider in Sri Lanka delivering Web, Mobile, AI/ML, SEO, Cybersecurity, and Design solutions." />
        <meta property="og:image" content="/logo192.png" />
        <meta property="og:url" content="https://www.sysconex.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SyscoNex Solutions - Innovative IT Solutions in Sri Lanka" />
        <meta name="twitter:description" content="Delivering Web, Mobile, AI/ML, Cybersecurity, SEO, and Design solutions for your business." />
        <meta name="twitter:image" content="/logo192.png" />
        <meta name="google-site-verification" content="t5pOu2sICq6az6aSanjOTNxu7L31EjhZQj0PFVYCxhk" />
        
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon.png" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <title>SyscoNex</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Stylesheets */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="/assets/css/loader.min.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/feather.css" />
        <link rel="stylesheet" href="/assets/css/lc_lightbox.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        {isLoading && <Loader />}
        <ScrollToTop />
        <div className="page-wraper">
          <Header1 />
          <div className="page-content">{children}</div>
          <Footer />
          <button className="scroltop">
            <span className="fa fa-angle-up relative" id="btn-vibrate"></span>
          </button>
        </div>

        {/* Scripts */}
        <Script src="/assets/js/jquery-3.6.1.min.js.js" strategy="beforeInteractive" />
        <Script src="/assets/js/popper.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/counterup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/waypoints-sticky.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/theia-sticky-sidebar.js" strategy="afterInteractive" />
        <Script src="/assets/js/wow.js" strategy="afterInteractive" />
        <Script src="/assets/js/lc_lightbox.lite.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/custom.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
