import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/investors/Dashboard"

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='h-full flex'>
			<Sidebar />
			<Dashboard />
		</div>
	)
}

export default App
