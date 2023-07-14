import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import FirmProfile from './Components/Firm_Profile';
import MiddleEastPractice from './Components/MiddleEastPractice';
import PracticeFocus from './Components/PracticeFocus';
import Team from './Components/Team';
import Contact from './Components/Contact';
import WorkwithUs from './Components/WorkwithUs';
import SmithaNair from './Components/SmithaNair';
import JaySankar from './Components/JaySankar';
import CorporateLawPractice from './Components/Corporate_law';
import EntertainmentLawMedia from './Components/EntertainmentLawMedia';
import IncomeTax from './Components/IncomeTax';
import RealEstateConstruction from './Components/Real_Estate_Constrction';
import IntellectualProperty from './Components/Intellectual_Property';
import TelecomIT from './Components/Telecom_IT';
import DisputeResolution from './Components/Dispute_resolution';
import EmploymentLabourLaws from './Components/Employment_Labour_Laws';
import PharmaceuticalHealthcare from './Components/Pharmaceutical_Healthcare';
import FamilyCourtServices from './Components/FamilyCourtServices';
import Litigation from './Components/litigation';
// import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
    <Router>
      
      

      <Switch>
        <Route path="/" Components={Home} exact><Home /></Route>
        <Route path="/firm_profile" Components={FirmProfile} exact><FirmProfile /></Route>
        <Route path="/contact" Components={Contact} exact><Contact /></Route>
        <Route path="/middle_east_practice" Components={MiddleEastPractice} exact><MiddleEastPractice /></Route>
        <Route path="/practice_focus" Components={PracticeFocus} exact><PracticeFocus />
          

        </Route>
        <Route path="/work_with_us" Components={WorkwithUs} exact><WorkwithUs /></Route>
        <Route path="/team" Components={Team} exact><Team /></Route>
        <Route path="" >
          <Route path="/smitha_nair" Components={SmithaNair} exact><SmithaNair /></Route>
          <Route path="/jay_sankar" Components={JaySankar} exact><JaySankar /></Route>
          <Route path="/corporate_commericial_laws" Components={CorporateLawPractice} exact><CorporateLawPractice /></Route>
          <Route path="/entertainment_law_media" Components={EntertainmentLawMedia} exact><EntertainmentLawMedia /></Route>
          <Route path="/income_tax" Components={IncomeTax} exact><IncomeTax /></Route>
          <Route path="/real_estate_education" Components={RealEstateConstruction} exact><RealEstateConstruction /></Route>
          <Route path="/intellectual_property" Components={IntellectualProperty} exact><IntellectualProperty /></Route>
          <Route path="/telecom&IT" Components={TelecomIT} exact><TelecomIT /></Route>
          <Route path="/dispute_resolution" Components={DisputeResolution} exact><DisputeResolution /></Route>
          <Route path="/employment_labour_law" Components={EmploymentLabourLaws} exact><EmploymentLabourLaws /></Route>
          <Route path="/pharmaceutical_healthcare" Components={PharmaceuticalHealthcare} exact><PharmaceuticalHealthcare /></Route>
          <Route path="/litigation" Components={Litigation} exact><Litigation /></Route>
          <Route path="/family_court_services" Components={FamilyCourtServices} exact><FamilyCourtServices /></Route>
          
        </Route>
      
      </Switch>
    
      
    </Router>
  {/* <Footer /> */}
    </div>

  )

}

export default App
