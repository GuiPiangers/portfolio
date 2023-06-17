import './MyProjects.css'
import BoxContainer from '../../Templates/BoxContainer/BoxContainer'
import Title from '../../Usual/Title/Title'
import ProjectItem from './ProjectItem/ProjectItem'
import ProjectImg1 from '../../../assets/img/barberProject.png'

export default function MyProjects(){
    return(
        <section className="my-projects" id='projects'>
            <BoxContainer className='margin-elements'>
                <Title className='title--align-center'>Meus projetos</Title>
                <div className='projects-container'>
                    <ProjectItem 
                        img={ProjectImg1}
                        title='BarberStyle'
                        projectLink='https://barber-project-e7916.web.app'
                        repositoryLink='https://github.com/GuiPiangers/barberProject/tree/main'
                        description='Sistema de agendamento completo para barbearia. Com página de venda, sistema de login, sistema de agendamento e painel de controle. Criado com React JS, utilizando Firestore Database como banco de dados.'
                        technologies={['react', 'css']}
                    />
                    <ProjectItem 
                        className='project-item--reverse'
                        img={ProjectImg1}
                        title='ToDo List'
                        description='Projeto com Landing Page e sistema de agendamento para barbearia. Criado com React JS e utilizando firebase como ...'
                        technologies={['javascript', 'css', 'html']}
                    />
                </div>

            </BoxContainer>
        </section>
    )
}