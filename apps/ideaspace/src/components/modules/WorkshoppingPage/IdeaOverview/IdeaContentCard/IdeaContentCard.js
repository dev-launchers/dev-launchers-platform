import React, { useState } from 'react';
import { atoms } from '@devlaunchers/components/src/components';

const IdeaContentCard = ({ title, content, sliceLength, fullHeight }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '1rem',
        marginBottom: '0rem',
        // padding: '20px',
        gap: '12px',
        // borderRadius: '16px',
        // border:
        //   '2px solid var(--status-hover-border-interactive-brand, #F0EDEE)',
        background: '#FFF',
        minHeight: fullHeight ? '100%' : '100px',
      }}
    >
      <atoms.Box>
        <h3 className="font-bold">{title}</h3>
      </atoms.Box>
      <atoms.Box flexDirection="column">
        <div className="flex flex-col gap-2">
          {content ? (
            <>
              {sliceLength && !isExpanded ? (
                <>
                  {content
                    .slice(0, sliceLength)
                    .concat('...')
                    .split('\n')
                    .map((paras, key) => {
                      return (
                        <atoms.Box gap="0.5rem" key={key}>
                          {/* <atoms.Typography type="p">&bull;</atoms.Typography> */}
                          <atoms.Typography type="p" textAlign="left">
                            {paras}
                          </atoms.Typography>
                        </atoms.Box>
                      );
                    })}
                </>
              ) : (
                <>
                  {content.split('\n').map((paras, key) => {
                    return (
                      <atoms.Box gap="0.5rem" key={key}>
                        {/* <atoms.Typography type="p">&bull;</atoms.Typography> */}
                        <atoms.Typography type="p" textAlign="left">
                          {paras}
                        </atoms.Typography>
                      </atoms.Box>
                    );
                  })}
                </>
              )}
              {sliceLength ? (
                <atoms.Box justifyContent="flex-end">
                  <atoms.Button
                    buttonSize="standard"
                    buttonType="primary"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    {isExpanded ? 'Collapse Description' : 'Expand Description'}
                  </atoms.Button>
                </atoms.Box>
              ) : null}
            </>
          ) : null}
        </div>
      </atoms.Box>
    </div>
  );
};

export default IdeaContentCard;
