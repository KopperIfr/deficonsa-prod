"use client";
import House from "../elements/House";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { animateBTM_TOP } from "@/config/animations";
import { cn } from "@/lib/utils";
import Shape from "./Shape";

export default function Service({service, index}) {
    console.log(index);
    return(
        <div
        className={cn("flex flex-col justify-center items-center py-[4rem] flex-grow 2xl:pt-[8rem]", {'xl:border-x-[.1rem] xl:border-x-[#e2cb8b]' : index === 1})}>
            <Shape shape={service.shape} />
            <p className="text-[1.2rem] text-[#e7c159] text-center mt-[1rem]">{service.name}</p>
            <p className="text-center text-white/75 max-w-[17rem] mt-[.8rem] md:max-w-[19rem]">
                {service.description}
            </p>
            <Link href='/contacto'
            className=" text-white py-[.5rem] px-[2rem] rounded-[1rem] border-[.01rem] border-[#e2cb8b] font-medium mt-[2rem]"> 
                Contactar
            </Link>
        </div>
    )
}