"use client";
import NavBarItems from "./NavBarItems";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { animationNAV } from "./animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import HeaderPaddingWrapper from "../wrapper/HeaderPaddingWrapper";
import MenuIcon from "./MenuIcon";
import PhoneLogo from "./PhoneLogo";
import Logo2 from "./Logo2";

export default function NavBar() {
    return (
        <header className="hidden nav-lg:flex h-[5rem] tiny-460:h-[7rem] justify-center absolute top-0 left-0 w-full z-[60] tiny-460:border-[#e2cb8b45] tiny-460:border-b-[.1rem] nav-lg:h-[10rem] 3xl:h-[12rem]">
            <HeaderPaddingWrapper>
                <div className="w-full h-full flex justify-center sm:justify-between items-center nav-lg:justify-evenly">
                    <Logo2 className="hidden tiny-460:block overflow-hidden h-[5rem] nav-lg:h-[10rem] 3xl:h-[13rem] 3xl:w-[13rem]"/>
                    <motion.nav
                    variants={animationNAV}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once:true}}
                    className="hidden nav-lg:flex items-center  gap-x-12  justify-between">
                        <div className="flex gap-8 text-[.9rem] text-white antialiased xl:mr-[3rem] 2xl:mr-[5rem] 3xl:text-[1.2rem]">
                            <NavBarItems />
                        </div>
                        <div className="flex items-center 3xl:ml-[2rem]">
                                <p className=" text-white text-[.9rem] antialiased mr-[1rem]">
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </p>
                            <div className="p-[.4rem] px-[.8rem] rounded-[.3rem] border-[#ffffff] border-[.01rem] text-white">
                                <p className="text-[.7rem] 3xl:text-[1rem]">
                                    ES
                                </p>
                            </div>
                        </div>
                    </motion.nav>
                </div>
            </HeaderPaddingWrapper>
        </header>
    );
}


