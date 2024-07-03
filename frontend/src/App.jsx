import { useEffect, useState } from "react"
import Sidebar from "./components/Sidebar"
import { Outlet, useNavigate } from "react-router-dom"

function App() {
	const navigate = useNavigate()

	function authenticationCheck() {
		const token = localStorage.getItem("token")
		if (!token) {
			navigate("/login")
		}
	}

	useEffect(() => {
		authenticationCheck()
	}, [])

	return (
		<div className='h-full flex'>
			<Sidebar />
			<Outlet />
		</div>
	)
}

export default App
