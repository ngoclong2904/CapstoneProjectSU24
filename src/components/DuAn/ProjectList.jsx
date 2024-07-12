import React from "react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const ProjectList = () => {
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
						<TableHead className='text-center'>Staff</TableHead>
						<TableHead className='text-center'>Status</TableHead>
						<TableHead className='text-center'>Action</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className='text-center'>1</TableCell>
						<TableCell>29/01/2023</TableCell>
						<TableCell>The Beverly - Vinhomes Ocean Park</TableCell>
						<TableCell>Căn hộ chung cư</TableCell>
						<TableCell>Đường Nguyễn Tất Thành, Phường Hòa Hiệp Nam, Quận Liên Chiểu, Đà Nẵng.</TableCell>
						<TableCell className='text-center'>Kim Huyền Linh</TableCell>
						<TableCell className='text-center'>Active</TableCell>
						<TableCell className='text-center'>...</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	)
}

export default ProjectList
