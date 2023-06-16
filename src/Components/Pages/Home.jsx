import About from "../Home/About/About";
import Contact from "../Home/Contact/Contact";
import Hero from "../Home/Hero/Hero";
import MyProjects from "../Home/MyProjects/MyProjects";
import HomeNavigation from "../Home/Navigation/HomeNavigation";
import Header from '../Templates/Header/Header'

export default function Home(){
    return(
        <>
            <Header>
                <HomeNavigation/>
            </Header>
            <Hero/>
            <About/>
            <MyProjects/>
            <Contact/>
        </>
    )
}