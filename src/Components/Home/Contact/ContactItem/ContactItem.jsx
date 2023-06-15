import './ContactItem.css'

export default function ContactItem({contact, icon}){
    return(
        <div className='contact-item'>
            <span>{icon}</span>
            <span className='contact-item__contact'>{contact}</span>
        </div>
    )
}