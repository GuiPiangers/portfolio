import './HomeNavigation.css'
import { useEffect, useState } from 'react'
import HomeNavigationItem from './HomeNavigationItem'
import { useTranslation } from 'react-i18next'

export default function HomeNavigation(){
    const { t } = useTranslation()
    const [borderPosition, setBorderPosition] = useState(0)
    const [borderWidth, setBorderWidth] = useState(0)

    function animateBorder(index){
        const navMenuItems = document.querySelectorAll(`.home-navigation__item`)
        
        const newPosition = [...navMenuItems].reduce((acc, item, itemIndex) =>{
            if(itemIndex < index){
                return acc + item.clientWidth
            }
            else{
                return acc
            }
        }, 0)

        setBorderPosition(newPosition)
        setBorderWidth(navMenuItems[index].clientWidth)
    }
    
    function handleSetCurrentSection(entries){
        Array.from(entries).forEach((entry) =>{
            if(entry.isIntersecting){
            const href = entry.target.getAttribute('id')            
            const navMenuLinks = document.querySelectorAll(`.home-navigation__list a[href^="#"]`)
            const navMenuLinkActive = document.querySelector(`.home-navigation__list a[href^="#${href}"]`)
            navMenuLinks.forEach((link, index) => {
                if(link === navMenuLinkActive) animateBorder(index)
            })            
            }
        })
    }      

    useEffect(()=>{
        const sectionObserver = new IntersectionObserver((entries) =>{
            handleSetCurrentSection(entries)
        }, {
            threshold: [0.7]
        })

        Array.from(document.querySelectorAll('section')).forEach( section =>{
            sectionObserver.observe(section)
        })
        
        return()=> {
            sectionObserver.disconnect()
        }
    }, [])


    return(
        <nav className='home-navigation'>
            <div className="animation-border" style={{left: borderPosition, width: borderWidth}}></div>
            <ul className='home-navigation__list'>
                <HomeNavigationItem name="Home" url='#home'/>
                <HomeNavigationItem name={t("aboutTitle")} url='#about'/>
                <HomeNavigationItem name={t("projectsTitle")} url='#projects'/>
                <HomeNavigationItem name={t("contactTitle")} url='#contact'/>
            </ul>
        </nav>
    )
}