import React from "react"
import { NavLink } from "react-router-dom"

import "./ProjectsNav.scss"

const ProjectsNav = () => {
	return (
		<div className='flex gap-10 my-8' id='project-nav'>
			<NavLink to={"general"}>General</NavLink>
			<NavLink to={"lich-su"}>Lịch sử thực hiện</NavLink>
			<NavLink to={"lich-thanh-toan"}>Lịch thanh toán dự kiến</NavLink>
			<NavLink to={"chinh-sach"}>Chính sách bán hàng</NavLink>
			<NavLink to={"bieu-mau"}>Biểu mẫu</NavLink>
			<NavLink to={"tai-lieu"}>Tài liệu</NavLink>
			<NavLink to={"khuyen-mai"}>Khuyến mãi</NavLink>
			<NavLink to={"nhan-vien"}>Nhân viên quản lý</NavLink>
		</div>
	)
}

export default ProjectsNav
