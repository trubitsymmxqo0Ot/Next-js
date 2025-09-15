"use client"
import CustomModal from "@/component/common/modal";
import { FC } from "react";
import RegistrationForm from "@/forms/registration.form";


interface RegistrationFormProps {
	isOpen: boolean;
	onClose: () => void;
}

const RegistrationModal: FC<RegistrationFormProps> = (props) => {
	const {isOpen, onClose} = props;
	return (
		<CustomModal isOpen={isOpen} onClose={onClose} title="Создать аккаунт">
			<RegistrationForm onClose={onClose}/>
		</CustomModal>
	)
}

export default RegistrationModal;