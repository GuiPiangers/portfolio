export default function HomeNavigationItem({url, name}){
    return(
        <li className='home-navigation__item'>
            <a className="home-navigation__link" href={url}>{name}</a>
        </li>
    )
}