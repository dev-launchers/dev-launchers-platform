import React from 'react';
import Link from 'next/link';
import {
    ImgButton,
} from './StyledIdeaCard';

const IdeaCardImg = ({
    cardId,
    cardImg,
}) => {

    return (
        <Link href={`/ideaspace/workshop/${cardId}`}>
            <ImgButton>
                {cardImg ?
                    <img
                        alt="idea_image"
                        src={cardImg}
                        style={{ width: "100%", height: "100%", borderRadius: "1rem", }}
                    />
                    :
                    <img
                        alt="idea_image"
                        src={`https://picsum.photos/seed/${cardId}/350/270?random=${cardId}`}
                        style={{ width: "100%", height: "100%", borderRadius: "1rem", }}
                    />
                }
            </ImgButton>
        </Link>
    )
};

export default IdeaCardImg;