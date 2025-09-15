"use client"
import { Button, Form, Input } from "@heroui/react";
import React, { useState, FC } from "react";

interface LoginFormProps {
	onClose: () => void; 
}

const LoginForm = (props: LoginFormProps) => {

  const { onClose } = props;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted ", formData);

    onClose();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        aria-label="Email"
        isRequired
        name="email"
        placeholder="Введите ваш email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="mb-4"
        validate={(value) => {
          if (!value) return "Почта обязательна";
          return null;
        }}
      />
      <Input
        isRequired
        name="Password"
        placeholder="Введите ваш пароль"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        className="mb-4"
        validate={(value) => {
          if (!value) return "Пароль обязателен";
          return null;
        }}
      />
	  <div className="w-full flex justify-between">
		<Button onPress={onClose}>Отмена</Button> {/*onPress вместо onClick*/}
		<Button type="submit" color="primary">Войти</Button>
	  </div>
    </Form>
  );
};

export default LoginForm;