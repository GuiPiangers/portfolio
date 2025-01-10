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
                    <p className="about__text">{(t("textAboutP1.1"))}</p>

                    <h3>{(t("technologies"))}</h3>
                    <div className="about__technologies">
                        <p><strong>{(t("technologiesLanguages"))}</strong> {(t("technologiesLanguagesContent"))}</p>
                        <p><strong>{(t("technologiesFrameworks"))}</strong> {(t("technologiesFrameworksContent"))}</p>
                        <p><strong>{(t("technologiesDataBase"))}</strong> {(t("technologiesDataBaseContent"))}</p>
                        <p><strong>{(t("technologiesTests"))}</strong> {(t("technologiesTestsContent"))}</p>
                        <p><strong>{(t("technologiesDevops"))}</strong> {(t("technologiesDevopsContent"))}</p>
                    </div>
                </div>

                <div className="about__img-container">
                    <img className="about__img" src={guiImg2} alt="Gui" />
                </div>
            </BoxContainer>
        </section>
    )
}