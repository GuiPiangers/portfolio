import './Contact.css'
import BoxContainer from '../../Templates/BoxContainer/BoxContainer'
import Title from '../../Usual/Title/Title'
import ContactItem from './ContactItem/ContactItem'
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { useTranslation } from "react-i18next"

export default function Contact(){

    const { t } = useTranslation()

    return(
        <section className='contact' id='contact'>
            <BoxContainer className={'flex-column-center margin-elements'}>
                <Title>{t("contactTitle")}</Title>
                <div className="contact-container">
                    <ContactItem 
                        contact='(51) 9 8035-1927' 
                        icon={<FaWhatsapp size={24}/>}
                        url='https://api.whatsapp.com/send/?phone=5551980351927'
                    />
                    <ContactItem 
                        contact='piangersguilherme@gmail.com' 
                        icon={<SiGmail size={22}/>}
                        url='mailto:piangersguilherme@gmail.com'
                    />
                    <ContactItem contact='gui-piangers' url='https://www.linkedin.com/in/guilherme-piangers-431a1a27b/' icon={<FaLinkedin size={22}/>}/>
                </div>
            </BoxContainer>
        </section>
    )
}