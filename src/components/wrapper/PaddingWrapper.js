import Image from "next/image";

export default function PaddingWrapper({children}) {
    return (
        <div className="w-full h-full sm:px-[2rem] md:px-[2rem] lg:px-[5rem] xl:px-[10rem] relative">
            {children}
        </div>
    );
}
