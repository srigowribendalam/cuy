
import React, { lazy, Suspense,useEffect } from "react";
import "./HomePage.scss";
const HomeBanner = lazy(() => import("./Components/HomeBanner/HomeBanner"));
const Header = lazy(() => import("./Components/Header/Header"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
const ServicesSection = lazy(() =>
  import("./Components/ServicesSection/ServicesSection")
);
const ABoutCuySection = lazy(() =>
  import("./Components/ABoutCuySection/ABoutCuySection")
);
const TutorlalSection = lazy(() =>
  import("./Components/TutorlalSection/TutorlalSection")
);
const ContactSection = lazy(() =>
  import("./Components/ContactSection/ContactSection")
);

// const scrollBackToTop = () => {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
// };

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="Container">
        <div>
          <Suspense fallback={<h1>Still Loading…</h1>}></Suspense>
        </div>

        <div>
          <Suspense fallback={<h1>Still Loading…</h1>}>
            <HomeBanner />
          </Suspense>
        </div>

        <div>
          <Suspense fallback={<h1>Still Loading…</h1>}>
            <ServicesSection />
          </Suspense>
        </div>

        <div>
          <Suspense fallback={<h1>Still Loading…</h1>}>
            <ABoutCuySection />
          </Suspense>
        </div>
{/* 
        <div>
          <Suspense fallback={<h1>Still Loading…</h1>}>
            <TutorlalSection />
          </Suspense>
        </div> */}
        <div style={{paddingTop:"8%"}}>
          <Suspense fallback={<h1>Still Loading…</h1>}>
            <ContactSection />
          </Suspense>
        </div>

        <div>
          <Suspense fallback={<h1>Still Loading…</h1>}>
            <Footer />
          </Suspense>
        </div>
        {/* <div   className="targettop">
        <img
          src={require("../../Assets/Ourservies/backtotop.png")}
          onClick={scrollBackToTop}
          className="targettop"
        />
      </div> */}
      </div>

   
    </div>
  );
};

export default HomePage;
