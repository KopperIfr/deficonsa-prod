import Image from "next/image";

export default function HeaderPaddingWrapper({children}) {
    return (
        <div className="w-full h-full px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[7rem] nav-lg:px-[4rem] 2xl:px-[12rem] 3xl:px-[16rem] relative">
            {children}
        </div>
    );
}