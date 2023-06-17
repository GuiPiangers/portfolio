import './ProjectItem.css'
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import Icon from '../Icon/Icon'
import Button from '../../../Usual/Button/Button'

export default function ProjectItem({img, className, title, description, technologies = []}){

    const technologiesIcons = {
        react: <Icon key='react' icon={<FaReact key='react' size={28}/>} name='React'/>,
        javascript: <Icon key='javascript' icon={<DiJavascript1 key='javascript' size={28}/>} name='JavaScript'/>,
        html: <Icon key='html' icon={<FaHtml5 key='javascript' size={28}/>} name='HTML'/>,
        css: <Icon key='css' icon={<FaCss3Alt key='javascript' size={28}/>} name='CSS'/>,
    }

    const renderTechnologies = ()=>{
        return technologies.map(technology => technologiesIcons[technology.toLowerCase()])
    }

    return(
    <div className={`project-item ${className}`}>
        
        <img className='project-item__img' src={img} alt={title} />
        
        <div className='space-elements'>
            <h3 className='project-item__title'>{title}</h3>
            <p className='project-item__description'>{description}</p>
        
            <div className='technologies-container'>
                {renderTechnologies()}
            </div>

            <div className='button-container'>
                <Button className='button--small button--primary'>Ver projeto</Button>
                <Button className='button--small button--secondary'>Repositório</Button>
            </div>
        </div>
    </div>
    )
}