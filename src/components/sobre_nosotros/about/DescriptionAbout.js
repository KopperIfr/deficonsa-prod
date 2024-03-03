import Image from "next/image"

export default function DescriptionABOUT() {
    return(
        <div className="w-full h-auto flex gap-x-24 mt-[10rem] px-[5rem]">
            <div className="w-[40rem] h-[30rem] relative shadow-lg p-[1rem] bg-white">
                <div className="absolute top-0 left-0 w-full h-full  z-20"></div>
                <Image 
                src='/imgs/about.png'
                alt="img"
                fill
                sizes="(max-width: 5px), (max-height: 5px)"
                className="object-cover"
                />
            </div>
            <div className="w-2/5 backdrop-blur-sm p-[1rem] py-[2rem]">
                <h3 className="text-start font-medium text-[1.8rem] text-white/85 mb-[1rem]">
                    ACERCA DE  <b className="font-medium text-[#e0bc58]">NOSOTROS</b>
                </h3>
                <p className="font-normal text-white/80 leading-[2.4rem] text-[1.2rem]">
                En Deficonsa, nos enorgullece ofrecer servicios de construcción de alta calidad respaldados por años de experiencia y un equipo de profesionales dedicados. Desde nuestras humildes raíces hasta convertirnos en una empresa líder en la industria, hemos mantenido nuestro compromiso con la excelencia, la integridad y la satisfacción del cliente en cada proyecto que emprendemos.
                </p>
            </div>
        </div>
    )
}