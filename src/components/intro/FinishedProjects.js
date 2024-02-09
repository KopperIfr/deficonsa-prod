"use client";
import { PROYECTS } from "@/config/data"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { animationPROJECTS } from "./animations";

export default function FinishedProyects() {
    return(
        <div className="w-full mt-[10rem] flex justify-between gap-12 pb-[2rem]">
            {
                PROYECTS.map((elem, i) => (
                    <motion.div
                    variants={animationPROJECTS}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}}
                    custom={i}
                    key={elem.name}
                    className="w-[20rem] overflow-hidden  relative z-20">
                        <div className="bg-white w-full pb-[3rem]">
                            <div className="absolute h-2/3 w-full top-[20%] left-[8rem]">
                                <Image 
                                src={elem.plano}
                                alt="null"
                                fill
                                sizes="(max-width: 5px), (max-height: 5px)"
                                className="w-full h-full object-contain opacity-50 saturate-0 rotate-45"/>
                            </div>
                            <div className="h-[13rem] w-full relative">
                                <Image 
                                src={elem.img}
                                alt="null"
                                fill
                                sizes="(max-width: 5px), (max-height: 5px)"
                                className="w-full h-full top-0 left-0 object-cover"/>
                            </div>
                            <div className="w-full px-[1.5rem] pt-[1rem] font-medium z-20">
                                {
                                    elem.process ? (
                                        <p className="text-[#edb439]">
                                            Reforma
                                        </p>
                                    ) : (
                                        <p className="text-[#96125b]">
                                            Construccion
                                        </p>
                                    )
                                }
                            </div>
                            <div className="w-full px-[1.5rem] pt-[1rem]">
                                <h3 className="text-[3rem] font-normal leading-[3.1rem] text-black/75 relative z-20">
                                    {elem.name}
                                </h3>
                            </div>
                            <div className="w-full p-[1rem] px-[1.5rem]">
                                <p className="text-[1.05rem] text-start font-light text-black/75 relative z-20">
                                    {elem.description}
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-[5rem] p-[1rem] border-[.01rem] bg-white/10 flex justify-center items-center text-white cursor-pointer">
                            <Link
                            href="#"
                            className="flex gap-4 items-center font-semibold">
                                <svg className="w-[1rem] h-[1rem]" fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M416,473.6c0-21.207,17.193-38.4,38.4-38.4H96c-21.207,0-38.4,17.193-38.4,38.4S74.793,512,96,512h358.4 C433.193,512,416,494.807,416,473.6z"></path> </g> </g> <g> <g> <rect x="179.2" y="121.6" width="153.6" height="64"></rect> </g> </g> <g> <g> <path d="M96,0C74.793,0,57.6,17.193,57.6,38.4v368.732C68.906,400.575,82.016,396.8,96,396.8h358.4V0H96z M371.2,224H140.8V83.2 h230.4V224z"></path> </g> </g> </g></svg>
                                VER PROYECTO
                            </Link>
                        </div>
                    </motion.div>
                ))
            }
        </div>
    )
}