import Image from "next/image";
import Link from "next/link";
import HoverLink from "./components/hover-link";

export default function Header() {
    const links = [
        { href: "/", label: <>Proyectos de <br/> inversión </> , hover: [
            { href: "/inversiones-inteligentes", label: "Inversiones Inteligentes" },
            { href: "/", label: "Instituciones" },
            { href: "/", label: "Terrenos" }, 
        ] },
        { href: "/", label: "Alquileres" , hover: [
            { href: "/", label: "Casa joven" },
            { href: "/", label: "Corporativos" }, 
        ]},
        { href: "/", label: "Beneficios" , hover:null},
        { href: "/", label: <>Sobre <br/> nosotros</> , hover:null},
    ];
    return (
        <header className="flex justify-start items-center  px-10 bg-white  xl:max-h-[30vh] container"> 
            <Link href="/" className=" h-30 my-20 flex items-center justify-center overflow-hidden">
                <Image 
                    priority={true}
                    loading="eager"
                    src="/img/marca.png" 
                    alt="Logo Coradir Homes" 
                aria-label="Logo Coradir Homes"
                width={1000} 
                height={1000} 
                className="w-90 h-90"
                />
            </Link>
            <div className="w-full flex justify-end">
                <div className="flex items-center justify-evenly gap-10 px-5">  
                    {links.map((link,index) => ( 
                        <div className="flex items-center justify-center relative py-4 p-9 xl:max-w-64 group" key={`navlink-${index}`}>
                            <Link
                                href={link.href} 
                                key={`navlink-${index}`}
                                className="relative text-center text-gray font-raleway uppercase xl:text-lg font-bold z-2"
                            >{link.label}</Link> 
                            {link.hover && (
                                <HoverLink links={link.hover} key={`hoverlink-${index}`}/>
                            )}
                        </div>
                    ))} 
                </div>
            </div>
        </header>
    );
}