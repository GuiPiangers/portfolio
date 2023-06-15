import './MyProjects.css'
import BoxContainer from '../../Templates/BoxContainer/BoxContainer'
import Title from '../../Usual/Title/Title'
import ProjectItem from './ProjectItem/ProjectItem'
import ProjectImg1 from '../../../assets/img/barberProject-img.png'

export default function MyProjects(){
    return(
        <section className="my-projects">
            <BoxContainer>
                <Title>Meus projetos</Title>
                <div className='projects-container'>
                    <ProjectItem 
                        img={ProjectImg1}
                        title='Barbearia - Sistema de agendamento'
                        description='Projeto com Landing Page e sistema de agendamento para barbearia. Criado com React JS e utilizando firebase como ...'
                        technologies={['react', 'css']}
                    />
                    <ProjectItem 
                        img={ProjectImg1}
                        title='Barbearia - Sistema de agendamento'
                        description='Projeto com Landing Page e sistema de agendamento para barbearia. Criado com React JS e utilizando firebase como ...'
                        technologies={['javascript', 'css', 'html']}
                    />
                </div>

            </BoxContainer>
        </section>
    )
}