import React from 'react';
import { atoms } from '@devlaunchers/components/src/components';
import commentSvg from '../../../images/comment.svg';

const IdeaCardComment = ({
    commentLength
}) => {

    return (
        <atoms.Box alignItems='center' style={{ marginTop: '-1.5rem' }} >
            <img alt='commentSvg' src={commentSvg} />
            {commentLength > 0 ? (
                <atoms.Typography type='p'>
                    &nbsp;COMMENTS:&nbsp;{commentLength}
                </atoms.Typography>
            ) : (
                <atoms.Typography type='p'>
                    &nbsp;NO COMMENT YET
                </atoms.Typography>
            )}
        </atoms.Box>
    )
};

export default IdeaCardComment;