import React, { useRef, useState } from "react"

import logoGray from "/src/assets/square_gray.png"
import { Link } from "react-router-dom"

const SignUp = () => {
	const firstNameRef = useRef(null)
	const lastNameRef = useRef(null)
	const emailRef = useRef(null)
	const passwordRef = useRef(null)
	const confirmRef = useRef(null)

	const [isPasswordError, setIsPasswordError] = useState(false)

	function handleSignUp() {
		const firstName = firstNameRef.current.value
		const lastName = lastNameRef.current.value
		const email = emailRef.current.value
		const password = passwordRef.current.value
		const confirm = confirmRef.current.value

		if (confirm !== password) {
			setIsPasswordError(true)
			return
		}
		setIsPasswordError(false)
		console.log(firstName, lastName, email, password)
	}

	function handleShowPassword() {
		const type = passwordRef.current.type
		if (type === "password") {
			passwordRef.current.type = "text"
			confirmRef.current.type = "text"
		} else {
			passwordRef.current.type = "password"
			confirmRef.current.type = "password"
		}
	}

	return (
		<div className='bg-[#FBFBFB] h-full flex items-center justify-center py-[100px] px-[200px] flex-col'>
			<div className='bg-white w-full border border-[#66666680] rounded-[24px] pt-[40px] px-[180px] pb-[80px]'>
				<img src={logoGray} alt='' />
				<h1 className='text-[32px] mt-4'>Create an account</h1>
				<p>
					Already have an account?{" "}
					<Link to={"/login"} className='underline mt-1'>
						Log in
					</Link>
				</p>
				<div className='grid grid-cols-2 gap-4 mt-[40px]'>
					<div>
						<label htmlFor='firstName' className='text-[#666666]'>
							First name
						</label>
						<input
							type='text'
							id='firstName'
							className='block w-full h-[56px] border border-[#666666] rounded-xl mt-1'
							ref={firstNameRef}
						/>
					</div>
					<div>
						<label htmlFor='lastName' className='text-[#666666]'>
							Last name
						</label>
						<input
							type='text'
							id='lastName'
							className='block w-full h-[56px] border border-[#666666] rounded-xl mt-1'
							ref={lastNameRef}
						/>
					</div>
				</div>
				<div className='mt-6'>
					<label htmlFor='email' className='text-[#666666]'>
						Email address
					</label>
					<input
						type='text'
						id='email'
						className='block w-full h-[56px] border border-[#666666] rounded-xl mt-1'
						ref={emailRef}
					/>
				</div>
				<div className='grid grid-cols-2 gap-4 mt-[40px]'>
					<div>
						<label htmlFor='firstName' className='text-[#666666]'>
							Password
						</label>
						<input
							type='password'
							id='password'
							className='block w-full h-[56px] border border-[#666666] rounded-xl mt-1'
							ref={passwordRef}
						/>
					</div>
					<div>
						<label htmlFor='confirm' className='text-[#666666]'>
							Confirm password
						</label>
						<input
							type='password'
							id='confirm'
							className='block w-full h-[56px] border border-[#666666] rounded-xl mt-1'
							ref={confirmRef}
						/>
					</div>
					{isPasswordError && <p className='text-red-500 col-span-2'>Passwords do not match</p>}
				</div>
				<p className='text-[#666666] mt-2'>Use 8 or more characters with a mix of letters, numbers & symbols</p>
				<div className='mt-4 flex gap-2 items-center'>
					<input
						type='checkbox'
						name='showPassword'
						id='showPassword'
						className='w-[18px] h-[18px]'
						onChange={handleShowPassword}
					/>
					<label htmlFor='showPassword'>Show password</label>
				</div>
				<div className='flex justify-between items-center mt-8'>
					<Link to={"/login"} className='underline mt-1 font-[400]'>
						log in instead
					</Link>
					<button className='bg-[#c3c3c3] text-white hover:bg-gray-400' onClick={handleSignUp}>
						Create an account
					</button>
				</div>
			</div>
			<div className='ml-auto mt-4 pr-[2rem]'>
				<ul className='flex gap-8'>
					<li>
						<Link to={"/help"}>Help</Link>
					</li>
					<li>
						<Link to={"/privacy"}>Privacy</Link>
					</li>
					<li>
						<Link to={"/terms"}>Terms</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default SignUp
