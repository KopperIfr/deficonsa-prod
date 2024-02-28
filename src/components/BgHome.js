import Circle from "./elements/Circle"
import House from "./elements/House"
import Image from "next/image"
import HouseOutline from "./elements/HouseOutline"
import HouseOutlineLight from "./elements/HouseOutlineLight"
import HouseOutlineExtraLight from "./elements/HouseOutlineExtraLight"

export default function BgHome() {
    return(
        <div className="absolute w-full top-0 left-0 flex flex-col -z-10">
            <div className="bg-[#141413] tiny-460:h-[7rem] nav-lg:h-[10rem] relative w-full overflow-hidden transition-all duration-300"> 
                <Circle />
            </div>
            <div className="h-[53rem] tiny-460:h-[30rem] md:h-[35rem] nav-lg:h-[40rem] w-full relative overflow-hidden ">
                <div className="absolute top-0 left-0 w-full h-full bg-[#1b1a18d7] tiny-460:bg-[#1b1a18ac] z-10"></div>
                <Image 
                src='/imgs/intro4.jpg'
                alt="img"
                fill
                sizes="(max-width: 5px), (max-height: 5px)"
                className="object-cover"/>
            </div>
            <div className="bg-[#1b1a18] h-[144.1rem] tiny:h-[149rem] sm:h-[154rem] md:h-[120rem] nav-lg:h-[125rem] bg-home-1104:h-[95rem] xl:h-[73.4rem] 2xl:h-[86.4rem] relative w-full overflow-hidden"> 
                <Circle className="w-[70rem] h-[70rem] top-[105rem] 2xl:top-[50rem] left-[-40rem] sm:top-[110rem] md:top-[85rem] bg-home-1104:top-[60rem] xl:top-[45rem]" />
                <HouseOutlineExtraLight className="" />
            </div>
            
        </div>
    )
}












// <div className="bg-[#141413] h-[5rem] nav-lg:h-[10rem] relative w-full overflow-hidden transition-all duration-300"> 
// <Circle />
// </div>
// <div className="h-[40rem] w-full relative overflow-hidden ">
// <div className="absolute top-0 left-0 w-full h-full bg-[#1b1a18ac] z-10"></div>
// <Image 
// src='/imgs/intro4.jpg'
// alt="img"
// fill
// sizes="(max-width: 5px), (max-height: 5px)"
// className="object-cover"/>
// </div>
// <div className="bg-[#1b1a18] h-[135.1rem] 2xl:h-[90.1rem] relative w-full overflow-hidden"> 
// <Circle className="w-[70rem] h-[70rem] top-[90rem] 2xl:top-[50rem] left-[-40rem]" />
// <HouseOutlineExtraLight />
// </div>