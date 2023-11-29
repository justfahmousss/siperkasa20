import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar"
import {Link} from "@nextui-org/link"
import {Input} from "@nextui-org/input"
import {DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/dropdown"
import {Avatar} from "@nextui-org/avatar";
import logo from "@/assets/LOGOOKE.svg";
import {SearchIcon} from "../SearchIcon.jsx";
import Image from "next/image.js";
import Container from "@/app/Container";
const  NavBar = () => {
  return (
    <div className="
        sticky
        top-0
        w-full
        z-30
        shadow-sm
        backdrop-blur-md
        "
        >
            <div className="py-4">
                <Container>
                    <div className="flex items-center justify-between gap-3 md:gap-0">
                    <Link href={""}>
                    <Image className="" src={logo} width="200" alt='Logo SIPERKASA'/>
                    </Link>
                    {/* <div className="hidden md:block ml-auto mr-10"><Input
          placeholder="Cari buku"
          labelPlacement="outside"
          endContent={
            <SearchIcon  className="stroke-black text-xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        /></div> */}
                    <div className="flex items-center gap-8 md:gap-12">
                        <div>UserMenu</div>
                    </div>
                    </div>
                </Container>
            </div>
        </div>
  );
}
export default NavBar;
