import { NAVBAR_ITEMS } from "@/config/data";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function NavBarItems() {
    return (
        <>
            {
                NAVBAR_ITEMS.map((item, i) => (
                    <div className="flex items-center gap-3" key={item.name}>
                        {/* {
                            item.active ? (
                                <span className="rounded-full w-[.6rem] h-[.6rem] bg-[#e2cb8b]"></span>
                            ) : (null)
                        } */}
                        <Link
                        href={item.href}
                        className={cn("pb-[.1rem] hover:text-[#e2cb8b]",{"border-b-[.1rem] border-[#e2cb8b] text-[#e2cb8b]" : item.active})}>
                            {item.name}
                        </Link>
                    </div>
                ))
            }
        </>
    );
}