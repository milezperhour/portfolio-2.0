import React, {useState, useEffect} from'react';
import '../css/nav.css';

const Nav = () => {
    const [homeSelector, setHomeSelector] = useState();
    const [profileSelector, setProfileSelector] = useState();
    const [experienceSelector, setExperienceSelector] = useState();
    const [portfolioHeightFromTop, setPortfolioHeightFromTop] = useState();
    const [contactHeightFromTop, setContactHeightFromTop] = useState();
    
    useEffect(() => {
        setHomeSelector(document.querySelector('.nav'));
        setProfileSelector(document.querySelector('.profile'));
        setExperienceSelector(document.querySelector('.experience'));
        setPortfolioHeightFromTop(0);
        setContactHeightFromTop(0);
    }, []);
 

    const [isOpen ,setIsOpen] = useState(false);
    
    const handleClick = () => {
        !isOpen ? setIsOpen(true) : setIsOpen(false);
    }

    const navItems = [
        {name: 'Home', className: homeSelector},
        {name: 'Profile', className: profileSelector},
        {name: 'Experience', className: experienceSelector},
        {name: 'Portfolio', className: portfolioHeightFromTop},
        {name: 'Contact', className: contactHeightFromTop},
    ];

    const ListItem = (props) => {
        return (
            <li onClick={() => scrollToSection(props)}><a>{props.name}</a></li>
        );
    }

    const scrollToSection = (props) => {
        props.selector.scrollIntoView();
    }

    return (
        <div className="fixed">
            <div className="nav">
                <div className="left">Miles</div>
                <div className="right">
                    <ul className="inline">
                        {navItems.map((item, i) => (
                            <ListItem 
                                key={i}
                                name={item.name}
                                selector={item.className}
                            />
                        ))}
                    </ul>
                    <div className={ isOpen ? 'hamburger open' : 'hamburger' } onClick={handleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="dropdown" style={ {height: isOpen ? '40vh' : '0'} }>
                <div className="innerDropdown">
                    <ul className={ isOpen ? 'fadein' : 'hide' }>
                        {navItems.map((item, i) => (
                            <ListItem 
                                key={i}
                                name={item.name}
                                selector={item.className}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Nav;