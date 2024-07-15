import React, { useState } from "react"
import { Modal, Form } from "antd"

const useModalHook = ({ onSubmit }) => {
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [form] = Form.useForm()

	const showModal = () => {
		setIsModalVisible(true)
	}

	const handleOk = () => {
		form.validateFields()
			.then((values) => {
				// form.resetFields()
				onSubmit(values)
				setIsModalVisible(false)
			})
			.catch((info) => {
				console.log("Validate Failed:", info)
			})
	}

	const handleCancel = () => {
		setIsModalVisible(false)
	}

	const modalProps = {
		visible: isModalVisible,
		onOk: handleOk,
		onCancel: handleCancel,
		okText: "Save",
		cancelText: "Back",
	}

	return { showModal, modalProps, form }
}

export default useModalHook
