import './Title.css'

export default function Title({children, className, ...props}){
    return(
        <h2 className={`title ${className}`} {...props}>{children}</h2>
    )
}