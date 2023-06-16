import './HomeNavigation.css'
import HomeNavigationItem from './HomeNavigationItem'

export default function HomeNavigation(){
    return(
        <nav className='home-navigation'>
            <ul className='home-navigation__list'>
                <HomeNavigationItem name="Home" url='#'/>
                <HomeNavigationItem name='Sobre mim' url='#'/>
                <HomeNavigationItem name='Projetos' url='#'/>
                <HomeNavigationItem name='Contato' url='#'/>
            </ul>
        </nav>
    )
}