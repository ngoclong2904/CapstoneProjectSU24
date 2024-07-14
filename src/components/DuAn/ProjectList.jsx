import React, { useEffect, useState } from "react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useOutletContext } from "react-router-dom"

const ProjectList = () => {
	const [projects, setProjects] = useState([])
	const [activeProjectIndex, setActiveProjectIndex] = useState(null)
	const { setShowNavbar } = useOutletContext()

	useEffect(() => {
		const fetchAllProjects = async () => {
			try {
				const res = await fetch("https://realestateproject.azurewebsites.net/api/Projects/GetAllProjects")
				const data = await res.json()
				setProjects(data)
			} catch (error) {
				console.error("Error fetching data: ", error)
			}
		}

		fetchAllProjects()
	}, [])

	useEffect(() => {
		if (activeProjectIndex != null) {
			setShowNavbar(true)
		} else {
			setShowNavbar(false)
		}
	}, [activeProjectIndex])

	function handleClick(project, index) {
		setActiveProjectIndex((currentIndex) => {
			return currentIndex !== null && currentIndex === index ? null : index
		})
	}

	return (
		<div>
			<Table className='mt-8'>
				<TableHeader>
					<TableRow className='font-[500]'>
						<TableHead className='w-[100px] text-center'>STT</TableHead>
						<TableHead>Ngaỳ đăng</TableHead>
						<TableHead>Tên dự án</TableHead>
						<TableHead>Loại dự án</TableHead>
						<TableHead>Địa chỉ</TableHead>
						<TableHead className='text-center'>Nơi cấp</TableHead>
						<TableHead className='text-center'>Status</TableHead>
						<TableHead className='text-center'>Action</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{projects.map((proj, index) => (
						<TableRow
							onClick={() => handleClick(proj, index)}
							className={`cursor-pointer ${activeProjectIndex === index ? "bg-blue-100" : ""}`}>
							<TableCell className='text-center'>{index + 1}</TableCell>
							<TableCell>{proj.dateOfIssue}</TableCell>
							<TableCell>{proj.projectName}</TableCell>
							<TableCell>{proj.typeOfProject}</TableCell>
							<TableCell>{proj.address}</TableCell>
							<TableCell className='text-center'>{proj.placeofIssue}</TableCell>
							<TableCell className='text-center'>
								<p className={`bg-green-200 text-green-600 rounded-lg p-1 `}>Active</p>
							</TableCell>
							<TableCell className='text-center'>...</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}

export default ProjectList
