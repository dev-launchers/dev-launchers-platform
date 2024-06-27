import React, { PropsWithChildren } from 'react';

export default function ShadowCard({
  children,
  width = '80%',
  height = '90%',
  padding = '2rem',
}: PropsWithChildren) {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: 'rgba(0,0,0,.75)',
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="w-4/5 h-[90%] p-8 bg-black-75 text-white mx-auto flex flex-col justify-center items-center">
        {children}
      </div>
      {children}
    </div>
  );
}
