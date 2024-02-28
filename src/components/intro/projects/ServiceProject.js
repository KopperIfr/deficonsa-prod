export default function ServiceProject({service}) {
    return(
        <>
            { service ? (
                <p className="text-[#edb439] font-medium">
                    Reforma
                </p>
            ) : (
                <p className="text-[#96125b] font-medium">
                    Construccion
                </p>
            )}
        </>
    )
}