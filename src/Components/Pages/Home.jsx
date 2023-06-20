import About from "../Home/About/About";
import Contact from "../Home/Contact/Contact";
import Hero from "../Home/Hero/Hero";
import MyProjects from "../Home/MyProjects/MyProjects";
import Header from '../Templates/Header/Header'
import HomeNavigation from "../Home/Navigation/HomeNavigation";
import Logo from '../Usual/Logo/Logo'
import ChangeLanguage from "../Usual/ChangeLanguage/ChangeLanguage";

export default function Home(){

    return(
        <>
            <Header>
                <Logo size='32px' themeColor='white'/>
                <div className="flex-row align-center">
                    <HomeNavigation/>
                    <ChangeLanguage/>
                </div>
            </Header>
            <Hero/>
            <About/>
            <MyProjects/>
            <Contact/>
        </>
    )
}