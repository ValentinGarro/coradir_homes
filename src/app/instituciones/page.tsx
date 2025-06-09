import Image from "next/image"
import Ofert from "./components/ofert"
import CardInvestment from "../components/cardInvestment"
export const metadata = {
    title: "Instituciones",
    description: "Invertí de manera inteligente y obtené retornos rápidos y seguros.",
}
export default function Instituciones() {
    const characteristic = [
        {
            img: "/icons/01.png",
            title: "Infraestructura sin inversión inicial",
            description: `La universidad o escuela solo aporta el terreno, sin necesidad de destinar fondos propios,
                el proyecto proporciona una mejora urbanistica del campus o predio institucional.
            `,
        },
        {
            img: "/icons/01.png",
            title: "Accesibilidad",
            description: `Costos de arrendamiento accesibles para alumnos, promobirnfo inclusión educativa.
            `,
        },
        {
            img: "/icons/01.png",
            title: "Edificios inteligentes",
            description: `Uso de tecnologia avandaza para optimizar consumo energético, seguridad y comodidad.
            `,
        },
        {
            img: "/icons/01.png",
            title: "Impacto social positivo",
            description: `Contribucíon al acceso de viviendas para estudiantes.
            `,
        },
        {
            img: "/icons/01.png",
            title: "Modelo seguro",
            description: `Propiedad administrada por CORADIR, minimizando riesgos.
            `,
        },
    ]
    return (
        <>
            <section className="flex flex-col justify-center items-center container p-16 relative xl:h-[100vh]"> 
                <h1 
                    className="z-10 flex flex-col justify-center items-center font-playfair xl:text-8xl gap-4 text-white uppercase xl:mt-20 "
                    aria-label="Instituciones"
                    style={{ textShadow: '6px 3px 4px rgba(0,0,0,0.5)' }}
                >
                    Instituciones
                </h1> 
                <Image 
                    priority={true}
                    loading="eager"
                    src="/img/instituciones_hero.jpg" 
                    alt="Hero Pagina Principal" 
                    aria-label="Hero Pagina Principal"
                    width={2000} 
                    height={2000} 
                    className="w-[100vw] xl:h-[100vh] absolute top-0 left-0 "
                />
            </section>
            <Ofert/>
            <section className="flex flex-col items-center justify-center container relative overflow-hidden px-20 py-10">
                {
                    characteristic.map((characteristic,index) => (
                        <CardInvestment key={`characteristic-${index}`} {...characteristic}/>
                    ))
                }
                <div
                    aria-hidden="true"
                    className="absolute right-0 -bottom-20 w-full h-full pointer-events-none z-0"
                    style={{
                        backgroundImage: "url('/img/logo-tipografia-blanca.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right", 
                        backgroundSize: "contain",
                        opacity: 0.3 
                    }}
                />
            </section>
        </>
    )
}