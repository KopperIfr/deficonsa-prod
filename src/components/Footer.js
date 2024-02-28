"use client";
import PaddingWrapper from "./wrapper/PaddingWrapper"
import Logo from "./navigation/Logo"
import Circle from "./elements/Circle"
import HouseOutlineExtraLight from "./elements/HouseOutlineExtraLight"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMap, faMapLocation, faMapLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { motion } from "framer-motion"
import { animateBTM_TOP } from "@/config/animations"
import PhoneLogo from "./navigation/PhoneLogo";

export default function Footer() {
    return(
        <footer className="w-full h-[42rem] bg-[#1b1a18] relative overflow-hidden pt-[4rem]">
            <Circle className="top-[-40rem] right-[-35rem]" />
            <HouseOutlineExtraLight className="top-[-28rem] right-[-30rem] opacity-5" />
            <Logo className="w-[18rem] h-[18rem] absolute top-[0] right-[10rem] block" />
            <Circle className="top-[10rem] right-[0rem] left-[-40rem] " />
            <HouseOutlineExtraLight className="top-[20rem] right-[0rem] left-[-25rem] w-[50rem] h-[50rem] opacity-20 rotate-0" />
            <PaddingWrapper>


                <motion.div 
                variants={animateBTM_TOP}
                initial="initial"
                whileInView="animate"
                viewport={{once: true}}
                custom={0}
                className="flex w-full justify-between">
                    <h3 className="text-[#e2cb8b] text-[2.2rem] font-medium">
                        CON NOSOTROS TUS SUEÑOS <br /> SE HACEN REALIDAD
                    </h3>
                </motion.div>



                <div className="flex w-full mt-[6rem] justify-start gap-48">
                    <motion.div 
                    variants={animateBTM_TOP}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}}
                    custom={2}
                    className="flex flex-col text-white/75 text-[1rem] gap-3">
                        <h4 className="text-[#e2cb8b] text-[1.5rem]">Empresa</h4>
                        <p>Deficonsa</p>
                        <p>Sobre Nosotros</p>
                        <p>Proyectos</p>
                        <p>Galeria</p>
                        <p>Contacto</p>
                    </motion.div>



                    <motion.div 
                    variants={animateBTM_TOP}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}}
                    custom={3}
                    className="flex flex-col text-white/75 text-[1rem] gap-3">
                        <h4 className="text-[#e2cb8b] text-[1.5rem]">Informacion de Contacto</h4>
                        <p>
                            <FontAwesomeIcon icon={faPhone} className="mr-[1rem]" />
                            +34 640 849 030
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} className="mr-[1rem]" />
                            contacto@deficonsa.com
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faMapLocationDot} className="mr-[1rem]" />
                            Madrid, España
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faMap} className="mr-[1rem]" />
                            Emiratos Arabes, Dubai
                        </p>
                    </motion.div>


                    <motion.div 
                    variants={animateBTM_TOP}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}}
                    custom={4}
                    className="flex flex-col text-white/75 text-[1rem] gap-3">
                        <h4 className="text-[#e2cb8b] text-[1.5rem]">
                            A su disposicion
                        </h4>
                        <p className="">Lunes - Viernes 10AM - 18PM</p>
                        <p>Sabado - No disponible</p>
                        <p>Domingo - 12AM - 17PM</p>
                    </motion.div>
                    
                </div>
            </PaddingWrapper>
            
            <div
            className="w-full absolute bottom-0 left-0 h-[6rem] border-t-[.1rem] border-[#e2cb8b]">
                <PaddingWrapper>
                    <div className="w-full h-full flex items-center justify-between text-white/75">
                        <div className="text-[.9rem] flex flex-col items-center">
                            <p className="text-[.9rem]">
                                © Empresa Deficonsa, todos los derechos reservados
                            </p>
                            <p> Politica de privadidad | Politica de cookies </p>
                        </div>
                        <div className="flex gap-5 text-[#e2cb8b] text-[1.1rem]">
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                    </div>
                </PaddingWrapper>
            </div>
        </footer>
    )
}