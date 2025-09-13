"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import Logo from "../../../public/logo_tatar_kitchen.png";
import Image from "next/image";
import { site } from "@/config/site.config";
import { usePathname } from "next/navigation";
export const AcmeLogo = () => {
  return (
    <Image
      src={Logo}
      alt={site.title}
      width={42}
      height={42}
      priority
      className="block mr-4"
    />
  );
};

export default function Header() {
  const path = usePathname();
  const headerMenu = () => {
    return site.paths.map((item) => {
      const isActive = path === item.path;
      return (
        <NavbarItem key={item.path}>
          <Link
            href={item.path}
            className={`p-2 ${isActive ? "text-indigo-600" : "text-white"}`}
          >
            {item.name}
          </Link>
        </NavbarItem>
      );
    });
  };
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/">
        <AcmeLogo />
        <p className="font-bold text-inherit text-white">{site.title}</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {headerMenu()}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Войти</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Зарегистрироваться
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
