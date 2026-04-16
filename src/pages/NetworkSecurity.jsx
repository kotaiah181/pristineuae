
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";

import Overview from "../components/Overview";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import Navbarbelow from "../components/Navbarbelow";


const NetworkSecurity = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Navbarbelow />
      

      <Overview/>
      <CTA/>
      <Footer />
    </>
  );
};

export default NetworkSecurity;