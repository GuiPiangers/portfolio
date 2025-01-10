import './ProjectItem.css'

import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import Icon from '../Icon/Icon'
import Button from '../../../Usual/Button/Button'

import {TbBrandNextjs} from 'react-icons/tb'
import { SiNginx, SiMysql,SiTypescript, SiJavascript, SiTailwindcss, SiNodedotjs, SiExpress, SiDocker, SiAwsamplify } from 'react-icons/si'
import { FaAws } from "react-icons/fa";

export default function ProjectItem({children, img, className, title, projectLink, repositoryLink, technologies = []}){

    const technologiesIcons = {
        react: <Icon key='react' icon={<FaReact size={28}/>} name='React'/>,
        javascript: <Icon key='javascript' icon={<SiJavascript size={28}/>} name='JavaScript'/>,
        html: <Icon key='html' icon={<FaHtml5 size={28}/>} name='HTML'/>,
        css: <Icon key='css' icon={<FaCss3Alt size={28}/>} name='CSS'/>,
        nextjs: <Icon key='next' icon={<TbBrandNextjs size={28}/>} name='Next Js'/>,
        tailwind: <Icon key='tailwind' icon={<SiTailwindcss size={28}/>} name='Tailwind CSS'/>,
        typescript: <Icon key='typescript' icon={<SiTypescript size={28}/>} name='Typescript'/>,
        nodejs: <Icon key='nodeJs' icon={<SiNodedotjs size={28}/>} name='Node.js'/>,
        express: <Icon key='express' icon={<SiExpress size={28}/>} name='Express'/>,
        docker: <Icon key='docker' icon={<SiDocker size={28}/>} name='Docker'/>,
        aws: <Icon key='aws' icon={<FaAws size={28}/>} name='AWS'/>,
        mysql: <Icon key='mysql' icon={<SiMysql size={28}/>} name='MySQL'/>,
        nginx: <Icon key='nginx' icon={<SiNginx size={28}/>} name='Nginx'/>,
    }

    const renderTechnologies = ()=>{
        return technologies.map(technology => technologiesIcons[technology.toLowerCase()])
    }

    return(
    <div className={`project-item ${className}`}>
        
        <img className='project-item__img' src={img} alt={title} />
        
        <div className='space-elements'>
            <h3 className='project-item__title'>{title}</h3>
            {children}
        
            <div className='technologies-container'>
                {renderTechnologies()}
            </div>

            <div className='button-container'>
                <Button 
                    className='button--small button--primary'
                    link={projectLink}
                    target="_blank"
                >
                    Ver projeto
                </Button>
                <Button 
                    className='button--small button--secondary'
                    link={repositoryLink}
                    target="_blank"
                >
                    Repositório
                </Button>
            </div>
        </div>
    </div>
    )
}