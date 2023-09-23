"use client";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function NavbarComp() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/">
          <p className="font-bold text-inherit">ACME</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem
          className={` ${pathname == "/about" ? "text-blue-300" : ""}`}
        >
          <Link href="/about">About</Link>
        </NavbarItem>
        <NavbarItem
          className={` ${pathname == "/products" ? "text-blue-300" : ""}`}
          isActive
        >
          <Link href="/products">Products</Link>
        </NavbarItem>
        <NavbarItem
          className={` ${pathname == "/test" ? "text-blue-300" : ""}`}
        >
          <Link href="#">Integrations</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            onClick={() => router.push("/register")}
            color="primary"
            variant="flat"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
