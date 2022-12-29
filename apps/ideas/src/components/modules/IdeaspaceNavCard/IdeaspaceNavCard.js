import React from 'react';
import './IdeaspaceNavCard.css';

const IdeaspaceNavCard = ({
  cardBackgroundColor,
  cardBackgroundImage,
  cardTitle,
  cardDescription,
}) => {
  return (
    <div
      className="idea-nav-card"
      style={{
        background: `linear-gradient(${cardBackgroundColor}, url(${cardBackgroundImage})`,
      }}
    >
      <div
        style={{
          color: 'white',
          width: '100%',
          border: 'solid',
          borderTop: 0,
          borderLeft: 0,
          borderRight: 0,
        }}
      >
        {cardTitle}
      </div>
      <p style={{ color: 'white' }}>{cardDescription}</p>
      <div
        style={{
          textAlign: 'right',
          position: 'relative',
          paddingRight: '2%',
          paddingTop: '1%',
        }}
      >
        <p style={{ color: 'white' }}>CONTINUE &#8594;</p>
      </div>
    </div>
  );
};

export default IdeaspaceNavCard;
