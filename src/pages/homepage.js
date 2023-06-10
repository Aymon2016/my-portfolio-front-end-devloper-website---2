
import Header from '../component/header/header'
import HeroSection from '../component/heroHeader/heroSection';
import About from '../component/about/about'
import MainProject from '../component/project/mainproject';
import Contact from '../component/contact/contact';
import Footer from '../component/footer/footer';
const Homepage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <About />
            <MainProject />
            <Contact />
            <Footer />
        </>
    )
}

export default Homepage