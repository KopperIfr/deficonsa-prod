"use client";
import { useContext,  createContext, useState } from "react";

export const ActiveMenuContext = createContext(null);

export default function ActiveMenuContextProvider({children}) {
    const [activeMenu, setActiveMenu] = useState(false);
    const [scrollY, setScrollY] = useState(false);
    return(
        <ActiveMenuContext.Provider value={{activeMenu, setActiveMenu, scrollY, setScrollY}}>
            {children}
        </ActiveMenuContext.Provider>
    )
}

export function useActiveMenuContext() {
    const context = useContext(ActiveMenuContext);

    if(context === null) {
        throw new Error('Active Menu Context must be used within its brackets');
    }

    return context;
}