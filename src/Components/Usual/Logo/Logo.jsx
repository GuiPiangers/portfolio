import './Logo.css'
import logo from '../../../assets/img/logo.svg'
import logoWhite from '../../../assets/img/logo-white.svg'

export default function Logo({size = 24, themeColor}){
    return(
        <a href="/" className='logo' style={{color: `${themeColor === 'white' ? 'white' : 'black'}`}}>
            <img 
                src={themeColor === 'white' ? logoWhite : logo} 
                alt="logo"
                style={{height: size, width: size,}}
            />
            Gui Piangers
        </a>
    )
}