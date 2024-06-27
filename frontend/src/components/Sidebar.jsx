import React from "react"
import { Link } from "react-router-dom"
import logo from "/src/assets/logo.png"
import dashboard from "/src/assets/dashboard.png"
import du_an from "/src/assets/du_an.png"
import moban from "/src/assets/moban.png"
import lich from "/src/assets/lich.png"
import tiendo from "/src/assets/tiendo.png"
import bieumau from "/src/assets/bieumau.png"
import khuyenmai from "/src/assets/khuyenmai.png"
import chinhsach from "/src/assets/chinhsach.png"
import khach from "/src/assets/khachhang.png"
import nv from "/src/assets/nhanvien.png"

import "./Sidebar.scss"

const Sidebar = () => {
	return (
		<div className='flex items-center'>
			<div id='sidebar' className='bg-white h-full w-[20rem] py-[3rem]'>
				<div className='flex justify-center gap-2 items-center'>
					<img src={logo} alt='' />
					<h1>Just Home</h1>
				</div>
				<ul className='mt-[2rem] flex flex-col gap-2 justify-center px-[2rem]'>
					<li className='px-10 flex items-center gap-2'>
						<div className='w-[30px]'>
							<img src={dashboard} alt='' />
						</div>
						<Link to={"/investor/dashboard"}>Dashboard</Link>
					</li>
					<li className='px-10 flex items-center gap-2'>
						<div className='w-[30px]'>
							<img src={du_an} alt='' />
						</div>
						<Link to={"/investor/du-an"}>Dự án</Link>
					</li>
					<li className='px-10 flex items-center gap-2'>
						<div className='w-[30px]'>
							<img src={moban} alt='' />
						</div>
						<Link to={"/investor/dot-mo-ban"}>Đợt mở bán</Link>
					</li>
					<li className='px-10 flex items-center gap-2'>
						<div className='w-[30px]'>
							<img src={lich} alt='' />
						</div>
						<Link to={"/investor/lich-thanh-toan"}>Lịch thanh toán</Link>
					</li>
					<li className='px-10 flex items-center gap-2'>
						<div className='w-[30px]'>
							<img src={tiendo} alt='' />
						</div>
						<Link to={"/investor/tien-do"}>Thay đổi tiến độ</Link>
					</li>
					<li className='px-10 flex items-center gap-2'>
						<div className='w-[30px]'>
							<img src={bieumau} alt='' />
						</div>
						<Link to={"/investor/bieu-mau"}>Biểu mẫu</Link>
					</li>
					<li className='px-10 flex items-center gap-2'>
						<div className='w-[30px]'>
							<img src={khuyenmai} alt='' />
						</div>
						<Link to={"/investor/khuyen-mai"}>Khuyến mãi</Link>
					</li>
					<li className='px-10 flex items-center gap-2'>
						<div className='w-[30px]'>
							<img src={chinhsach} alt='' />
						</div>
						<Link to={"/investor/chinh-sach"}>Chính sách bán hàng</Link>
					</li>
					<li className='px-10 flex items-center gap-2'>
						<div className='w-[30px]'>
							<img src={khach} alt='' />
						</div>
						<Link to={"/investor/khach-hang"}>Khách hàng</Link>
					</li>
					<li className='px-10 flex items-center gap-2'>
						<div className='w-[30px]'>
							<img src={nv} alt='' />
						</div>
						<Link to={"/investor/nhan-vien"}>Nhân viên</Link>
					</li>
				</ul>
			</div>
			<div></div>
		</div>
	)
}

export default Sidebar
