import React from 'react';

const Header: React.FC = () => {
    return (
        <header className='flex w-[min(100%,358px)] md:w-full flex-col justify-end items-start gap-4 self-stretch mb-12'>
        <h1 className='self-stretch font-abel text-grayscale-900 font-[44px]'>Notification settings</h1>
        <p className='self-stretch font-nunito-sans text-grayscale-900 font-normal leading-6'>Choose the notifications you wish to receive</p>
        </header>
    )
}
  export default Header;