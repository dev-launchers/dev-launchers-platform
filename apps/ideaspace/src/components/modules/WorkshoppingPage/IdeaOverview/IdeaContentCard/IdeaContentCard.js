import React, { useState } from 'react';
import { atoms } from '@devlaunchers/components/src/components';

const IdeaContentCard = ({ title, content, sliceLength}) => {

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <atoms.Layer type="light" style={{ borderRadius: "1rem", marginBottom: "3rem", padding: "1rem 2rem 2rem" }}>
      <atoms.Box>
        <h3>{title}</h3>
      </atoms.Box>
      <atoms.Box flexDirection="column">
        {content ? (
          <>
            {(sliceLength && !isExpanded) ? (
              <>
                {content
                  .slice(0, sliceLength)
                  .concat("...")
                  .split('\n')
                  .map((paras, key) => {
                    return (
                      <atoms.Box gap="0.5rem" key={key}>
                        <atoms.Typography type='p'>&bull;</atoms.Typography>
                        <atoms.Typography type='p' textAlign='left'>{paras}</atoms.Typography>
                      </atoms.Box>
                    )
                  })}
              </>
            ) : (
              <>
                {content
                  .split('\n')
                  .map((paras, key) => {
                    return (
                      <atoms.Box gap="0.5rem" key={key}>
                        <atoms.Typography type='p'>&bull;</atoms.Typography>
                        <atoms.Typography type='p' textAlign='left'>{paras}</atoms.Typography>
                      </atoms.Box>
                    )
                  })}
              </>
            )}

            {sliceLength ? (
              <atoms.Box justifyContent="flex-end">
                <atoms.Button buttonSize='standard' buttonType="primary"
                  onClick={() => setIsExpanded(!isExpanded)}>
                  {isExpanded ? 'Collapse Description' : 'Expand Description'}
                </atoms.Button>
              </atoms.Box>
            ) : null}

          </>
        ) : null}
      </atoms.Box>
    </atoms.Layer >
  );
};

export default IdeaContentCard;