export default function Icon({icon, name}){
    return(
        <div className="technology-icon">
            {icon}
            <span className="technology-icon__name">{name}</span>
        </div>
    )
}