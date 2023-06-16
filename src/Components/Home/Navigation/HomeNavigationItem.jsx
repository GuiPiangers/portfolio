export default function HomeNavigationItem({url, name}){

    function scrollToIdOnClick(event){
        event.preventDefault()
        const id = event.currentTarget.getAttribute('href')
        const section = document.querySelector(id)
        const sectionPosition = section.offsetTop 

        window.scroll({
            top: sectionPosition - 42,
            behavior: 'smooth', 
        })
    }

    return(
        <li className='home-navigation__item'>
            <a 
                className="home-navigation__link" 
                href={url}
                onClick={scrollToIdOnClick}
            >
                {name}
            </a>
        </li>
    )
}