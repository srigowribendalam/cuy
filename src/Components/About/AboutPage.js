import { Row, Col, Button, Divider } from "antd";
import React,{useEffect} from "react";
import Footer from "../Home/Components/Footer/Footer";
import Header from "../Home/Components/Header/Header";
import "./AboutPage.scss";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
const scrollBackToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
  return (
    <div className="AboutPage-container">
      <div className="AboutPage-Header">
        <Header />
        <div className="AboutPage-body">
          {/* AboutPage-Banner-starts */}
          <div className="AboutPage-Banner-container">
            <Row>
              <Col md={12}>
                <div className="AboutPage-Banner-content">
                  <h1>About Us</h1>
                  <h2>Introduction</h2>
                  <h5>
                    Cuyfy is here to remove the void of unknown between you and
                    your company. Cuyfy aims to make work places more connected
                    and fun with a gamified experience.
                  </h5>
                </div>
              </Col>
              <Col md={12}>
                <div className="AboutPage-Banner-img">
                  <img
                    className="contact"
                    src={require("../../Assets/About/AboutBanner.svg")}
                    alt="banner"
                  />
                </div>
              </Col>
            </Row>
          </div>
          {/* AboutPage-Banner-ends */}

          {/* AboutPage-Kudos start Here */}
          <div className="AboutPage-Kudos-container">
            <Row>
              <Col md={16}>
                <div className="AboutPage-Kudos-image">
                  <img
                    className="contact"
                    src={require("../../Assets/About/curve.png")}
                    alt="banner"
                  />
                  <div className="AboutPage-Kudos-image-content">
                    <h2>Who are we</h2>
                    <Divider />
                    <h4>
                      An easy to use and accessible method for employees to
                      understand company benefits, offering and allows them to
                      customize their preferred benefits to suit their needs.
                    </h4>
                  </div>
                </div>
              </Col>
              <Col md={8}>
                <div className="AboutPage-Kudos-main-content">
                <h2>What matters us</h2>
                <Divider />
                  <h5>
                    You deserve a break for all the work you have put in these
                    days. Let Cuyfy help you out with a couple of free goodies
                    or discounts from some of your favorite stores.
                  </h5>
                </div>
              </Col>
            </Row>
          </div>
          {/* AboutPage-Kudos ends Here */}

          {/* AboutPage-Cuyfypoints start here */}
    
          {/* AboutPage-Cuyfypoints ends here */}

          {/* AboutPage-feeds-start */}
        
          <div className="AboutPage-feeds-container">
            <Row>
              <Col md={10}>
                <div className="AboutPage-feeds-content">
                <h2>
                  How we do it
                  </h2>
                  <Divider />
                  <h5>
                    It’s a gift…. The starter kit given by companies along with
                    us to new recruits with all the essentials needs to embark
                    in your new and awesome journey
                  </h5>
                </div>
              </Col>
              <Col md={14}>
                <div className="AboutPage-feeds-img">
                  <img
                    className="contact"
                    src={require("../../Assets/About/curve.png")}
                    alt="banner"
                  />
                  <div className="AboutPage-feeds-image-content">
                    <h2>What we do</h2>
                    <Divider />
                    <h4>
                      An easy to use and accessible method for employees to
                      understand company benefits, offering and allows them to
                      customize their preferred benefits to suit their needs.
                    </h4>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          {/* AboutPage-feeds-ends */}

          {/* AboutPage-Cuyfypoints Start Here*/}
      


          <div className="Conduct-container">
        {/* <!-- Conduct pulse surveys and polls block starts here--> */}
        <Row >
          <Col sm={14}>
            <div className="Conduct-container-content">
              <h3>Conduct pulse surveys and polls</h3>

              <Divider />

              <h5 >
                New laptops, new locations, change in sanks menu, change in a
                route or a laptop, organisations feel the need to understand
                their workforce.
              </h5>
              <h5>
                CuyFy can support this by creating a quick pulse surveys or
                polls for a given duration and provide results spontaneously.
              </h5>
            </div>
          </Col>
          <Col sm={8}>
          <div  className="Conduct-container-img">
                  <img
                    src={require("../../Assets/Ourservies/banner7.png")}
                    className="imgfluid"
                    alt="/"
                  />
                
             
            </div>
          </Col>
        </Row>
        {/* <!-- Plan your career block ends here--> */}
      </div>

          {/*  AboutPage-Cuyfypoints Ends Here */}

          {/* <div className="AboutPage-Bottom-Banner">
            <div className="AboutPage-Bottom-content">
              
                <h1>JOIN OUR COMMUNITY </h1>
                <h5>There are always ups and downs but always give it your best shot because you are the best.</h5>
              
              <Button>GET STARTED</Button>
            </div>
            <img
                    className="contact"
                    src={require("../../Assets/About/MaskGroup.png")}
                    alt="banner"
                  />
          </div> */}
          {/* footer */}
          <div className="AboutPage-footer">
            <Footer/>
          </div>
          {/* <div>
         
         <img  src={require("../../Assets/Ourservies/backtotop.svg")} className="targettop"  onClick={scrollBackToTop}/>
       
     </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
