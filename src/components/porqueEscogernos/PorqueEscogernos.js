"use client";
import HouseOutlineExtraLight from "../elements/HouseOutlineExtraLight";
import PaddingWrapper from "../wrapper/PaddingWrapper";
import Image from "next/image";
import { motion } from "framer-motion";
import { animateBTM_TOP } from "@/config/animations";

export default function PorqueEscogernos() {
    return(
        <div className="bg-white min-h-[100vh] w-full relative overflow-hidden pb-[10rem]">
            <HouseOutlineExtraLight className="top-[-20rem] right-[-20rem] rotate-0" />
            <HouseOutlineExtraLight className="top-[20rem] left-[-40rem] rotate-45" />
            <div className="w-full mt-[4rem]">
                <PaddingWrapper>
                    <motion.p
                    variants={animateBTM_TOP}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}}
                    custom={1} 
                    className="text-[#bb9c47] text-[1.3rem] font-medium mb-[1rem]">PORQUÉ NOSOTROS
                    </motion.p>
                    <motion.div 
                    variants={animateBTM_TOP}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}}
                    custom={2}
                    className="text-[2.2rem] font-semibold antialiased leading-[3rem] text-black/85">
                        <p>SOMOS LOS MEJORES,</p>
                        <p>LAS MEJORES SOLUCIONES</p>
                        <p>Y LA MEJOR CALIDAD</p>
                    </motion.div>

                    <div className="w-full flex flex-col mt-[3.5rem]">


                        <motion.div 
                        variants={animateBTM_TOP}
                        initial="initial"
                        whileInView="animate"
                        viewport={{once: true}}
                        custom={1}
                        className="w-full grid grid-cols-2">
                            <div className="h-[17rem] pl-[3rem]">
                                <p className="text-black/35 font-semibold text-[5rem]">01</p>
                                <p className="text-[#bb9c47] text-[1.4rem] font-medium antialiased mb-[.4rem]">Experiencia y Conocimiento</p>
                                <p className="leading-[2rem] max-w-[30rem] text-[.95rem]">
                                Contamos con profesionales con experiencia y conocimientos especializados en diferentes áreas de la construcción, por lo que garantizamos un trabajo de la mas alta calidad
                                </p>
                            </div>
                            <div className="relative flex justify-center mr-[3rem]">
                                <Image 
                                src='/imgs/intro.jpg'
                                alt="img"
                                fill
                                sizes="(max-width: 5px), (max-height: 5px)"
                                className="object-cover"/>
                            </div>
                        </motion.div>




                        <motion.div 
                        variants={animateBTM_TOP}
                        initial="initial"
                        whileInView="animate"
                        viewport={{once: true}}
                        custom={2}
                        className="w-full grid grid-cols-2 mt-[6rem]">
                            <div className="relative flex justify-center ml-[3rem]">
                                <Image 
                                src='/imgs/intro2.jpg'
                                alt="img"
                                fill
                                sizes="(max-width: 5px), (max-height: 5px)"
                                className="object-cover"/>
                            </div>
                            <div className="h-[17rem] pl-[3rem]">
                                <p className="text-black/35 font-semibold text-[5rem]">02</p>
                                <p className="text-[#bb9c47] text-[1.4rem] font-medium antialiased mb-[.4rem]">Garantia y Seguro</p>
                                <p className="leading-[2rem] max-w-[30rem] text-[.95rem]">
                                Contamos con profesionales con experiencia y conocimientos especializados en diferentes áreas de la construcción, por lo que garantizamos un trabajo de la mas alta calidad
                                </p>
                            </div>
                        </motion.div>



                        <motion.div 
                        variants={animateBTM_TOP}
                        initial="initial"
                        whileInView="animate"
                        viewport={{once: true}}
                        custom={3}
                        className="w-full grid grid-cols-2 mt-[6rem]">
                            <div className="h-[17rem] pl-[3rem]">
                                <p className="text-black/35 font-semibold text-[5rem]">03</p>
                                <p className="text-[#bb9c47] text-[1.4rem] font-medium antialiased mb-[.4rem]">Flexibilidad y Adaptabilidad</p>
                                <p className="leading-[2rem] max-w-[30rem] text-[.95rem]">
                                Contamos con profesionales con experiencia y conocimientos especializados en diferentes áreas de la construcción, por lo que garantizamos un trabajo de la mas alta calidad
                                </p>
                            </div>
                            <div className="relative flex justify-center mr-[3rem]">
                                <Image 
                                src='/imgs/intro7.jpg'
                                alt="img"
                                fill
                                sizes="(max-width: 5px), (max-height: 5px)"
                                className="object-cover"/>
                            </div>
                        </motion.div>



                    </div>
                </PaddingWrapper>
            </div>
        </div>
    )
}