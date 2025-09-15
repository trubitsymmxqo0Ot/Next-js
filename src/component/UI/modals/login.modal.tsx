"use client";

import CustomModal from "@/component/common/modal";
import LoginForm from "@/forms/login.form";
import { FC } from "react";

interface LoginModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const LoginModal: FC<LoginModalProps> = (props) => {
	const { isOpen, onClose } = props;
	return (
		<CustomModal isOpen={isOpen} onClose={onClose} title="Войти в аккаунт">
			<LoginForm onClose={onClose}/>
		</CustomModal>
	)
}

export default LoginModal;