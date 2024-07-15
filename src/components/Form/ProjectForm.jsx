import { Button, Form, Input, Upload } from "antd"
import React, { useEffect } from "react"
import { BiUpload } from "react-icons/bi"

const ProjectForm = ({ form, initialValues }) => {
	useEffect(() => {
		if (initialValues) {
			form.setFieldsValue(initialValues)
		} else {
			form.resetFields()
		}
	}, [initialValues, form])

	const mock = {
		ProjectName: "Đông Dương Residence",
		CommericalName: "Biệt thự liền kề Đông Dương Residence",
		ShortName: "Đông Dương Đức Thượng",
		TypeOfProject: "khu nhà liền kề và shophouse",
		Address: "Đường Quốc lộ 32, Xã Đức Thượng, Huyện Hoài Đức, Hà Nội.",
		Commune: "Xã Đức Thượng",
		District: "Huyện Hoài Đức",
		DepositPrice: 2000000,
		Summary:
			"Dự án Đông Dương Residence (còn được gọi là dự án Đông Dương Đức Thượng) là khu nhà liền kề và shophouse với quy mô 8ha tại xã Đức Thượng, Hoài Đức, Hà Nội.",
		LicenseNo: 102371509,
		dateOfIssue: "2019-05-06T00:00:00",
		campusArea: "Khuôn viên 6000 m2",
		placeofIssue: "Sở kế hoạch và đầu tư Hà Nội",
		code: "DA-0002",
		image: "",
	}

	return (
		<Form form={form} layout='vertical' name='projectForm'>
			<Form.Item
				name='ProjectName'
				label='Tên dự án'
				rules={[
					{
						required: true,
						message: "The ProjectName field is required.",
					},
				]}>
				<Input />
			</Form.Item>
			<Form.Item
				name='CommericalName'
				label='Tên thương mại'
				rules={[
					{
						required: true,
						message: "The CommercialName field is required.",
					},
				]}>
				<Input />
			</Form.Item>
			<Form.Item
				name='ShortName'
				label='Tên ngắn gọn'
				rules={[{ required: true, message: "The ShortName field is required." }]}>
				<Input />
			</Form.Item>
			<Form.Item
				name='TypeOfProject'
				label='Loại dự án'
				rules={[{ required: true, message: "The TypeOfProject field is required." }]}>
				<Input />
			</Form.Item>
			<Form.Item
				name='Address'
				label='Địa chỉ'
				rules={[{ required: true, message: "The Address field is required." }]}>
				<Input />
			</Form.Item>
			<Form.Item
				name='Commune'
				label='Phường'
				rules={[
					{
						required: true,
						message: "The Commune field is required.",
					},
				]}>
				<Input />
			</Form.Item>
			<Form.Item
				name='District'
				label='Quận'
				rules={[{ required: true, message: "The District field is required." }]}>
				<Input />
			</Form.Item>
			<Form.Item
				name='DepositPrice'
				label='Tiền đặt cọc'
				rules={[{ required: true, message: "Please input the deposit price!" }]}>
				<Input />
			</Form.Item>
			<Form.Item
				name='Summary'
				label='Tổng quan'
				rules={[{ required: true, message: "Please input the summary!" }]}>
				<Input />
			</Form.Item>
			<Form.Item
				name='LicenseNo'
				label='Số giấy phép'
				rules={[{ required: true, message: "Please input the license number!" }]}>
				<Input />
			</Form.Item>
			<Form.Item
				name='DateOfIssue'
				label='Ngày cấp'
				rules={[{ required: true, message: "Please input the date of issue" }]}>
				<Input />
			</Form.Item>
			<Form.Item
				name='CampusArea'
				label='Diện tích'
				rules={[{ required: true, message: "Please input the area" }]}>
				<Input />
			</Form.Item>
			<Form.Item
				name='PlaceofIssue'
				label='Nơi cấp'
				rules={[{ required: true, message: "Please input the place of issue" }]}>
				<Input />
			</Form.Item>
			<Form.Item name='Code' label='Mã số'>
				<Input />
			</Form.Item>
			<Form.Item
				name='Image'
				label='Image'
				valuePropName='fileList'
				getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}>
				<Upload name='image' action='/upload.do' listType='text'>
					<Button icon={<BiUpload />}>Choose Image</Button>
				</Upload>
			</Form.Item>
		</Form>
	)
}

export default ProjectForm
