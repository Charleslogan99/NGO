import Nav from '../components/Header'
import Hero from '../components/Hero'
import Blog from '../components/Blog'
import Team from '../components/Team'
import Features from '../components/Features'
import TrustedCompany from '../components/TrustedCompany'
import Footer from '../components/Footer'
import Mission from '../components/Mission'

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Blog />
      <Team />
      <Mission />
      <Features />
      <TrustedCompany />
      <Footer />
    </div>
  );
}
