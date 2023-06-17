import './Header.css'
import BoxContainer from '../BoxContainer/BoxContainer'

export default function Header({children}){
    return(
        <header className="header">
            <BoxContainer className='flex-row align-center'>
                {children}
            </BoxContainer>
        </header>
    )
}