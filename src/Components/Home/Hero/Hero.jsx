import './Hero.css'
import BoxContainer from '../../Templates/BoxContainer/BoxContainer'
import guiImg from '../../../assets/img/gui-1.png'
import Circle from './Circle/Circle'
import HeroLink from './HeroLink/HeroLink'
import useWindowSize from '../../../data/hooks/useWindowSize'

import { FaReact, FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'

export default function Hero(){

    const {windowWidth} = useWindowSize()

    const renderCircle = ()=>{
        if(windowWidth < 500) return

        if(windowWidth < 1080){
            return(
                <>
                    <Circle 
                        initialPosition={{x: '120px', y: '230px'}}
                        finalPosition={{x: '-32px', y: '44px'}}
                    >
                        <FaReact size={46} className='circle__icon' color='#fff'/>
                    </Circle>

                    <Circle 
                        initialPosition={{x: '64px', y: '260px'}}
                        finalPosition={{x: '-88px', y: '123px'}}
                    >
                        <DiJavascript1 size={46} className='circle__icon' color='#fff'/>
                    </Circle>
                </>
            )
        }
        return(
            <>
                <Circle 
                    initialPosition={{x: '120px', y: '230px'}}
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
            </>
            )
    }

    return(
        <section className='hero' id='home'>
            <BoxContainer className='margin-elements'>
                <div className='grid'>
                    <div className="hero__texts">
                        <p className='hero__text'>Olá, eu sou <strong>Guilherme</strong></p>
                        <h1 className='hero__title'>
                            Desenvolvedor <br/>
                            Front-End
                        </h1>
                    </div>
                        <div className='hero__links-container'>
                            <HeroLink name='Git-Hub' url='/' icon={<FaGithub size={32}/>}/>
                            <HeroLink name='Linked In' url='/' icon={<FaLinkedin size={32}/>}/>
                            <HeroLink name='Curriculo' url='/' icon={<FaFileAlt size={32}/>}/>
                        </div>

                    <div className="hero__img-container">
                        <svg className='mask' width="409" height="526" viewBox="0 0 409 526" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <clipPath id='svg-mask'>
                                <rect width="409" height="337" fill="#DDDDDD"/>
                                <circle cx="204.5" cy="321.5" r="204.5" fill="#DDDDDD"/>
                            </clipPath>
                        </svg>
                        <svg className='mask' width="301" height="388" viewBox="0 0 301 388" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <clipPath id='svg-mask-tablet'>
                                <rect x="0.742188" y="0.896393" width="300" height="247.412" fill="#B8B8B8"/>
                                <ellipse cx="150.742" cy="236.929" rx="150" ry="150.136" fill="#B8B8B8"/>
                            </clipPath>
                        </svg>
                        <svg className='mask' width="220" height="280" viewBox="0 0 220 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <clipPath id='svg-mask-mobile'>
                                <rect width="220" height="179.392" fill="#DDDDDD"/>
                                <ellipse cx="110" cy="171.141" rx="110" ry="108.859" fill="#DDDDDD"/>
                            </clipPath>
                        </svg>
                        <img className='hero__img' src={guiImg} alt="Guilherme" />
                        <div className='img__circle'></div>
                        {renderCircle()}
                        <strong className='img__name'>Guilherme Piangers</strong>
                    </div>
                </div>
            </BoxContainer>
        </section>
    )
}