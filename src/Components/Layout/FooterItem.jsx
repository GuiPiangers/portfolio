export default function FooterItem({children, url}){
    return(
        <a className='footer__item' href={url} target='_blank'>
            {children}
        </a>
    )
}