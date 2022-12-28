import React from 'react';

const IdeaspaceNavCard = ({
  cardBackgroundColor,
  cardBackgroundImage,
  cardTitle,
  cardDescription,
}) => {
  return (
    <div
      style={{
        height: '100%',
        minHeight: '300px',
        maxHeight: '300px',
        display: 'inline',
        background: `linear-gradient( ${cardBackgroundColor}, url(${cardBackgroundImage})`,
        backgroundSize: 'cover',
        borderRadius: '30px',
        alignContent: 'center',
        overflow: 'initial',
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
