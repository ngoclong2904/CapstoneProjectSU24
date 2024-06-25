import React from "react"
import login from "/src/assets/login.svg"
import square from "/src/assets/Square.png"

const Login = () => {
	return (
		<div id='login' className='h-full w-full flex'>
			<div className='flex-1'>
				<div className='h-full relative'>
					<img src={login} alt='' className='object-cover w-full h-full' />
					<div className='absolute-position text-white px-[4rem] py-[16rem]'>
						<img src={square} alt='Square logo' />
						<h1 className='font-[600] text-[56px] mt-5'>Real Estate</h1>
						<p className='text-[24px] font-[400] mt-10'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus nunc, ac
							rhoncus odio congue quis. Sed ac semper orci, eu porttitor lacus.{" "}
						</p>
					</div>
				</div>
			</div>
			<div className='flex-1'>b</div>
		</div>
	)
}

export default Login
