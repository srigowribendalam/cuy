import { Button } from "antd";
import React, { useState, useEffect } from "react";
import { Modal, Input,Row, Col } from "antd";

import Header from "../Header/Header";

const { TextArea } = Input;
const HomeBanner = () => {



  const [activedot, setactivedot] = useState(0);

  const dotVlaue = ["Employee engagement measure is an ongoing process with the data collected other than formal surveys.", "Stand with organisations in preparing to the next generation workforce of Gen Z and Gen Alpha.", "Remunarate, Reward, Recognise, Rejuvenate and Rejoice the journey of workforce in the organisation and across industry."];

  const activePatient = (dotIndex, i) => {
    console.log("dotIndex", dotIndex, i);
    setactivedot(dotIndex);
  };

  useEffect(() => {
    setTimeout(() => {
      gotoNext();
    }, 10000);
  });

  const Onclick_Doctor_Modal = () => {
   
  };


  // next module animation
  const gotoNext = () => {

    if(activedot !== 2){
    setactivedot(activedot+1);
    }
    else{
      setactivedot(0);
    }
  };
console.log(  activedot)
  return (
    <div className="Home-Banner1">
  
      <div className="Home-Banner-one">
      <Header/>
   
        <Row>
          <Col md={14}  xs={24} >
            <div className="Home-Banner-one-content">
              <div className="Home-Banner-one-content-heading">
              <h1>We are Creative </h1>
              {/* <h1>
              Service Agency
              </h1> */}
              </div>
              <h5>{dotVlaue[activedot]}</h5>
          
              <div className="Home-Banner-button">
                <Button
                  className="Home-Banner-join-us"
                  onClick={Onclick_Doctor_Modal}
                >
                Join Us
                </Button>
               
              </div>
            </div>
          </Col>
          <Col md={10}  xs={24}>
            <div className="Home-Banner-one-img">
              {(activedot === 0 && (
                <img
                className="Service-img-one"
                  src={require("../../../../Assets/Home/art1.svg")}
                  alt="banner"
                />
              )) || ((activedot === 1 && (<img
                className="Service-img-two"
                  src={require("../../../../Assets/Home/Home-banner-two.png")}
                  alt="banner"
                />))|| (activedot === 2 && (<img
                  className="Service-img-three"
                    src={require("../../../../Assets/Home/art2.svg")}
                    alt="banner"
                  />))
              )}
            
            </div>
          </Col>
       
        </Row>
        <div className="dot-setup">
          {dotVlaue.map((i, index) => (
            <div
              className={index === activedot ? "active-dot" : "disable-dot"}
              onClick={() => activePatient(index, i)}
            ></div>
          ))}
        </div>
        <div>
        <img
                className="next-img"
                onClick={gotoNext}
                src={require("../../../../Assets/Home/play-button.png")}
                alt="Logo"
              />
              </div>
      </div>
     
    </div>
  );
};

export default HomeBanner;
