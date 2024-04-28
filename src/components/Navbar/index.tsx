"use client";

import {
  Link,
  Navbar as NXTNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { Button } from "../Button";
const NAV_LINKS = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/products",
    label: "Products",
  },
  {
    path: "/conversations",
    label: "Conversations",
  },
];
export const Navbar = () => {
  const pathname = usePathname();
  return (
    <NXTNavbar className="px-24">
      <NavbarBrand as={Link} href="/">
        <p className="font-bold text-inherit">MY coffee blog</p>
      </NavbarBrand>
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {NAV_LINKS.map((link, index) => {
          return (
            <NavbarItem isActive={pathname === link.path} key={index}>
              <Link href={link.path}>{link.label}</Link>
            </NavbarItem>
          );
        })}
      </NavbarContent> */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            label="Add new post"
            as={Link}
            color="primary"
            href="/blog/new-post"
            variant="flat"
          />
        </NavbarItem>
      </NavbarContent>
    </NXTNavbar>
  );
};
