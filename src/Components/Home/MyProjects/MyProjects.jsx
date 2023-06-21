import './MyProjects.css'

import { useTranslation } from "react-i18next"

import BoxContainer from '../../Templates/BoxContainer/BoxContainer'
import Title from '../../Usual/Title/Title'
import ProjectItem from './ProjectItem/ProjectItem'
import ProjectImg1 from '../../../assets/img/barberProject.png'
import bitcentImg from '../../../assets/img/bitcent.png'

export default function MyProjects(){

    const { t } = useTranslation()

    return(
        <section className="my-projects" id='projects'>
            <BoxContainer className='margin-elements'>
                <Title className='title--align-center'>{t("projectsTitle")}</Title>
                <div className='projects-container'>
                    <ProjectItem 
                        img={ProjectImg1}
                        title='BarberStyle'
                        projectLink='https://barber-project-six.vercel.app'
                        repositoryLink='https://github.com/GuiPiangers/barberProject/tree/main'
                        description={t("barberStyleDescription")}
                        technologies={['react', 'css']}
                    />
                    <ProjectItem 
                        className='project-item--reverse'
                        img={bitcentImg}
                        title='BitCent'
                        repositoryLink='https://github.com/GuiPiangers/bitcent/tree/main'
                        projectLink='https://bitcent-eight.vercel.app'
                        description={t("bitCentDescription")}
                        technologies={['nextjs', 'typescript', 'tailwind']}
                    />
                </div>

            </BoxContainer>
        </section>
    )
}