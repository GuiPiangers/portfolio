import './Footer.css'
import BoxContainer from '../Templates/BoxContainer/BoxContainer'
import Logo from '../Usual/Logo/Logo'
import FooterItem from './FooterItem'
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export default function Footer(){
    return(
        <footer className="footer">
            <h2 className='footer__logo'>Home</h2>
            <Logo themeColor='white'/>
            <BoxContainer className='flex-row media-column margin-elements'>
                <div className='footer__container'>
                    <h2 className='footer__title'>Projetos</h2>
                    <FooterItem url='https://github.com/GuiPiangers/barberProject/tree/main'>
                        BarberStyle
                    </FooterItem>
                    <FooterItem url='https://github.com/GuiPiangers/bitcent/tree/main'>
                        BitCent
                    </FooterItem>
                </div>
                <div className='footer__container'>
                    <h2 className='footer__title'>Contato</h2>

                    <FooterItem url='https://api.whatsapp.com/send/?phone=5551980351927'>
                        <FaWhatsapp size={16}/> (51) 9 8035-1927
                    </FooterItem>

                    <FooterItem url='mailto:piangersguilherme@gmail.com'>
                        <SiGmail size={15}/> piangersguilherme@gmail.com
                    </FooterItem>

                    <FooterItem url='https://www.linkedin.com/in/guilherme-piangers-431a1a27b/'>
                        <FaLinkedin size={15}/> guilherme-piangers
                    </FooterItem>
                </div>
            </BoxContainer>
        </footer>
    )
}