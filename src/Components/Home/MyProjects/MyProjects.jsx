import './MyProjects.css'

import { useTranslation } from "react-i18next"

import BoxContainer from '../../Templates/BoxContainer/BoxContainer'
import Title from '../../Usual/Title/Title'
import ProjectItem from './ProjectItem/ProjectItem'
import ProjectImg1 from '../../../assets/img/barberProject.png'
import quiroImage from '../../../assets/img/image.png'
import ProjectDescription from './ProjectItem/ProjectDescription'

export default function MyProjects(){

    const { t } = useTranslation()

    return(
        <section className="my-projects" id='projects'>
            <BoxContainer className='margin-elements'>
                <Title className='title--align-center'>{t("projectsTitle")}</Title>
                <div className='projects-container'>
                    <ProjectItem 
                        img={'https://raw.githubusercontent.com/GuiPiangers/quiro-malu-front-end/refs/heads/master/preview.png'}
                        title={t("quiroTitle")}
                        projectLink='https://quiro-malu-front-end.vercel.app'
                        repositoryLink='https://github.com/GuiPiangers/quiro-malu-backend'
                        technologies={['typescript','nextjs', 'tailwind', 'aws', 'docker', 'nodejs', 'express', 'mysql', 'nginx' ]}
                    >
                        <ProjectDescription description={t("quiroDescription1")}/>
                        <ProjectDescription description={t("quiroDescription2")}/>
                        <ProjectDescription description={t("quiroDescription3")}/>
                    </ProjectItem>
                </div>

            </BoxContainer>
        </section>
    )
}
