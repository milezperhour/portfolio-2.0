import React, { useRef } from 'react';
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
    {
      name: 'Portal',
      src: portal,
      description:
        'A Tron-inspired tic-tac-toe game made by me with a team of three. I served as as UI/UX Designer and Frontend Developer.',
      gitHubLink: 'https://github.com/milezperhour/C11.16_tictactoe',
      liveLink: 'https://milezperhour.github.io/C11.16_tictactoe/',
    },
    { name: 'Codazen Labs Blob Animations', src: codazenLabs },
    { name: 'Data & AI Landing Page', src: dataAndAi },
    { name: 'Unika Device Viewer', src: deviceViewer },
    { name: 'Rolls-Royce Landing Page', src: cullinan },
    { name: 'Calculator', src: calculator },
    { name: 'VenueFind', src: venueFind },
    { name: 'Tic-Tac-Toe', src: ticTacToe },
  ];

  const list = [...Array(portfolioItems.length).keys()];
  const itemsRef = useRef(list);

  const handleMouseOver = idx => e => {
    const next = itemsRef.current[idx];
    if (next) {
      const imgUrl = e.target.style.backgroundImage;
      e.target.style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${imgUrl}`;
    }
  };

  const handleMouseOut = idx => e => {
    const next = itemsRef.current[idx];
    if (next) {
      const overlayImg = e.target.style.backgroundImage;
      const imgUrl = overlayImg
        .split(
          'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ',
        )
        .pop();
      e.target.style.backgroundImage = imgUrl;
    }
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
        ref={props.reference}
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
              reference={el => {
                itemsRef.current[i] = el;
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
