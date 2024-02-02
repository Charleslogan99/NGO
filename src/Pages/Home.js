// import Nav from '../components/Header'
import Hero from '../components/Hero'
import Team from '../components/Team'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Mission from '../components/Mission'
import MajorCauses from '../components/MajorCauses'
// import CountingNumbers from '../components/TrustedCompany'
import GoogleTranslator from '../components/Translator'

export default function Home() {
  return (
    <div>
      {/* <Nav /> */}
      <GoogleTranslator />
      <Hero />
      <MajorCauses />
      <Team />
      <Mission />
      <Features />
      {/* <CountingNumbers /> */}
      <Footer />
    </div>
  );
}
