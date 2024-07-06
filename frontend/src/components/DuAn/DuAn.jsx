import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import ProjectsNav from "./ProjectsNav"

const DuAn = () => {
	const [showNavbar, setShowNavbar] = useState(false)

	return (
		<div id='projects'>
			<div>
				<p className='text-gray'>Danh sách dự án</p>
				<div className='h-[1px] bg-[#bec6c9] w-[98%] mx-auto my-4'>&nbsp;</div>
			</div>

			{/* {showNavbar && } */}
			<ProjectsNav />

			<Outlet />
		</div>
	)
}

export default DuAn
