import "./About.css"
import BoxContainer from "../../Templates/BoxContainer/BoxContainer";
import guiImg2 from '../../../assets/img/gui-2.png'
import Title from "../../Usual/Title/Title";
import { useTranslation } from 'react-i18next'

export default function About(){

    const {t} = useTranslation()

    return(
        <section className="about" id="about">
            <BoxContainer className={'flex-row media-column align-center margin-elements'}>
                <div className="about__texts">
                    <Title>{t("aboutTitle")}</Title>
                    <p>{t("textAboutP1.1")} <strong>C#</strong> {t("textAboutP1.2")} <strong>SQL</strong>
                        {t("textAboutP1.3")}
                    </p>
                    
                    <p>
                        {t("textAboutP2.1")} <strong>JavaScript</strong>. {t("textAboutP2.2")}
                    </p>
                </div>
                <div className="about__img-container">
                    <img className="about__img" src={guiImg2} alt="Gui" />
                </div>
            </BoxContainer>
        </section>
    )
}