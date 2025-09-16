"use server";
import { IFormData } from "@/types/types";
import prisma from '@/utils/prisma'; //Экспортируем именно из файла, который я создал, а не из node_modules!

export async function registerUser(formData: IFormData) {
  const { email, password, confirmPassword } = formData;
  try {
	const user = await prisma.user.create({
		data: {
			email: email,
			password: password,
		}
	})

	return user;
  } catch (e) {
    console.error("Ошибка! Данные отправить не удалось: ", e);
    return { error: e };
  }
}
