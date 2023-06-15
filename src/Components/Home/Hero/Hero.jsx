import './Hero.css'
import BoxContainer from '../../Templates/BoxContainer/BoxContainer'
import guiImg from '../../../assets/img/gui-1.png'
import Circle from './Circle/Circle'
import { FaReact } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'

export default function Hero(){
    return(
        <section className='hero'>
            <BoxContainer className='flex-row'>
                <div className="hero__texts">
                    <p>Olá, eu sou <strong>Guilherme</strong></p>
                    <h1 className='hero__title'>
                        Desenvolvedor <br/>
                        Front-End
                    </h1>
                </div>
                <div className="hero__img-container">
                    <svg className='mask' width="409" height="526" viewBox="0 0 409 526" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <clipPath id='svg-mask'>
                            <rect width="409" height="337" fill="#DDDDDD"/>
                            <circle cx="204.5" cy="321.5" r="204.5" fill="#DDDDDD"/>
                        </clipPath>
                    </svg>
                    <img className='hero__img' src={guiImg} alt="Guilherme" />
                    <div className='img__circle'></div>
                    
                    <Circle 
                        initialPosition={{x: '92px', y: '230px'}}
                        finalPosition={{x: '-44px', y: '68px'}}
                    >
                        <FaReact size={56} className='circle__icon' color='#fff'/>
                    </Circle>

                    <Circle 
                        initialPosition={{x: '64px', y: '260px'}}
                        finalPosition={{x: '-119px', y: '202px'}}
                    >
                        <DiJavascript1 size={56} className='circle__icon' color='#fff'/>
                    </Circle>

                    <strong className='img__name'>Guilherme Piangers</strong>
                </div>
            </BoxContainer>
        </section>
    )
}