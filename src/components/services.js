import React from'react';
import '../css/services.css';
import html from '../images/tech-logos/html5.png';
import css from '../images/tech-logos/css.png';
import js from '../images/tech-logos/js.png';
import reactLogo from '../images/tech-logos/react-logo.png';
import jQuery from '../images/tech-logos/jQuery.png';
import php from '../images/tech-logos/php.png';
import bootstrap from '../images/tech-logos/bootstrap.png';
import wordpress from '../images/tech-logos/wordpress.png';
import git from '../images/tech-logos/git.png';
import ai from '../images/tech-logos/ai.png';
import ps from '../images/tech-logos/ps.png';
import inDesign from '../images/tech-logos/inDesign.png';

const Services = () => {
    const logos = [
        { name: 'HTML', img: html },
        { name: 'CSS', img: css },
        { name: 'Javascript', img: js },
        { name: 'React', img: reactLogo },
        { name: 'jQuery', img: jQuery },
        { name: 'PHP', img: php },
        { name: 'Bootstrap', img: bootstrap },
        { name: 'Wordpress', img: wordpress },
        { name: 'Git', img: git },
        { name: 'Illustrator', img: ai},
        { name: 'Photoshop', img: ps },
        { name: 'InDesign', img: inDesign },
    ];

    const TechLogo = (props) => {
        return (
            <div className="logoItem">
                <img src={props.imgSrc} alt={props.name}/>
                <span>{props.name}</span>
            </div>
        );
    }

    return (
        <div className="services">
            <h3>My Skill Set</h3>
            <h4>I have found a nice synergy between the artistic and technical software I use.</h4>
            <div className="techLogos">
            {logos.map((item, i) => (
                <TechLogo 
                    key={i}
                    name={item.name}
                    imgSrc={item.img}
                />
            ))}
            </div>
        </div>
    );
}

export default Services;