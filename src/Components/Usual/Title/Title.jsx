import './Title.css'

export default function Title({children, ...props}){
    return(
        <h2 className='title' {...props}>{children}</h2>
    )
}