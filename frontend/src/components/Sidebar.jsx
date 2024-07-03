import React from "react"
import { NavLink } from "react-router-dom"
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
					<NavLink to={"/investor/"} className='px-10 flex items-center gap-2'>
						<div className='w-[30px]'>
							<img src={dashboard} alt='' />
						</div>
						<p>Dashboard</p>
					</NavLink>
					<NavLink to={"/investor/du-an"} className='px-10 flex items-center gap-2'>
						<div className='w-[30px]'>
							<img src={du_an} alt='' />
						</div>
						<p>Dự án</p>
					</NavLink>
					<NavLink to={"/investor/dot-mo-ban"} className='px-10 flex items-center gap-2'>
						<div className='w-[30px]'>
							<img src={moban} alt='' />
						</div>
						<p>Đợt mở bán</p>
					</NavLink>
					<NavLink to={"/investor/lich-thanh-toan"} className='px-10 flex items-center gap-2'>
						<div className='w-[30px]'>
							<img src={lich} alt='' />
						</div>
						<p>Lịch thanh toán</p>
					</NavLink>
					<NavLink to={"/investor/tien-do"} className='px-10 flex items-center gap-2'>
						<div className='w-[30px]'>
							<img src={tiendo} alt='' />
						</div>
						<p>Thay đổi tiến độ</p>
					</NavLink>
					<NavLink to={"/investor/bieu-mau"} className='px-10 flex items-center gap-2'>
						<div className='w-[30px]'>
							<img src={bieumau} alt='' />
						</div>
						<p>Biểu mẫu</p>
					</NavLink>
					<NavLink to={"/investor/khuyen-mai"} className='px-10 flex items-center gap-2'>
						<div className='w-[30px]'>
							<img src={khuyenmai} alt='' />
						</div>
						<p>Khuyến mãi</p>
					</NavLink>
					<NavLink to={"/investor/chinh-sach"} className='px-10 flex items-center gap-2'>
						<div className='w-[30px]'>
							<img src={chinhsach} alt='' />
						</div>
						<p>Chính sách bán hàng</p>
					</NavLink>
					<NavLink to={"/investor/khach-hang"} className='px-10 flex items-center gap-2'>
						<div className='w-[30px]'>
							<img src={khach} alt='' />
						</div>
						<p>Khách hàng</p>
					</NavLink>
					<NavLink to={"/investor/nhan-vien"} className='px-10 flex items-center gap-2'>
						<div className='w-[30px]'>
							<img src={nv} alt='' />
						</div>
						<p>Nhân viên</p>
					</NavLink>
				</ul>
			</div>
			<div></div>
		</div>
	)
}

export default Sidebar
