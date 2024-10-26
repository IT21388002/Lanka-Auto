
// import './App.css';
// import Region from './components/Region/Region';
// import Towing from './components/Towing/Towing';
// import Faq from './components/Faq/Faq';
// import Testimonials from './components/Testimonials/Testimonials';
// import Team from './components/Team/Team';
// import Service from './components/Service/Service';
// import Feature from './components/Feature/Feature';
// import Main from './components/Main/Main';
// import Header from './components/Header/Header';
// import Contact from './components/Contact Us/Contact';
// import Find from './components/Find/Find';
// import OurServices from './components/OurServices/OurServices';
// import NavBar from './components/NavBar/NavBar';
// import Footer from './components/Footer/Footer';
// import OurServiceImages from './components/OurServiceImages/OurServiceImages';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import EmailSection from './components/Email/EmailSection';

// function App() {
//   return (
//     <Router>
//       <NavBar />
//       <Header />
//       <Feature />
//       <Main />
//       <Team />  
//       <Service />
//       <Testimonials />
//       <Faq />
//       <Towing />
//       <Region />
//       <Footer />
//     </Router>
//   );
// }

// export default App;


import './App.css';
import Region from './components/Region/Region';
import Towing from './components/Towing/Towing';
import Faq from './components/Faq/Faq';
import Testimonials from './components/Testimonials/Testimonials';
import Team from './components/Team/Team';
import Service from './components/Service/Service';
import Feature from './components/Feature/Feature';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Contact from './components/Contact Us/Contact';
import Find from './components/Find/Find';
import OurServices from './components/OurServices/OurServices';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import OurServiceImages from './components/OurServiceImages/OurServiceImages';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmailSection from './components/Email/EmailSection';

function App() {
  return (
    <Router>
      {/* NavBar will be rendered on all pages */}
      <NavBar />

      <Routes>
        {/* Home Page Route */}
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <Feature /> {/* Feature section */}
              <Main />   {/* Main section */}
              <Team />
              <Service />
              <Testimonials />
              <Faq />
              <Towing />
              <Region />
            </>
          } 
        />

        {/* OurServices Page Route */}
        <Route 
          path="/services"
          element={
            <>
              <OurServices/>
              <Service />
              <OurServiceImages />
              <Towing />
            </>
        } 
        />

        {/* Contact Page Route */}
        <Route 
          path="/contact"
          element={
          <>
            <Contact />
            <EmailSection/>
            <Find />
            <Faq />
            <Towing />

          </>
        } 
        />

        {/* Add other routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;