import './Button.css'

export default function Button({ className, children, link, ...props}){
    return(
        link?.length > 0 ?(
            <a 
                className={`button ${className}`}
                {...props}
                href={link}
            >
                {children}
            </a>
        ) : (
            <button 
                {...props}
                className={`button ${className}`} 
            >
                {children}
            </button>
        )
    )
}