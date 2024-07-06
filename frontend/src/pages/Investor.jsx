import React from "react"
import Sidebar from "../components/Sidebar/Sidebar"
import { Outlet } from "react-router-dom"
import TopBar from "../components/TopBar"

const Investor = () => {
	return (
		<div className='h-full flex'>
			<Sidebar />
			<div className='flex-1 p-8 px-[4rem] flex flex-col gap-8'>
				<TopBar />
				<Outlet />
			</div>
		</div>
	)
}

export default Investor
