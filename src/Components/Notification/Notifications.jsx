import React, { useState } from 'react'
import NotificationData from './NotificationData'

export default function Notifications() {
    const [notifications, setNotifications] = useState(NotificationData);

    //Mark a single notification ass read
    const markSingleRead = (id) => {
      setNotifications((prev) => 
      prev.map((item) => 
      item.id === id ? {...item, isRead: true} : item
      )
      );
    }

    //mark all unread as read
    const markAllAsRead = () => {
      setNotifications((prev) => 
      prev.map((item) => ({...item, isRead: true})))
    }

  return (
  <>
    <section className='mx-3'>
      <h1 className=' font-bold font-playfair text-xl sm:text-2xl md:text-3xl text-center'>Your Notifications</h1>
      <div className='flex items-center justify-between my-2'>
        <button onClick={markAllAsRead} className='border px-1 border-gray-300 rounded cursor-pointer font-medium'>Mark all as read</button>
        
      </div>

    <div>
      
      {notifications.map((item) => (
        <div key={item.id} className={`my-2 border border-gray-300 p-2 rounded ${ item.isRead ? "bg-white border-gray-200" : "bg-blue-50 border-blue-200"}`}>
          <div className='flex items-center justify-between'>
            <div className=' flex items-center gap-3'>
              <span className='bg-blue-700 py-1 px-1.5 rounded-xl text-white font-semibold text-xs'>{item.tag}</span>
            {item.status === "Accepted" && (
              <span className='bg-green-400 py-1 px-1.5 rounded-xl text-white font-semibold text-xs'>Accepted</span>
            )}
            {item.status === "Declined" && (
              <span className='bg-red-400 py-1 px-1.5 rounded-xl text-white font-semibold text-xs'>Declined</span>
            )}
            </div>
            <div className='flex items-center justify-between gap-3'>
              <p className='text-gray-600 text-xs'>{item.time}</p>
              <button onClick={() => markSingleRead(item.id)} className="text-gray-400 hover:text-gray-600 font-medium text-xs leading-none">X</button>
            </div>
          </div>
          <h2 className='text-sm font-medium'>{item.message}</h2>
          <p className='text-gray-600 text-xs'>{item.vendor}</p>
          <p className='text-gray-600 text-xs'>{item.service}</p>
          <p className='text-gray-600 text-xs'>{item.reason}</p>

          
        </div>
      ))}
    </div>
    </section>
  </>
  )
}
