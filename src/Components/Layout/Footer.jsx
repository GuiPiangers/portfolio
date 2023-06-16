import './Footer.css'
import BoxContainer from '../Templates/BoxContainer/BoxContainer'

export default function Footer(){
    return(
        <footer className="footer">
            <h2 className='footer__logo'>Home</h2>
            <BoxContainer className='flex-row'>
                <div className='footer__container'>
                    <h2 className='footer__title'>Projetos</h2>
                    <div className='footer__item'>
                        <p>Sistema de Barbearia</p>
                    </div>
                    <div className='footer__item'>
                        <p>ToDo List</p>
                    </div>
                </div>
                <div className='footer__container'>
                    <h2 className='footer__title'>Contato</h2>
                    <div className='footer__item'>
                        <p>(51) 9 8035-1927</p>
                    </div>
                    <div className='footer__item'>
                        <p>eduardomartinspiangers@gmail.com</p>
                    </div>
                    <div className='footer__item'>
                        <p>gui-piangers</p>
                    </div>
                </div>
            </BoxContainer>
        </footer>
    )
}