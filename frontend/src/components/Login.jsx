import React, { useRef } from "react"
import { Link } from "react-router-dom"
import login from "/src/assets/login.svg"
import square from "/src/assets/Square.png"
import or from "/src/assets/or.svg"
import google from "/src/assets/Social media logo.svg"
import hide from "/src/assets/hide.png"

const Login = () => {
	const usernameRef = useRef(null)
	const passwordRef = useRef(null)

	function handleSignIn() {
		console.log("Sign in")
		const username = usernameRef.current.value
		const password = passwordRef.current.value
		console.log(username, password)
	}

	function handleGoogleSignIn() {
		console.log("Google sign in")
	}

	function handleShowPasssword() {
		const type = passwordRef.current.type
		if (type === "password") {
			passwordRef.current.type = "text"
		} else {
			passwordRef.current.type = "password"
		}
	}

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
			<div className='flex-1 p-[50px]'>
				<div className='text-right'>
					Don't have an account?{" "}
					<Link to={"/sign-up"} className='underline'>
						Sign up
					</Link>
				</div>
				<div id='sign-in-section'>
					<h1>Sign in</h1>
					<button
						className='mt-[3rem] w-full border border-[#333333] flex justify-center gap-4'
						onClick={handleGoogleSignIn}>
						<img src={google} alt='' />
						Continue with Google
					</button>
					<img src={or} alt='divider' className='mt-[3rem] w-full' />
					<div className='mt-[3rem]'>
						<div>
							<label htmlFor='username' className='text-[#666666]'>
								User name or email address
							</label>
							<input
								type='text'
								id='username'
								className='block w-full h-[56px] border border-[#666666] rounded-xl mt-1'
								ref={usernameRef}
							/>
						</div>
						<div className='mt-[2rem]'>
							<div className='flex justify-between items-center'>
								<label htmlFor='password' className='text-[#666666]'>
									Your password
								</label>
								<div className='text-[#666666] flex gap-2 cursor-pointer' onClick={handleShowPasssword}>
									<img src={hide} alt='' />
									Hide
								</div>
							</div>
							<input
								type='password'
								id='password'
								className='block w-full h-[56px] border border-[#666666] rounded-xl mt-1'
								ref={passwordRef}
							/>
						</div>
						<span className='mt-2 text-right w-full block underline'>Forget your password</span>
						<button className='mt-[2rem] bg-[#C4C4C4] text-white w-[300px]' onClick={handleSignIn}>
							Sign in
						</button>
						<div className='text-left mt-2'>
							Don't have an account?{" "}
							<Link to={"/sign-up"} className='underline'>
								Sign up
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
