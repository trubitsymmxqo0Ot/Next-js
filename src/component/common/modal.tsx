"use client"
import { Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/modal";
import { FC, ReactNode } from "react";

interface CustomModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: ReactNode;
	size?: "xs" | "sm" | "md" | "lg" | "xl"
}

const CustomModal:FC<CustomModalProps> = (props) => {
	const {isOpen, onClose, title, children, size = 'xs'} = props;
	return (
		<Modal isOpen={isOpen} onClose={onClose} size={size}>
			<ModalContent>
				<ModalHeader>
					<h3 className="text-gray-950">{title}</h3>
				</ModalHeader>
				<ModalBody>{children}</ModalBody>
			</ModalContent>
		</Modal>
	)
}

export default CustomModal;