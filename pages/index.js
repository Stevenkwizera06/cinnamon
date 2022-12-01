import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AgileTeam from "../components/sections/Agile";
import College from "../components/sections/college";
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
    <Services />
    <AgileTeam />
    <Testimonies />
    <WhoWeAre />
    <College />
    <Growing />
    <WorkTogether />
    <Footer />
    
   
    </>
  )
}
