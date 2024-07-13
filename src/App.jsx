import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Investor from "./pages/investor/Investor"
import { GridLoader } from "react-spinners"

function App() {
	const navigate = useNavigate()

	const isAuthenticated = localStorage.getItem("token")

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/investor/dashboard")
		} else {
			navigate("/login")
		}
	}, [])

	return (
		<div className='w-full h-full flex items-center justify-center flex-col'>
			<GridLoader size={40} color='#bae2fd' />
			<p className='mt-6'>Please wait a minute</p>
		</div>
	)
}

export default App
