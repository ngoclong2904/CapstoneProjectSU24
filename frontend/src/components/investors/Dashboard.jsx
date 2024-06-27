import React from "react"

import UpTrend from "/src/assets/uptrend.png"
import DownTrend from "/src/assets/downtrend.png"
import notification from "/src/assets/notification.png"
import user from "/src/assets/user.png"
import arrowDown from "/src/assets/arrow_down.jpg"
import search from "/src/assets/search.png"

import "./Dashboard.scss"

const Dashboard = () => {
	return (
		<div id='dashboard' className='flex-1 p-8 px-[4rem]'>
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
			<div className='mt-8'>
				<h3>Welcome investor,</h3>
				<p className='text-gray'>Dashboard</p>
			</div>
			<ul className='mt-8 grid grid-cols-4 gap-4'>
				<DashboardSummaryPanel
					heading={"Views"}
					number={"7,265"}
					fluctuation={"+11,02%"}
					color={"blue"}
					icon={UpTrend}
				/>
				<DashboardSummaryPanel
					heading={"Customers buy"}
					number={"3,671"}
					fluctuation={"-0,03%"}
					color={"purple"}
					icon={DownTrend}
				/>
				<DashboardSummaryPanel
					heading={"New Customer"}
					number={"156"}
					fluctuation={"+15,03%"}
					color={"blue"}
					icon={UpTrend}
				/>
				<DashboardSummaryPanel
					heading={"New staff"}
					number={"7,265"}
					fluctuation={"+11,02%"}
					color={"purple"}
					icon={DownTrend}
				/>
			</ul>
		</div>
	)
}

function DashboardSummaryPanel({ heading, number, fluctuation, icon, color }) {
	return (
		<div className={`${color === "blue" ? "bg-[#E3F5FF]" : "bg-[#E5ECF6]"}  rounded-[10px] p-6`}>
			<p className='text-[14px]'>{heading}</p>
			<div className='mt-2 flex gap-6'>
				<p className='font-[600] text-[20px]'>{number}</p>
				<div className='flex items-center gap-2'>
					<p className='text-[12px]'>{fluctuation}</p>
					<img src={icon} alt='' className='w-[16px] h-[8px] object-cover' />
				</div>
			</div>
		</div>
	)
}

export default Dashboard
