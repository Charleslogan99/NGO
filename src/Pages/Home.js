import Nav from '../components/Header'
import Hero from '../components/Hero'
import Team from '../components/Team'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Mission from '../components/Mission'
import MajorCauses from '../components/MajorCauses'
// import CountingNumbers from '../components/TrustedCompany'
import Translator from '../components/Translator'
import Map from '../components/Map'

export default function Home() {
  return (
    <div>
      {/* <Translator /> */}
      <Nav />
      <Hero />
      <MajorCauses />
    
      <Mission />
      <Features />
      <Team />
      {/* <CountingNumbers /> */}
      <Map />
      <Footer />
    </div>
  );
}
