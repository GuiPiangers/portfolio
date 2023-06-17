import './Contact.css'
import BoxContainer from '../../Templates/BoxContainer/BoxContainer'
import Title from '../../Usual/Title/Title'
import ContactItem from './ContactItem/ContactItem'
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export default function Contact(){
    return(
        <section className='contact' id='contact'>
            <BoxContainer className={'flex-column-center margin-elements'}>
                <Title>Contato</Title>
                <div className="contact-container">
                    <ContactItem contact='(51) 9 8035-1927' icon={<FaWhatsapp size={24}/>}/>
                    <ContactItem contact='eduardomartinspiangers@gmail.com' icon={<SiGmail size={22}/>}/>
                    <ContactItem contact='gui-piangers' icon={<FaLinkedin size={22}/>}/>
                </div>
            </BoxContainer>
        </section>
    )
}