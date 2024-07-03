import React from "react"
import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router-dom"

const Investor = () => {
	return (
		<div className='h-full flex'>
			<Sidebar />
			<Outlet />
		</div>
	)
}

export default Investor
