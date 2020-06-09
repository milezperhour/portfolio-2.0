import React from 'react';
import '../css/portfolio.css';
import dataAndAi from '../images/portfolio/data-and-ai.jpg';
import deviceViewer from '../images/portfolio/device-viewer.jpg';
import cullinan from '../images/portfolio/cullinan.jpg';
import calculator from '../images/portfolio/calculator.jpg';
import portal from '../images/portfolio/portal.jpg';
import codazenLabs from '../images/portfolio/codazen-labs.jpg';
import ticTacToe from '../images/portfolio/ticTacToe.jpg';
import venueFind from '../images/portfolio/venueFind.jpg';

const Portfolio = () => {
  // const [isHovered, setIsHovered] = useState(false);

  const portfolioItems = [
    { name: 'Portal', src: portal },
    { name: 'Codazen Labs', src: codazenLabs },
    { name: 'Data & AI Landing Page', src: dataAndAi },
    { name: 'Unika Device Viewer', src: deviceViewer },
    { name: 'Rolls-Royce Landing Page', src: cullinan },
    { name: 'Calculator', src: calculator },
    { name: 'VenueFind', src: venueFind },
    { name: 'ticTacToe', src: ticTacToe },
  ];

  const handleMouseOver = () => {
    console.log('test');
  };

  const handleMouseOut = () => {
    console.log('test');
    // `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${imgUrl}`;
  };

  const PortfolioItem = props => {
    return (
      <div
        className='portfolio-img'
        style={{ backgroundImage: `url(${props.src})` }}
        onMouseOut={props.mouseOut}
        onBlur={() => undefined}
        onMouseOver={props.mouseOver}
        onFocus={() => undefined}
      />
    );
  };

  return (
    <div className='portfolio'>
      <div className='inner-portfolio'>
        {portfolioItems.map((item, i) => (
          <div className='portfolio-img-container'>
            <PortfolioItem
              key={`item-${i + 1}`}
              name={item.name}
              src={item.src}
              mouseOut={handleMouseOut(i)}
              mouseOver={handleMouseOver(i)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
