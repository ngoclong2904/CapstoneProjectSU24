import { createBrowserRouter } from "react-router-dom"
import App from "./src/App"
import Login from "./src/pages/Login"
import SignUp from "./src/pages/SignUp"
import Dashboard from "./src/components/Dashboard/Dashboard"
import DuAn from "./src/components/DuAn/DuAn"
import DotMoBan from "./src/pages/DotMoBan"
import TienDo from "./src/pages/TienDo"
import BieuMau from "./src/pages/BieuMau"
import KhuyenMai from "./src/pages/KhuyenMai"
import ChinhSach from "./src/pages/ChinhSach"
import KhachHang from "./src/pages/KhachHang"
import NhanVien from "./src/pages/NhanVien"
import LichThanhToan from "./src/pages/LichThanhToan"
import Investor from "./src/pages/Investor"
import ProjectsGeneral from "./src/components/DuAn/ProjectsGeneral"
import ProjectList from "./src/components/DuAn/ProjectList"

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
])

export default router
