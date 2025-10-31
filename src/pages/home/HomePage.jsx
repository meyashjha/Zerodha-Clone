import Header from "../../components/Header";
import OpenAccount from "../../components/OpenAccount";
import Hero from "./Hero";
import Stats from "./Stats";
import Pricing from './Pricing'
import Education from "./Education";
import Footer from "../../components/Footer";
import Awards from "./Awards";

                

const HomePage = () => {
  return (
    <div>

      <Hero/>
      <Awards/>
      <Stats/>
      <Pricing/>
      <Education/>
     <OpenAccount/>

    </div>
  )
}

export default HomePage;