import Circle from "../elements/Circle"
import House from "../elements/House"
import HouseOutlineExtraLight from "../elements/HouseOutlineExtraLight"
import Description from "../intro/projects/Description"
import PaddingWrapper from "../wrapper/PaddingWrapper"
import DescriptionABOUT from "./about/DescriptionAbout"
import Heading from "./about/Heading"
import Information from "./about/Information"

export default function About() {
    return(
        <div className="w-full relative pb-[12rem] overflow-hidden pt-[6rem]">
            {/* <HouseOutlineExtraLight className="top-[-10rem] right-[-30rem]"/> */}
            <HouseOutlineExtraLight className="top-[10rem] left-[-32rem] rotate-[180deg]" />
            <HouseOutlineExtraLight className="top-[40rem] left-[32rem] rotate-[180deg]" />
            <House className="bg-[#e2cb8b] rotate-[180deg] h-[50rem] w-[50rem] top-[-10rem] right-[-25rem] opacity-50" />
            {/* <Circle className="top-[40rem] right-[50rem] opacity-20" /> */}
            <PaddingWrapper>
                {/* <Heading /> */}
                <Information />
                <DescriptionABOUT />
            </PaddingWrapper>
        </div>
    )
}