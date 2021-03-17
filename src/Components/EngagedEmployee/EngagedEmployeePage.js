import { Row, Col, Divider } from "antd";
import React from "react";
import Header from "../Home/Components/Header/Header";
import Footer from "../Home/Components/Footer/Footer";
import "./EngagedEmployeePage.scss";

const EngagedEmployeePage = () => {
  const scrollBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="Our-ServicesPage-Container">
      <div className="OurServicesPage-Header">
        <Header />
      </div>

      <div className="Our-Services-Container">
        {/* <!-- introduction block starts here--> */}
        <Row>
          <Col sm={13}>
            <div className="Our-Services-contnet">
              <h1>Engaged Employee</h1>
              <h3>Introduction</h3>
              <h5>
                Cuyfy is here to remove the void of unknown between you and your
                company. Cuyfy aims to make work places more connected and fun
                with a gamified experience.
              </h5>
            </div>
          </Col>
          <Col sm={10}>
            <div className="Our-Services-imgfluid">
              <img
                className="imgfluid"
                src={require("../../Assets/Ourservies/banner1.png")}
                alt="logo"
              />
            </div>
          </Col>
        </Row>
      </div>
      {/* <!-- introduction block ends here --> */}

      <div className="Wisely-Plan-container">
        {/* <!-- Wisely Plan you Benefits block starts here--> */}
        <Row>
          <Col sm={13}>
            <div className="Wisely-Plan-content">
              <h3>Wisely Plan you Benefits</h3>
              <Divider />
              <h5>
                Organisations provide various benefits like insurance coverage,
                additional insurance, fitness clubs, golf club, higher education
                and many more.
              </h5>
              <h5>
                With CuyFy, you can plan according to your needs and enjoy the
                same benefits but to your taste. How cool that will be!!
              </h5>
            </div>
          </Col>
          <Col sm={10}>
            <div className="Wisely-Plan-imgfluid">
              <img
                src={require("../../Assets/Ourservies/banner2.png")}
                className="imgfluid"
              />
            </div>
          </Col>
        </Row>
        {/* <!-- Wisely Plan you Benefits block ends here--> */}
      </div>

      <div className="Make-rewads-container">
        {/* <!-- Make rewads more memorable starts here--> */}
        <Row>
          <Col sm={10}>
            <div className="Make-rewads-img">
              <img
                src={require("../../Assets/Ourservies/banner3.png")}
                className="imgfluid"
                alt="/"
              />
            </div>
          </Col>
          <Col sm={13}>
            <div className="Make-rewads-content">
              <h3>Make rewads more memorable</h3>
              <Divider />

              <h5>
                Colleagues, direct reportees and managers do reward for the
                great outcomes which an individual or a team delivered. They can
                be a certificate or reward points.
              </h5>
              <h5>
                At CuyFy, these reward points can be accumilated over a period
                and turn them into a memorable item of your choice and need
                which you will remember for good!!
              </h5>
            </div>
          </Col>
        </Row>
        {/* <!-- Make rewads more memorable block ends here--> */}
      </div>

      <div className="Bring-container">
        {/* <!-- Bring in the talented friends block starts here--> */}
        <Row>
          <Col sm={12}>
            <div className="Bring-container-content">
              <h3 className="">Bring in the talented friends</h3>
              <Divider />
              <h5>
                Talent is the need of any organisation and you are part of
                bringing in the talent from your known cicles into the
                organisation.
              </h5>
              <h5>
                CuyFy supports organisations recognising your efforts count in
                its growth and bringin right talent through its referal program
                which is global
              </h5>
            </div>
          </Col>
          <Col sm={12}>
            <div className="Bring-container-imgfluid">
              <img
                src={require("../../Assets/Ourservies/banner4.png")}
                className="imgfluid"
                alt="/"
              />
            </div>
          </Col>
        </Row>
        {/* <!-- Bring in the talented friends block ends here--> */}
      </div>

      <div className="Kindle-container">
        {/* <!-- Kindle the knowldge starts here--> */}
        <Row>
          <Col sm={10}>
            <div className="Kindle-img">
              <img
                src={require("../../Assets/Ourservies/kindle.png")}
                className="imgfluid"
                alt="/"
              />
            </div>
          </Col>
          <Col sm={12}>
            <div className="Kindle-container-content">
              <h3 className="mt-3">Kindle the knowldge</h3>
              <Divider />

              <h5>
                Mentoring and reverse mentoring within organisations will
                creative collaborative environment and improves inclusiveness in
                people
              </h5>
              <h5>
                CuyFy makes it easy with a planner by promoting people to
                connect for mentoring and reverse mentoring sessions with their
                interactions as To-do lists.
              </h5>
            </div>
          </Col>
        </Row>
        {/* <!-- Kindle the knowldge block ends here--> */}
      </div>

      <div className="Plan-container">
        {/* <!-- Plan your career block starts here--> */}
        <Row>
          <Col sm={12}>
            <div className="Plan-container-content">
              <h3 className="">Plan your career</h3>
              <Divider />
              <h5>
                Organisations promote learning and development covering
                technical, functional and soft skill trainings across the year.
              </h5>
              <h5>
                Using CuyFy, one can set self goals, plan their training
                calendar alinged with organisations in their respective area of
                interest and enhance skills or get certified.
              </h5>
            </div>
          </Col>
          <Col sm={12}>
            <div className="Plan-container-img">
              <img
                src={require("../../Assets/Ourservies/plan.png")}
                className="imgfluid"
                alt="/"
              />
            </div>
          </Col>
        </Row>
        {/* <!-- Plan your career block ends here--> */}
      </div>

      <div className="events-container">
        {/* <!-- Plan your events starts here--> */}
        <Row>
          <Col sm={11}>
            <div className="events-container-img">
              <img
                src={require("../../Assets/Ourservies/banner6.png")}
                className="imgfluid"
                alt="/"
              />
            </div>
          </Col>
          <Col sm={12}>
            <div className="events-container-content">
              <h3>Plan your events</h3>
              <Divider />

              <h5>
                Team, Divisions, Groups all have various events planned year
                along and across the geographies for their workforce. These
                events can be internal town halls, knowledge sharing sessions,
                sports events, external conferances, CSR programs and many.
              </h5>
              <h5>
                CuyFy helps in listing all these events in the calendar and
                update with latest status. You can book a slot depending on your
                interest and link it to your office calendar.
              </h5>
            </div>
          </Col>
        </Row>
        {/* <!-- Plan your events block ends here--> */}
      </div>

      <div className="Conduct-container">
        {/* <!-- Conduct pulse surveys and polls block starts here--> */}
        {/* <Row >
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
        </Row> */}
        {/* <!-- Plan your career block ends here--> */}
      </div>

      {/* <div>
        <img
          src={require("../../Assets/Ourservies/backtotop.svg")}
          className="targettop"
          onClick={scrollBackToTop}
        />
      </div> */}

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default EngagedEmployeePage;
