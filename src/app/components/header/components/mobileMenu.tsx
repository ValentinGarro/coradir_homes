import { useEffect, useState, useRef } from "react";
import { links } from "../header";
import Link from "next/link";
import Image from "next/image";

export default function MobileMenu(){
    const [open, setOpen] = useState(false);
    const [openHover, setOpenHover] = useState<number | null>(null);
    const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        document.body.style.overflowY = open ? "hidden" : "auto";
        return () => {
            // Limpia el timeout al desmontar
            if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        };
    }, [open]);

    const handleOpenHover = (index: number) => {
        if (openHover === index) {
            setOpenHover(null); // Si ya está abierto, lo cierra
        } else {
            setOpenHover(null); // Cierra el actual
            if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
            hoverTimeout.current = setTimeout(() => {
                setOpenHover(index); // Abre el nuevo después del delay
            }, 200); // 300ms delay para transición
        }
    };

    return(
        <div className="flex md:hidden">
            <button 
                onClick={() => setOpen(!open)} aria-label="Boton para abrir y cerrar el menu"
                className="relative z-70 flex flex-col justify-center items-center gap-1 w-12 cursor-pointer rounded-full hover:bg-gray/20 py-4 px-3 transition-all duration-300 ease-in-out"
            >
                <span className="slider-burger transition-all duration-300 ease-in-out" 
                    style={
                        open ? { backgroundColor: "var(--color-white)", position: "absolute", transform: "rotate(45deg)", width:"2em" } : 
                        { backgroundColor: "var(--color-black)" }
                    }
                ></span>
                <span className="slider-burger transition-all duration-300 ease-in-out" 
                    style={
                        open ? { backgroundColor: "var(--color-white)", display: "none"} : 
                        { backgroundColor: "var(--color-black)", display: "block"}
                    }
                ></span>
                <span className="slider-burger transition-all duration-300 ease-in-out" 
                    style={
                        open ? { backgroundColor: "var(--color-white)", position: "absolute" , transform: "rotate(-45deg) ", width:"2em"  } : 
                        { backgroundColor: "var(--color-black)" }
                    }
                ></span>
            </button> 
            <div className="
                fixed top-0 right-0 w-[90%] h-[100vh] bg-gradient-to-bl from-blue  to-gray z-60 transition-all duration-300 ease-in-out
                p-10 pl-0 pt-5  flex flex-col justify-start items-start 
                "
                style={{ 
                    transform: open ? "translateX(0)" : "translateX(100%)", 
                    opacity: open ? 1 : 0,
                    visibility: open ? "visible" : "hidden" 
                }}
            >
                <Link href="/" className="-ml-10 h-20 flex items-center justify-center overflow-hidden">
                    <Image 
                        priority={true}
                        loading="eager"
                        src="/img/marca blanco.png" 
                        alt="Logo Coradir Homes" 
                    aria-label="Logo Coradir Homes"
                    width={1000} 
                    height={1000} 
                    className="w-60 h-60 "
                    />
                </Link>
                <section className="flex flex-col justify-start pl-10 items-start gap-10 w-full ">
                    {links.map((link, index) => (
                        <div key={index} className="flex flex-col justify-start items-start">
                            <span className="block border-l-1 border-b-1 border-white h-10 w-10"> </span>
                            <div className="flex flex-col justify-start  ml-12 items-start gap-1 -mt-6" >
                                <div 
                                    className="relative w-56 flex gap-3 items-center justify-center text-white 
                                    font-raleway px-5 py-2 rounded-3xl"
                                    style={{
                                        backgroundColor: openHover === index ? "rgba(255,255,255,0.1)" : "" 
                                    }}
                                    onClick={link.href !== "#" ? () => setOpen(false) : () => handleOpenHover(index)}
                                > 
                                    <Link href={link.href} className="w-full" > {link.label} </Link>
                                    {link.hover && (
                                        <span 
                                            className="flex justify-start items-center text-center text-white font-raleway rotate-270 text-2xl" 
                                            
                                            aria-label="Boton para abrir y cerrar el submenu"
                                            style={{
                                                transform: openHover === index ? "rotate(-180deg)" : "rotate(0deg)",
                                                transition: "transform 0.3s ease-in-out"
                                            }}
                                        >
                                            {"<"}
                                        </span>
                                    )}
                                </div> 
                                    <div
                                    className={
                                      "flex flex-col py-3 gap-3 menu-submenu-transition " +
                                      (openHover === index ? " menu-submenu-open" : "")
                                    }
                                  >
                                    {link.hover && link.hover.map((hover, idx) => (
                                      <Link
                                        key={idx}
                                        href={hover.href}
                                        className="text-center text-white font-raleway px-5 w-full py-2 rounded-3xl"
                                        style={{
                                          backgroundColor: "rgba(255,255,255,0.1)",
                                        }}
                                        onClick={() => setOpen(false)}
                                      >
                                        {hover.label}
                                      </Link>
                                    ))}
                                  </div> 

                            </div>
                        </div>
                    ))}
                </section>                 
            </div> 
        </div>
    )
}