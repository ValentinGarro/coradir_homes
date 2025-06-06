import Image from "next/image";

export default function Header() {
    const links = [
        { href: "/", label: "Proyectos de inversión" },
        { href: "/", label: "Alquileres" },
        { href: "/", label: "Beneficios" },
        { href: "/", label: "Sobre nosotros" },
    ];
    return (
        <header className="flex justify-between items-center sticky top-0 z-50 bg-white pt-30 pb-28 container"> 
            <Image 
                src="/logo.png" 
                alt="Logo" 
                width={100} 
                height={100} 
            />
            <nav className="flex items-center justify-evenly">  
                {links.map((link) => (
                    <li key={link.href}>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))} 
            </nav>
        </header>
    );
}