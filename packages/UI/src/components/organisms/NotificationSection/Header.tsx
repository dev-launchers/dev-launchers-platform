import React from 'react';

const Header: React.FC = () => {
    return (
        <header className='flex w-[min(100%,358px)] md:w-full flex-col justify-end items-start gap-4 self-stretch mb-12'>
        <h1 className='self-stretch'>Notification settings</h1>
        <p className='self-stretch'>Choose the notifications you wish to receive</p>
        </header>
    )
}
  export default Header;