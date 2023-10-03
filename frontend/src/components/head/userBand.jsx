import React from 'react'

function UserBand() {
  return (
    <div className='w-[95%] mx-auto bg-slate-300 h-[50px] flex items-center justify-between'>
        <div className='flex items-center md:mx-9 mx-auto'>
            <img className='bg-white h-[35px] w-[35px] rounded-full' src='/images/user.png' alt='User'/>
            <h1 className='px-2'>User Name</h1>
        </div>
   

      <ul className='hidden md:flex mx-9 '>
        <li className='hover_bg'><a href='#'>Activity</a></li>
        <li className='hover_bg'><a href='#'>Films</a></li>
        <li className='hover_bg'><a href='#'>Reviews</a></li>
        <li className='hover_bg' ><a href='#'>Watchist</a></li>
        <li className='hover_bg'><a href='#'>Likes</a></li>
      </ul>
    </div>
  )
}

export default UserBand
