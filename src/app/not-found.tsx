"use client"
import { Button } from "@heroui/react";
import Link from "next/link";

const notFoundPage = () => {
	return (
		<div className="text-center flex justify-center items-center flex-col absolute top-[50%] left-[50%] transform-[translate(-50%,-50%)]">
			<div className="text-9xl font-bold leading-none">404</div>
			<div className="text-3xl mb-13 leading-none">Страница не найдена</div>
			<Button as={Link} href="/" color="primary">Вернуться назад</Button>
		</div>
		
	)
}

export default notFoundPage;