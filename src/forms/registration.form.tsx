"use state";
import { Form } from "@heroui/form";
import { Input } from "@heroui/react";
import React, { FC, useState } from "react";
import { Button } from "@heroui/react";
interface registrationFormProps {
  onClose: () => void;
}

const RegistrationForm: FC<registrationFormProps> = (props) => {
  const { onClose } = props;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email: string) => {
    const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegexp.test(email);
  };

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
          if (!validateEmail(value)) return "Некорректный email";
          return null;
        }}
      />
      <Input
        isRequired
        name="Password"
        placeholder="Введите ваш пароль"
        type="password"
        value={formData.password}
        className="mb-4"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        validate={(value) => {
          if (!value) return "Пароль обязателен";
          if (value.length < 6) return "Пароль должен быть не менее 6 символов";
          return null;
        }}
      />
      <Input
        isRequired
        name="Password"
        placeholder="Подтвердите ваш пароль"
        className="mb-4"
        type="password"
        value={formData.confirmPassword}
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
        validate={(value) => {
          if (!value) return "Подтверждение пароля обязательно";
          if (value !== formData.password) return "Пароли не совпали";
          return null;
        }}
      />
      <div className="w-full flex justify-between">
        <Button onPress={onClose}>Отмена</Button> {/*onPress вместо onClick*/}
        <Button type="submit" color="primary">
          Зарегестрироваться
        </Button>
      </div>
    </Form>
  );
};

export default RegistrationForm;
