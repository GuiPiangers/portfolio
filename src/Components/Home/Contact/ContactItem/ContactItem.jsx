import './ContactItem.css'

export default function ContactItem({contact, icon, url}){
    return(
        <a className='contact-item' href={url}  target='_blank'>
            <span>{icon}</span>
            <span className='contact-item__contact'>{contact}</span>
        </a>
    )
}