'use client'
import React from "react"
import Image from "next/image";
import logo from "@/assets/LOGOOKE.svg"
import  {Input}  from "@nextui-org/input";
import {SearchIcon} from "./SearchIcon.jsx";
import { Button } from "@nextui-org/button";

const Landing = () => {
    return (
        <div className="relative">
            <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
                <Image className="" src={logo} width="400" alt='Logo SIPERKASA'/>
            </div>
            <div className="mb-28 flex md:flex-row">
            <Input
            // isClearable
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focused=true]:bg-default-200/50",
                "dark:group-data-[focused=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
            radius="full"
            size="lg"
          placeholder="Cari buku"
          labelPlacement="outside"
          
          />
          <Button size="lg" radius="full" color="primary" variant="shadow" className="flex ml-5 shadow-md" endContent={<SearchIcon className="stroke-white text-xl text-default-400 pointer-events-none flex-shrink-0" />}>
        Cari
      </Button> 
      </div>

        </div>
        
      );
}
 
export default Landing;