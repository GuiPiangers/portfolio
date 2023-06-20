import './ChangeLanguage.css'
import flagPtBr from '../../../assets/img/flags/flag-ptbr.svg'
import flagEn from '../../../assets/img/flags/flag-en.svg'
import {useTranslation} from 'react-i18next'

const languageOptions = [
    {
        name: "Português",
        value: "ptBR",
        flag: flagPtBr
    },
    {
        name: "English",
        value: "en",
        flag: flagEn
    },
]

export default function ChangeLanguage(){
    const { t, i18n } = useTranslation()
    return(
        <div className='switch-language'>
            {languageOptions.map(languageOption => (
                <button className={`language-option ${i18n.language === languageOption.value ? "language-option--active" : ""}`}
                    onClick={()=> {
                        i18n.changeLanguage(languageOption.value)
                    }}
                    key={languageOption.value}                
                >
                    <img className='switch-language__img' src={languageOption.flag} alt={languageOption.name} />
                    <span>{languageOption.name}</span>
                </button>
            ))}
        </div>
    )
}