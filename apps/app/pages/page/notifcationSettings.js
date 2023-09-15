import Section from '../../../../packages/UI/src/components/organisms/NotificationSection/Section'
import React from 'react'

const notifcationSettings = () => {
  return (
    <div className='w-[820px] flex flex-col'>
        <h1>Notification settings</h1>
        <p className='mt-4 mb-12'>Choose the notifications you wish to receive.</p>
        <Section paragraph='Keep track of progress' header={'SAVED IDEAS'} disabled={false}/>
    </div>
  )
}

export default notifcationSettings