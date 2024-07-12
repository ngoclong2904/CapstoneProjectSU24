import React from "react"

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

export default DashboardSummaryPanel
