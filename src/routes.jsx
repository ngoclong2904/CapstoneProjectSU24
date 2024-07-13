import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Login from "./pages/investor/Login"
import SignUp from "./pages/investor/SignUp"
import Dashboard from "./components/Dashboard/Dashboard"
import DuAn from "./components/DuAn/DuAn"
import DotMoBan from "./pages/investor/DotMoBan"
import TienDo from "./pages/investor/TienDo"
import BieuMau from "./pages/investor/BieuMau"
import KhuyenMai from "./pages/investor/KhuyenMai"
import ChinhSach from "./pages/investor/ChinhSach"
import KhachHang from "./pages/investor/KhachHang"
import NhanVien from "./pages/investor/NhanVien"
import LichThanhToan from "./pages/investor/LichThanhToan"
import Investor from "./pages/investor/Investor"
import ProjectsGeneral from "./components/DuAn/ProjectsGeneral"
import ProjectList from "./components/DuAn/ProjectList"
import DefaultLayout from "./layout/DefaultLayout"
import Home from "./pages/online/Home"
import Detail from "./pages/online/Detail"
import Policy from "./pages/online/Policy"
import SiderBarLayout from "./layout/SiderBarLayout"
import Profile from "./pages/online/Profile"
import Payment from "./pages/online/Payment"
import HeaderLayout from "./layout/HeaderLayout"
import ChooseProduct from "./pages/online/ChooseProduct"
import Order from "./pages/online/Order"
import ReceiptCard from "./pages/online/ReceiptCard"
import Adminlayout from "./layout/Adminlayout"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/investor",
		element: <Investor />,
		exact: true,
		children: [
			{
				path: "dashboard",
				element: <Dashboard />,
			},
			{
				path: "du-an",
				element: <DuAn />,
				children: [
					{
						index: true,
						element: <ProjectList />,
					},
					{
						path: "general",
						element: <ProjectsGeneral />,
					},
				],
			},
			{
				path: "dot-mo-ban",
				element: <DotMoBan />,
			},
			{
				path: "lich-thanh-toan",
				element: <LichThanhToan />,
			},
			{
				path: "tien-do",
				element: <TienDo />,
			},
			{
				path: "bieu-mau",
				element: <BieuMau />,
			},
			{
				path: "khuyen-mai",
				element: <KhuyenMai />,
			},
			{
				path: "chinh-sach",
				element: <ChinhSach />,
			},
			{
				path: "khach-hang",
				element: <KhachHang />,
			},
			{
				path: "nhan-vien",
				element: <NhanVien />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/sign-up",
		element: <SignUp />,
	},
	{
		path: "/home",
		element: <DefaultLayout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "detail/:projectID", element: <Detail /> },
			{ path: "policy", element: <Policy /> },
		],
	},
	{
		element: <SiderBarLayout />,
		children: [
			{ path: "profile", element: <Profile /> },
			{ path: "payment", element: <Payment /> },
		],
	},
	{
		element: <HeaderLayout />,
		children: [{ path: "choose-product/:projectID", element: <ChooseProduct /> }],
	},
	{ path: "order", element: <Order /> },
	{ path: "receipt-card", element: <ReceiptCard /> },
	// {
	// 	element: <Adminlayout />,
	// 	children: [
	// 		{ path: "admin-dashboard", element: <Dashboard /> },
	// 		{ path: "admin-projects", element: <Projects /> },
	// 		{ path: "admin-projects/list/:id", element: <ListProduct /> },
	// 		{ path: "admin-projects/:id", element: <DetailProject /> },
	// 	],
	// },
])

export default router
