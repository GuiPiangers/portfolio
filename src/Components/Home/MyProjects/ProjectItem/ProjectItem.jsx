import './ProjectItem.css'
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'

export default function ProjectItem({img, title, description, technologies = []}){

    const technologiesIcons = {
        react: <FaReact key='react' size={28} className='technology-icon'/>,
        javascript: <DiJavascript1 key='javascript' size={28} className='technology-icon'/>,
        html: <FaHtml5 key='html' size={28} className='technology-icon'/>,
        css: <FaCss3Alt key='css' size={28} className='technology-icon'/>
    }

    const renderTechnologies = ()=>{
        return technologies.map(technology => technologiesIcons[technology.toLowerCase()])
    }

    return(
    <div className='project-item'>
        <img className='project-item__img' src={img} alt={title} />
        <h3 className='project-item__title'>{title}</h3>
        <p className='project-item__description'>{description}</p>
        <div className='flex-row'>
            <div className='technologies-container'>
                {renderTechnologies()}
            </div>
            <button className='project-item__button'>Ver projeto</button>
        </div>
    </div>
    )
}