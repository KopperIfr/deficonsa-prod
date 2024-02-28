import { motion } from "framer-motion"
import { animateBTM_TOP } from "@/config/animations"
import { cn } from "@/lib/utils"
export default function Logro({logro, number, index}) {
    return(
        <motion.div
        variants={animateBTM_TOP}
        initial="initial"
        whileInView="animate"
        viewport={{once: true}}
        custom={index}
        className={cn("text-white text-center flex flex-col items-center min-w-[8rem] max-w-[8rem] tiny:max-w-full sm:items-center nav-lg:text-[1.6rem]", 
        {'items-start' : index % 2 !== 0},
        {'items-end' : index % 2 === 0})}>
            <p className="text-[2rem] font-semibold w-full tiny:max-w-[5rem] sm:max-w-full 2xl:text-[3rem]">
                {number}<b className="text-[#e2cb8b] font-medium">+</b>
            </p>
            <p className="text-white/75 w-full tiny:max-w-[5rem] sm:max-w-full xl:text-[.9rem] 2xl:text-[1rem]">
                {logro}
            </p>
        </motion.div>
    )
}







// <motion.div
//         variants={animateBTM_TOP}
//         initial="initial"
//         whileInView="animate"
//         viewport={{once: true}}
//         custom={index}
//         className="text-white flex flex-col items-center">
//             <p className="text-[3.5rem] font-semibold">
//                 {number}<b className="text-[#e2cb8b] font-medium">+</b>
//             </p>
//             <p className="text-white/75">
//                 {logro}
//             </p>
//         </motion.div>