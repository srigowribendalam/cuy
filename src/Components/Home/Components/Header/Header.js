import React,{useState}  from "react";
import { Button,Drawer,Icon} from "antd";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [visible, setvisible] = useState(false);
  const showDrawer = () => {
    setvisible(true);
  };
  const onClose = () => {
    setvisible(false);
  };
  return (
    <>
      <div className="nav">
      <div className="nav-header">
          <img src={require("../../../../Assets/Home/logomain.svg")} alt="Logo" className="brand" />
        </div>
       
        <div className="nav-links">
          <NavLink className="navbar-item" exact={true}  activeClassName="is-active" to="/">Home</NavLink>
          <NavLink className="navbar-item" activeClassName="is-active" to="/Engaged-Employee">Engaged Employee</NavLink>
          <NavLink className="navbar-item" activeClassName="is-active"  to="/Engaging-Employer">Engaging Employer</NavLink>
          <NavLink className="navbar-item" activeClassName="is-active"  to="/About">About Us</NavLink>
          <NavLink className="navbar-item" activeClassName="is-active"  to="/PricingPage">Pricing</NavLink>
          <NavLink className="navbar-item" activeClassName="is-active" to="/ContactPage">Contact Us</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
        
          <Button className="Header-Login">
            Login
          </Button>
         
        </div>
      </div>
      <div className="Headerbody-mobile" >
       
        <div className="Headerbody-icon" >
        <img src={require("../../../../Assets/Home/hamburger.png")} onClick={showDrawer} alt="Logo" className="brand" />              
        </div>
      <Drawer
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
          className="Header-Drawer"
        // width={320}
        >
          <div className="Header-Drawer-content">
            <div className="Drawer-close" onClick={onClose}>
              <Icon type="close" />
            </div>
            <div className="nav-header">
          <img src={require("../../../../Assets/Home/logomain.png")} alt="Logo" className="brand" />
        </div>
            <div className="Header-Drawer-content-info-setup">
              <div className="Header-Drawer-content-info" >
         
              <NavLink className="navbar-item" exact={true}  activeClassName="is-active" to="/"><span>Home</span></NavLink>
              </div>
              <div className="Header-Drawer-content-info">
              <NavLink className="navbar-item" activeClassName="is-active" to="/Engaged-Employee"><span>Engaged Employee</span></NavLink>
             
              </div>
              <div className="Header-Drawer-content-info">
              <NavLink className="navbar-item" activeClassName="is-active"  to="/Engaging-Employer"><span>Engaging Employer</span></NavLink>
              </div>
              <div className="Header-Drawer-content-info">
              <NavLink className="navbar-item" activeClassName="is-active"  to="/About"><span>About Us</span></NavLink>
              </div>
              <div className="Header-Drawer-content-info" >
                
              <NavLink className="navbar-item" activeClassName="is-active"  to="/PricingPage"><span>Pricing</span></NavLink>
              </div>
              <div className="Header-Drawer-content-info" >
               
              <NavLink className="navbar-item" activeClassName="is-active" to="/ContactPage"><span>Contact Us</span></NavLink>
              </div>
            </div>
         <div className="Header-Drawer-buttons">
          <Button>Login</Button>
          <Button>join now</Button>
        </div>
          </div>
        </Drawer>
        </div>
    </>
  );
};

export default Header;
