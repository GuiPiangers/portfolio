import "./About.css"
import BoxContainer from "../../Templates/BoxContainer/BoxContainer";
import guiImg2 from '../../../assets/img/gui-2.png'
import Title from "../../Usual/Title/Title";

export default function About(){
    return(
        <section className="about" id="about">
            <BoxContainer className={'flex-row align-center margin-elements'}>
                <div className="about__texts">
                    <Title>Sobre mim</Title>
                    <p> Meu primeiro contato com a área de programação foi através de um curso de desenvolvimento de sistemas.
                        No qual pude mergulhar na lógica de programação e aprender os fundamentos da linguagem <strong>C#</strong> e estruturas de dados <strong>SQL</strong>.
                        Foi nesse momento que descobri minha paixão por criar soluções através do código.
                    </p>
                    
                    <p>
                        No início de 2023 retornei aos estudos de programação, dessa vez focado em <strong>JavaScript</strong>.
                        Desde então, tenho me dedicado diariamente a estudar e aprimorar minhas habilidades para me tornar um desenvolvedor web completo.
                    </p>
                </div>
                <div className="about__img-container">
                    <img className="about__img" src={guiImg2} alt="Gui" />
                </div>
            </BoxContainer>
        </section>
    )
}