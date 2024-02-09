import Circle from "./elements/Circle"
import House from "./elements/House"
import Image from "next/image"
import HouseOutline from "./elements/HouseOutline"
import HouseOutlineLight from "./elements/HouseOutlineLight"
import HouseOutlineExtraLight from "./elements/HouseOutlineExtraLight"

export default function BgHome() {
    return(
        <div className="absolute w-full top-0 left-0 flex flex-col -z-10">
            <div className="bg-[#141413] h-[10rem] relative w-full overflow-hidden"> 
                <Circle />
            </div>
            <div className="h-[40rem] w-full relative overflow-hidden ">
                <div className="absolute top-0 left-0 w-full h-full bg-[#1b1a18ac] z-10"></div>
                <Image 
                src='/imgs/intro4.jpg'
                alt="img"
                fill
                sizes="(max-width: 5px), (max-height: 5px)"
                className="object-cover"/>
            </div>
            <div className="bg-[#1b1a18] h-[90.1rem] relative w-full overflow-hidden"> 
                <Circle className="w-[70rem] h-[70rem] top-[50rem] left-[-40rem]" />
                <HouseOutlineExtraLight />
            </div>
            
        </div>
    )
}