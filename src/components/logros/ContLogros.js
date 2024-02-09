"use client";
import PaddingWrapper from "../wrapper/PaddingWrapper";
import House from "../elements/House";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { animateBTM_TOP } from "@/config/animations";

export default function ContLogros() {
    return(
        <div className="w-full flex flex-col mt-[5rem]">


            <div className="w-full h-[10rem] flex  border-b-[.1rem] border-[#e2cb8b]">
                <PaddingWrapper>
                    <div className="w-full h-full flex">


                        <motion.div
                        variants={animateBTM_TOP}
                        initial="initial"
                        whileInView="animate"
                        viewport={{once: true}}
                        custom={0} 
                        className="w-1/3 h-full border-r-[.1rem] border-[#e2cb8b] flex justify-start items-center">
                            <h2 className="text-white text-[2rem] font-semibold">SERVICIOS / <b className="text-[#e2cb8b] font-medium">LOGROS</b></h2>
                        </motion.div>


                        <div className="w-2/3 h-full flex justify-between pl-[3rem]">


                            <motion.div
                            variants={animateBTM_TOP}
                            initial="initial"
                            whileInView="animate"
                            viewport={{once: true}}
                            custom={1}
                            className="text-white flex flex-col items-center">
                                <p className="text-[3.5rem] font-semibold">
                                    20<b className="text-[#e2cb8b] font-medium">+</b>
                                </p>
                                <p className="text-white/75">
                                    AÑOS DE EXPERIENCIA
                                </p>
                            </motion.div>




                            <motion.div 
                            variants={animateBTM_TOP}
                            initial="initial"
                            whileInView="animate"
                            viewport={{once: true}}
                            custom={2}
                            className="text-white flex flex-col items-center">
                                <p className="text-[3.5rem] font-semibold">
                                    10<b className="text-[#e2cb8b] font-medium">+</b>
                                </p>
                                <p className="text-white/75">
                                    COMPAÑIAS
                                </p>
                            </motion.div>



                            <motion.div 
                            variants={animateBTM_TOP}
                            initial="initial"
                            whileInView="animate"
                            viewport={{once: true}}
                            custom={3}
                            className="text-white flex flex-col items-center">
                                <p className="text-[3.5rem] font-semibold">
                                    500<b className="text-[#e2cb8b] font-medium">+</b>
                                </p>
                                <p className="text-white/75">
                                    CLIENTES SATISFECHOS
                                </p>
                            </motion.div>




                            <motion.div 
                            variants={animateBTM_TOP}
                            initial="initial"
                            whileInView="animate"
                            viewport={{once: true}}
                            custom={4}
                            className="text-white flex flex-col items-center">
                                <p className="text-[3.5rem] font-semibold">
                                    80<b className="text-[#e2cb8b] font-medium">+</b>
                                </p>
                                <p className="text-white/75">
                                    PROYECTOS FINALIZADOS
                                </p>
                            </motion.div>



                        </div>
                    </div>
                </PaddingWrapper>
            </div>






            <div className="flex w-full h-[40rem] relative z-10">





                <motion.div
                variants={animateBTM_TOP}
                initial="initial"
                whileInView="animate"
                viewport={{once: true}}
                custom={1} 
                className="w-1/3 h-full flex flex-col justify-center items-center pt-[2rem]">
                    <House className="relative w-[20rem] h-[20rem]" img='/imgs/services/reforma.jpg' />
                    <p className="text-[1.4rem] text-[#e7c159] text-center">Construccion y Reformas</p>
                    <p className="text-center text-white/75 max-w-[20rem] mt-[.5rem]">
                        Llevar a cabo la casa que siempre deseó, nuestra especialidad
                    </p>
                    <Link href='/contacto'
                    className=" text-white py-[.5rem] px-[2rem] rounded-[1rem] border-[.01rem] border-[#e2cb8b] font-medium mt-[2rem]"> 
                        Contactar
                    </Link>
                </motion.div>




                <motion.div 
                variants={animateBTM_TOP}
                initial="initial"
                whileInView="animate"
                viewport={{once: true}}
                custom={2}
                className="w-1/3 h-full flex flex-col justify-center items-center pt-[2rem] border-r-[.1rem] border-l-[.1rem] border-[#e2cb8b]">

                    <div className="relative w-[17rem] h-[17rem] rounded-br-[8rem] rounded-bl-[8rem] overflow-hidden mb-[2rem]">
                        <Image 
                        src='/imgs/services/piscina.jpg'
                        alt="img"
                        fill
                        sizes="(max-width: 5px),(max-height: 5px)"
                        className="object-cover object-center absolute w-full h-full"/>
                    </div>

                    <p className="text-[1.4rem] text-[#e7c159] text-center">Piscinas</p>
                    <p className="text-center text-white/75 max-w-[20rem] mt-[.5rem]">
                        Llevar a cabo la piscina que siempre desea, nuestra especialidad
                    </p>
                    <Link href='/contacto'
                    className=" text-white py-[.5rem] px-[2rem] rounded-[1rem] border-[.01rem] border-[#e2cb8b] font-medium mt-[2rem]"> 
                        Contactar
                    </Link>
                </motion.div>





                <motion.div 
                variants={animateBTM_TOP}
                initial="initial"
                whileInView="animate"
                viewport={{once: true}}
                custom={3}
                className="w-1/3 h-full flex flex-col justify-center items-center pt-[2rem]">
                    <div className="relative w-[17rem] h-[17rem] overflow-hidden mb-[2rem]">
                        <Image 
                        src='/imgs/services/arquitectura.jpg'
                        alt="img"
                        fill
                        sizes="(max-width: 5px),(max-height: 5px)"
                        className="object-cover object-center absolute w-full h-full"/>
                    </div>
                    <p className="text-[1.4rem] text-[#e7c159] text-center">Arquitectura</p>
                    <p className="text-center text-white/75 max-w-[20rem] mt-[.5rem]">
                        Llevar a cabo la casa que siempre deseó, nuestra especialidad
                    </p>
                    <Link href='/contacto'
                    className=" text-white py-[.5rem] px-[2rem] rounded-[1rem] border-[.01rem] border-[#e2cb8b] font-medium mt-[2rem]"> 
                        Contactar
                    </Link>
                </motion.div>
            </div>



        </div>
    );
}