import { createBrowserRouter } from "react-router-dom"
import App from "./src/App"
import Login from "./src/components/Login"
import SignUp from "./src/components/SignUp"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/sign-up",
		element: <SignUp />,
	},
])

export default router
