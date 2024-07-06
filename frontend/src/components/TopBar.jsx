import React from "react"

import notification from "/src/assets/notification.png"
import user from "/src/assets/user.png"
import arrowDown from "/src/assets/arrow_down.jpg"
import search from "/src/assets/search.png"

const TopBar = () => {
	return (
		<div id='top-bar' className='flex justify-between'>
			<div className='relative'>
				<img src={search} alt='' className='absolute top-[8px] left-[8px]' />
				<input type='text' placeholder='Search here' className='bg-gray-200 rounded-xl py-1 px-6 pl-8' />
			</div>
			<div className='right-side flex gap-8 items-center'>
				<p>English</p>
				<img src={notification} alt='' className='w-[30px] h-[30px]' />
				<div className='flex items-center gap-1'>
					<img src={user} alt='' />
					<img src={arrowDown} alt='' className='w-[20px] h-[20px]' />
				</div>
			</div>
		</div>
	)
}

export default TopBar
