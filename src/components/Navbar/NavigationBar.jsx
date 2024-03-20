"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,

} from "@nextui-org/react";

const Navigationbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <Navbar onMenuOpenChange={setIsMenuOpen} className="dark text-foreground">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <p className="font-bold text-inherit">LOGO</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link href="/" color="foreground" aria-current="page">
              Home
            </Link>
          </NavbarItem>

          <NavbarItem>
          
            <Link href="/blogs" aria-current="page" color="foreground">
              Our Blogs
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/contact_us" color="foreground" aria-current="page">
              Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className=" bg-slate-900 text-center" id="nav_ul">
          <NavbarMenuItem>
            <Link href="#" size="lg" color="!foreground">
              {" "}
              Home
            </Link>
          </NavbarMenuItem>

          <NavbarMenuItem className="mt-4">
            <Link href="#" size="lg" color="!foreground">
              {" "}
              Our Blogs
            </Link>
          </NavbarMenuItem>

          <NavbarMenuItem className="mt-4">
            <Link href="contactus" size="lg" color="!foreground">
              {" "}
              Contact Us{" "}
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
