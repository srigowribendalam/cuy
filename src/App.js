
import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.scss';
import EngagedEmployee from './Components/EngagingEmployer/EngagingEmployerPage';
import ContactPage from './Components/Contact/ContactPage';
import FAQS from './Components/Home/Components/Footer/Components/FAQS/FAQS';
import PrivacyPolicy from './Components/Home/Components/Footer/Components/PrivacyPolicy';
import Terms from './Components/Home/Components/Footer/Components/Terms/Terms';
import HomePage from './Components/Home/HomePage';
import EngagedEmployeePage from './Components/EngagedEmployee/EngagedEmployeePage';
import PricingPage from './Components/Pricing/PricingPage';
import EngagingEmployerPage from './Components/EngagingEmployer/EngagingEmployerPage';
import AboutPage from './Components/About/AboutPage';

function App() {
  return (
    <div >
     <Router>
     <Suspense fallback={<div>Loading...</div>}>
       <Route path='/' exact component={HomePage}/>
       <Route path='/ContactPage' exact component={ContactPage}/>
       <Route path='/PricingPage' exact component={PricingPage}/>
       <Route path='/Engaging-Employer' exact component={EngagingEmployerPage}/>
       <Route path='/Engaged-Employee' exact component={EngagedEmployeePage}/>
       <Route path='/About' exact component={AboutPage}/>
       <Route path='/PrivacyPolicy' exact component={PrivacyPolicy}/>
       <Route path='/Terms' exact component={Terms}/>
       <Route path='/Faqs' exact component={FAQS}/>
       </Suspense>
     </Router>
    </div>
  );
}

export default App;

