import { Button, Col, Row, Icon, Modal } from "antd";
import React, { useState } from "react";
import Header from "../Home/Components/Header/Header";
import Footer from "../Home/Components/Footer/Footer";
import "./PricingPage.scss";

const PricingPage = () => {
  const [active, setactive] = useState("Executive");
  const [modalVisible, setmodalVisible] = useState(false);
  const [PlanType, setPlanType] = useState("Yearly");

  const toggleTab = (e) => {
    setPlanType(e.target.innerText);
  };

const handletoggleTab=()=>{
  if(PlanType==="Yearly"){
    setPlanType("Monthly")
  }else{
    setPlanType("Yearly")
  }
}

  const contenticon = (
    <Icon
      type="check-circle"
      style={{ marginRight: "20px", color: "#6127FA" }}
    />
  );
  return (
    <div className="Pricing-Container">
      <Header />
      <div className="Pricing-body">
        <h1>Pricing to suit all Sizes of companies</h1>
        <h5>Get in touch and let us know how we can help.</h5>
        <h5>Get in touch and let us know</h5>
        <div className="pricing-nav-tabs" style={{cursor:'pointer'}} onClick={handletoggleTab}>
          <div
            className={PlanType === "Yearly" ? "active" : "in-active "}
            onClick={toggleTab}
          >
            <span>Yearly</span>
          </div>
          <div
            className={PlanType === "Monthly" ? "active" : "in-active"}
            onClick={toggleTab}
          >
            <span>Monthly</span>
          </div>
        </div>

        <div className="pricing-plan-card">
          <div
            className={
              active === "Standard"
                ? "pricing-plan-active"
                : "pricing-plan-inactive"
            }
            onClick={() => setactive("Standard")}
          >
            <h2>Standard</h2>
            <img
                className="imgfluid"
                src={ active === "Standard" ?require("../../Assets/Pricing/diamond.svg"):require("../../Assets/Pricing/diamondblue.svg")}
                alt="logo"
              />
            <h1>{PlanType === "Yearly" ? "$1500" : "$150"}</h1>
            <span className="validate-fields">
              {PlanType === "Yearly" ? (
                <>
                  <span
                    style={{
                      fontWeight: 600,
                      color: active === "Standard" ? "white" : "black",
                    }}
                  >
                    $80 &nbsp;
                  </span>
                  for every &nbsp;
                  <span
                    style={{
                      fontWeight: 600,
                      color: active === "Standard" ? "white" : "black",
                    }}
                  >
                    12 &nbsp;
                  </span>
                  months
                </>
              ) : (
                <span>For Month</span>
              )}
            </span>
            <div className="pricing-button">
            <Button  onClick={() => setmodalVisible(true)}>  View details</Button>
              {/* <span className="view" onClick={() => setmodalVisible(true)}>
                View details
              </span> */}
            </div>
          </div>
          <div
            className={
              active === "Executive"
                ? "pricing-plan-active"
                : "pricing-plan-inactive"
            }
            onClick={() => setactive("Executive")}
            style={{ borderRadius: "0 0px 0px 0px" }}
          >
            <h2>
              Executive
           
            </h2>
            <img
                className="imgfluid"
                src={ active === "Executive" ?require("../../Assets/Pricing/diamond.svg"):require("../../Assets/Pricing/diamondblue.svg")}
                alt="logo"
              />
            <h1>{PlanType === "Yearly" ? "$1000" : "$100"}</h1>
            <span className="validate-fields">
              {PlanType === "Yearly" ? (
                <>
                  <span
                    style={{
                      fontWeight: 600,
                      color: active === "Executive" ? "white" : "black",
                    }}
                  >
                    $80 &nbsp;
                  </span>
                  for every &nbsp;
                  <span
                    style={{
                      fontWeight: 600,
                      color: active === "Executive" ? "white" : "black",
                    }}
                  >
                    12 &nbsp;
                  </span>
                  months
                </>
              ) : (
                <span>For Month</span>
              )}
            </span>
            <div className="pricing-button">
              <Button  onClick={() => setmodalVisible(true)}>  View details</Button>
              {/* <span className="view" onClick={() => setmodalVisible(true)}>
                View details
              </span> */}
            </div>
          </div>
          <div
            className={
              active === "Premium"
                ? "pricing-plan-active"
                : "pricing-plan-inactive"
            }
            onClick={() => setactive("Premium")}
            style={{ borderRadius: "0 30px 30px 0px" }}
          >
            <h2>Premium</h2>
            <img
                className="imgfluid"
                src={ active === "Premium" ?require("../../Assets/Pricing/diamond.svg"):require("../../Assets/Pricing/diamondblue.svg")}
                alt="logo"
              />
            <h1>{PlanType === "Yearly" ? "$2000" : "$200"}</h1>
            <span className="validate-fields">
              {PlanType === "Yearly" ? (
                <>
                  <span
                    style={{
                      fontWeight: 600,
                      color: active === "Premium" ? "white" : "black",
                    }}
                  >
                    $80 &nbsp;
                  </span>
                  for every &nbsp;
                  <span
                    style={{
                      fontWeight: 600,
                      color: active === "Premium" ? "white" : "black",
                    }}
                  >
                    12 &nbsp;
                  </span>
                  months
                </>
              ) : (
                <span>For Month</span>
              )}
            </span>
            <div className="pricing-button">
            <Button  onClick={() => setmodalVisible(true)}>  View details</Button>
              {/* <span className="view" onClick={() => setmodalVisible(true)}>
                View details
              </span> */}
            </div>
          </div>
        </div>
      </div>
      <Modal
        className="Pricing-Modal"
        centered
        // maskStyle={{backgroundColor:'#2d80b5'}}
        footer={null}
        visible={modalVisible}
        closable={false}
        onCancel={() => setmodalVisible(false)}
      >
        {active === "Standard" && (
          <div className="Pricing-report">
            <Row>
              <Col sm={19} xs={24}>
                <div className="Pricing-report-content-one">
                  <h1>Standard User Included :</h1>
                  <h2>
                    {contenticon}Max users are 25 to 100 (only at one location)
                  </h2>
                  <h2>
                    {contenticon}Customise 4 of the base CuyFy features of your
                    choice
                  </h2>
                  <h2>
                    {contenticon}No external links for reward redeptions etc..
                  </h2>
                  <h2>{contenticon}Email support</h2>
                </div>
              </Col>
              <Col sm={5} xs={24}>
                <div className="Pricing-report-show">
                  <h2>
                  Standard{" "}
                    <img
                      className="imgfluid"
                      src={require("../../Assets/Pricing/diamond.svg")}
                      alt="logo"
                    />
                  </h2>
                  <h1>{PlanType === "Yearly" ? "$1500" : "$150"}</h1>
                  {PlanType === "Yearly" ? (
                    <>
                      <span style={{position:"unset"}}>$80 &nbsp;</span>
                      for every &nbsp;
                      <span
                        style={{
                          fontWeight: 600,
                          position:"unset"
                        }}
                      >
                        12 &nbsp;
                      </span>
                      months
                    </>
                  ) : (
                    <span>For Month</span>
                  )}
                  <br />
                  <Button>Get started</Button>
                </div>
              </Col>
            </Row>
          </div>
        )}
        {active === "Executive" && (
          <div className="Pricing-report">
            <Row>
              <Col sm={19} xs={24}>
                <div className="Pricing-report-content-one">
                  <h1>Executive User Included :</h1>
                  <h2>
                    {contenticon}Max users are 25 to 100 (only at one location)
                  </h2>
                  <h2>
                    {contenticon}Customise 4 of the base CuyFy features of your
                    choice
                  </h2>
                  <h2>
                    {contenticon}No external links for reward redeptions etc..
                  </h2>
                  <h2>{contenticon}Email support</h2>
                </div>
              </Col>
              <Col sm={5} xs={24}>
                <div className="Pricing-report-show">
                  <h2>
                    Executive{" "}
                    <img
                      className="imgfluid"
                      src={require("../../Assets/Pricing/diamond.svg")}
                      alt="logo"
                    />
                  </h2>
                  <h1>{PlanType === "Yearly" ? "$1000" : "$100"}</h1>
                  {PlanType === "Yearly" ? (
                    <>
                      <span style={{position:"unset"}}>$80 &nbsp;</span>
                      for every &nbsp;
                      <span
                        style={{
                          fontWeight: 600,
                          position:"unset"
                        }}
                      >
                        12 &nbsp;
                      </span>
                      months
                    </>
                  ) : (
                    <span>For Month</span>
                  )}
                  <br />
                  
                  <Button>Get started</Button>
                </div>
              </Col>
            </Row>
          </div>
        )}
        {active === "Premium" && (
          <div className="Pricing-Premium">
            <h1>Premium User Included :</h1>
            <Row>
              <Col sm={19} xs={24}>
                <div className="Pricing-report-content-one">
                  <h2>
                    {contenticon}Max users are 25 to 100 (only at one location)
                  </h2>
                  <h2>
                    {contenticon}Customise 4 of the base CuyFy features of your
                    choice
                  </h2>
                  <h2>
                    {contenticon}No external links for reward redeptions etc..
                  </h2>
                  <h2>{contenticon}Email support</h2>
                </div>
              </Col>
              <Col sm={5} xs={24}>
                <div className="Pricing-report-show">
                  <h2>
                  Premium{" "}
                    <img
                      className="imgfluid"
                      src={require("../../Assets/Pricing/diamond.svg")}
                      alt="logo"
                    />
                  </h2>
                  <h1>{PlanType === "Yearly" ? "$2000" : "$200"}</h1>
                  {PlanType === "Yearly" ? (
                    <>
                      <span style={{position:"unset"}}>$80 &nbsp;</span>
                      for every &nbsp;
                      <span
                        style={{
                          fontWeight: 600,
                          position:"unset"
                        }}
                      >
                        12 &nbsp;
                      </span>
                      months
                    </>
                  ) : (
                    <span>For Month</span>
                  )}
                  <br />
                  <Button>Get started</Button>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PricingPage;
