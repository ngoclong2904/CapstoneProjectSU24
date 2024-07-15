import React, { useEffect, useState } from "react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useOutletContext } from "react-router-dom"
import plus from "../../assets/plus.png"
import CustomModal from "@components/ModalHook/CustomModal"
import ProjectForm from "@components/Form/ProjectForm"
import useModalHook from "@components/ModalHook/useModalHook"

const ProjectList = () => {
	const [projects, setProjects] = useState([])
	const [activeProjectIndex, setActiveProjectIndex] = useState(null)
	const { showModal, modalProps, form } = useModalHook({ onSubmit: handleAddNewProject })

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

	function handleSelectProject(project, index) {
		setActiveProjectIndex((currentIndex) => {
			return currentIndex !== null && currentIndex === index ? null : index
		})
	}

	async function handleAddNewProject(newProject) {
		try {
			const formData = new FormData()
			Object.keys(newProject).forEach((key) => {
				formData.append(key, newProject[key])
			})

			const response = await fetch("https://realestateproject.azurewebsites.net/api/Projects/AddNewProject", {
				method: "POST",
				body: formData,
			})

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}

			// Assuming the response is JSON. Adjust if it returns other content types.
			const data = await response.json()
			console.log("Project added successfully:", data)
		} catch (error) {
			console.error("Error fetching data: ", error)
		}
	}

	function handleEdit() {
		console.log("Edit")
	}

	return (
		<>
			<div
				className='bg-blue-600 inline-flex text-white gap-4 p-2 px-4 rounded-3xl cursor-pointer'
				onClick={() => showModal()}>
				<p>Add new</p>
				<img src={plus} alt='' className='object-contain' />
			</div>

			<Table className='mt-8'>
				<TableHeader>
					<TableRow className='font-[500]'>
						<TableHead className='w-[100px] text-center'>STT</TableHead>
						<TableHead>Ngaỳ đăng</TableHead>
						<TableHead>Tên dự án</TableHead>
						<TableHead>Loại dự án</TableHead>
						<TableHead>Địa chỉ</TableHead>
						<TableHead className='text-center'>Status</TableHead>
						<TableHead className='text-center'>Nơi cấp</TableHead>
						<TableHead className='text-center'>Action</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{projects.map((proj, index) => (
						<TableRow
							key={index}
							onClick={() => handleSelectProject(proj, index)}
							className={`cursor-pointer ${activeProjectIndex === index ? "bg-blue-100" : ""}`}>
							<TableCell className='text-center'>{index + 1}</TableCell>
							<TableCell>
								{new Date(proj.dateOfIssue).toLocaleDateString("en-GB", {
									day: "2-digit",
									month: "2-digit",
									year: "numeric",
								})}
							</TableCell>
							<TableCell>{proj.projectName}</TableCell>
							<TableCell>{proj.typeOfProject}</TableCell>
							<TableCell>{proj.address}</TableCell>
							<TableCell className='text-center'>
								<p className={`bg-green-200 text-green-600 rounded-lg p-1 `}>Active</p>
							</TableCell>
							<TableCell className='text-center'>{proj.placeofIssue}</TableCell>
							<TableCell className='text-center' onClick={handleEdit}>
								<p className='bg-orange-200 text-orange-600 rounded-lg p-1 '>Edit</p>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>

			<CustomModal title='Add New Project' modalProps={modalProps} className='min-w-[600px]'>
				<ProjectForm form={form} initialValues={null} />
			</CustomModal>
		</>
	)
}

export default ProjectList
