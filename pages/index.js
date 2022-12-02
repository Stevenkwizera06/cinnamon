import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AgileTeam from "../components/sections/Agile";
import College from "../components/sections/college";
import Offices from "../components/sections/office";
import Products from "../components/sections/product";
import Services from "../components/sections/services";
import Subheader from "../components/sections/subheader";
import Testimonies from "../components/sections/testimony";
import Growing from "../components/sections/Wearegrowing";
import WhoWeAre from "../components/sections/Whoweare";
import WorkTogether from "../components/sections/worktogether";

export default function Home() {
  return (
    <>
    <Navbar />
    <Subheader />
    <Products />
    <Services />
    <AgileTeam />
    <Testimonies />
    <WhoWeAre />
    <College />
    <Growing />
    <WorkTogether />
    <Offices />
    <Footer />
    
   
    </>
  )
}
