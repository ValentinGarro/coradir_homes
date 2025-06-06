import Image from "next/image";

export default function Header() {
    const links = [
        { href: "/", label: "Proyectos de inversión" },
        { href: "/", label: "Alquileres" },
        { href: "/", label: "Beneficios" },
        { href: "/", label: "Sobre nosotros" },
    ];
    return (
        <header className="flex justify-start items-center sticky top-0 z-50 bg-white  xl:max-h-40 container"> 
            <Image 
                loading="lazy"
                src="/img/marca.png" 
                alt="Logo Coradir Homes" 
                aria-label="Logo Coradir Homes"
                width={1000} 
                height={1000} 
                className="w-90 h-90"
            />
            <div className="w-full flex justify-end">
                <div className="flex items-center justify-evenly gap-10 px-5">  
                    {links.map((link,index) => ( 
                        <a 
                            href={link.href} 
                            key={`navlink-${index}`}
                            className="text-center text-gray font-raleway uppercase xl:text-lg font-bold xl:max-w-40"
                        >{link.label}</a> 
                    ))} 
                </div>
            </div>
        </header>
    );
}