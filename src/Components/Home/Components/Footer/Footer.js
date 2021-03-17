import { Divider, Row, Col, List,Icon } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

class Footer extends Component {
  render() {
    const columnone = [
      "Our Services",
      "Knowledge",
      "Career",
      "Benefits",
      "Events",
    ];
    const columnTwo = [
      "Customer Support",
      "FAQs",
      "Support",
      "About us",
      "Privacy Policy",
      "Terms & Conditions",
    
    ];
    const columnThree = [
      "Connect",
      "30 New Jersey, New Jersey, New Jersey New Jersey USA",
    ];
    const columnaddress = [
      {
        name: "Tel",
        number: "0123456789",
      },

      {
        name: "Email",
        number: " support@cuyfy.com",
      },
    ];
    console.log(
      "columnThree",
      columnThree.map((item, i) => item)
    );

    return (
      <React.Fragment>
        <div className="footer">
          <Row>
            <Col md={7} sm={24}>
              <div className="footer-Logo">
                <img
                  src={require("../../../../Assets/Home/logofooter.svg")}
                  alt="Logo"
                />
              </div>
            </Col>
            <Col md={4} sm={24}>
              <div className="footer-columnone">
                {columnone.map((item, i) =>
                  i === 0 ? <h2 key={i}>{item}</h2> : <h3>{item}</h3>
                )}
              </div>
            </Col>
            <Col md={4} sm={24}>
              <div className="footer-columnTwo">
                {columnTwo.map((item, i) =>
                  i === 0 ? <h2 key={i}>{item}</h2> :<Link to={(item==="Privacy Policy"&&"/PrivacyPolicy")||(item==="Terms & Conditions"&&"/Terms")||(item==="FAQs"&&"/Faqs")||(item==="About us"&&"/About")}> <h3>{item}</h3></Link>
                )}
              </div>
              <div className="footer-columnTwo-2">
                <List
                  grid={{ gutter: 16, column: 2 }}
                  dataSource={columnTwo}
                  renderItem={(item, i) =>
                    i === 0 ? (
                      <h2 style={{cursor:"pointer"}}>{item}</h2>
                    ) : (
                      <List.Item style={{cursor:"pointer"}}>
                        <h3>{item}</h3>
                      </List.Item>
                    )
                  }
                />
              </div>
            </Col>
            <Col md={5} sm={24}>
              <div className="footer-columnThree">
                {columnThree.map((item, i) =>
                  i === 0 ? <h2 key={i}>{item}</h2> : <h3>{item}</h3>
                )}

                {columnaddress.map((item, i) => (
                  <h3 key={i} style={{ fontWeight: "600" }}>
                    {item.name}&nbsp;{" "}
                    <span style={{ fontWeight: "400" }}>{item.number}</span>
                  </h3>
                ))}
              </div>
            </Col>

            <Col md={2}>
              <div className="social-media">
              <Icon type="linkedin" />
              <Icon type="instagram" />
              <Icon type="facebook" />
              <Icon type="twitter" />
              </div>
            </Col>
          </Row>

          <hr />

          <div className="footer-copyright">
            <h5>© CuyFy | All rights reserved 2021</h5>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
