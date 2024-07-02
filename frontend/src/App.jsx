import { useState } from "react"
import Sidebar from "./components/Sidebar"
import { Outlet } from "react-router-dom"

function App() {
	return (
		<div className='h-full flex'>
			<Sidebar />
			<Outlet />
		</div>
	)
}

export default App
