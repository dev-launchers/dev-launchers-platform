import { Section } from '../../../packages/ui/src/components/organisms/NotificationSection'
import React from 'react'
import App from '@devlaunchers/website/src/pages/_app';
import { constructAppPage } from '../utils/routingTools.js';

const notificationSettings = () => {
  return (
    <div className='w-[820px] flex flex-col'>
        <h1>Notification settings</h1>
        <p className='mt-4 mb-12'>Choose the notifications you wish to receive.</p>
        <Section paragraph='Keep track of progress' header={'SAVED IDEAS'} disabled={false}/>
    </div>
  )
}

export default constructAppPage(App, notificationSettings)