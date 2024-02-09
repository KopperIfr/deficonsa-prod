"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { animationLTR, animationRTL } from "./animations";

export default function Leading() {
    return(
        <div className="pt-[14rem] flex justify-around">
            <motion.h1 
            variants={animationLTR}
            initial="initial"
            whileInView="animate"
            viewport={{once: true}}
            custom={2} 
            className="text-black text-[4rem] font-medium leading-[4.7rem] text-start">
                <motion.b
                className="text-[#e2cb8b] font-medium leading-[6rem]">CONSTRUIMOS <br></br></motion.b>
                <b className="text-white font-medium">LA CASA QUE <br/> SIEMPRE HAS <br/> SOÑADO</b>
            </motion.h1>
            <div className="w-[25rem] h-[5rem] text-white/80 text-[.9rem] font-light">
                <motion.p
                variants={animationRTL}
                initial="initial"
                whileInView="animate"
                viewport={{once: true}}
                custom={0} 
                className="pb-[1.2rem]">
                    En Deficonsa estaremos siempre a plena disposición. Sientase libre de contactarnos
                </motion.p>
                <motion.div
                variants={animationRTL}
                initial="initial"
                whileInView="animate"
                viewport={{once: true}}
                custom={2}
                >
                    <Link href='/contacto'
                    className="py-[.5rem] px-[2rem] rounded-[1rem] bg-[#d5a72a] font-medium"> 
                        Contactar
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}