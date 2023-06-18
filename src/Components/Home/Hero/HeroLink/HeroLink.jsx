import './HeroLink.css'

export default function HeroLink({url, icon, name}){
    return(
        <a href={url} className="hero-link" target='_blank'>
            {icon}
            <span className="hero-link__name">{name}</span>
        </a>
    )
}