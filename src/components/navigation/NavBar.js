"use client";
import Image from "next/image";
import PaddingWrapper from "../wrapper/PaddingWrapper";
import NavBarItems from "./NavBarItems";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { animationNAV } from "./animations";

export default function NavBar() {
    return (
        <header className="flex justify-center absolute top-0 left-0 w-full z-20 border-b-white/50 border-b-[.1rem]">
            <PaddingWrapper>
                <motion.nav
                variants={animationNAV}
                initial="initial"
                whileInView="animate"
                viewport={{once:true}}
                className="flex justify-between items-center">
                    <Logo />
                    <div className="flex gap-8 text-[.9rem] text-white antialiased">
                        <NavBarItems />
                    </div>
                    <div className="w-[10rem] flex items-center justify-end">
                            <p className=" text-white text-[.9rem] antialiased mr-[1rem]">
                                LOGIN
                            </p>
                        <div className="p-[.4rem] px-[.8rem] rounded-[.3rem] border-[#ffffff] border-[.01rem] text-white">
                            <p className="text-[.7rem]">
                                ES
                            </p>
                        </div>
                    </div>
                </motion.nav>
            </PaddingWrapper>
        </header>
    );
}
