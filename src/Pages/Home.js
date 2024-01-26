import Nav from '../components/Header'
import Hero from '../components/Hero'
import Blog from '../components/Blog'
import Team from '../components/Team'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Mission from '../components/Mission'
import CountingNumbers from '../components/TrustedCompany'

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Blog />
      <Team />
      <Mission />
      <Features />
      <CountingNumbers />
      <Footer />
    </div>
  );
}
