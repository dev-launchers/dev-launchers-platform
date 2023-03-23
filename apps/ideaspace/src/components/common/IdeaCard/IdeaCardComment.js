import React from 'react';
import { atoms } from '@devlaunchers/components/src/components';
import commentSvg from '../../../images/comment.svg';

const IdeaCardComment = ({
    commentLength
}) => {

    return (
        <>
            {commentLength > 0 ? (
                <atoms.Box alignItems='center' style={{ marginTop: '-1.5rem' }} >
                    <img alt='commentSvg' src={commentSvg} />
                    <atoms.Typography type='p'>
                        &nbsp;COMMENTS:&nbsp;{commentLength}
                    </atoms.Typography>
                </atoms.Box>
            ) : (
                null
            )
            }
        </>
    )
};

export default IdeaCardComment;