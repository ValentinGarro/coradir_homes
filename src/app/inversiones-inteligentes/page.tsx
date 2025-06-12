import Image from "next/image";
import CardInvestment from "../components/cardInvestment";
import Link from "next/link";
export const metadata = {
    title: "Inversiones Inteligentes",
    description: "Invertí de manera inteligente y obtené retornos rápidos y seguros.",
}
export default function Investments(){
    const investments = [
        {
            img: "/icons/1_alta_rentabilidad.png",
            title: "Alta rentabilidad",
            description: "Generá ingresos pasivos mes a mes con alquileres optimizados.",
        },
        {
            img: "/icons/2_ubicación_estratégica.png",
            title: "Ubicación estratégica",
            description: "Propiedades en zonas de gran demanda, asegurando valorización.",
        },
        {
            img: "/icons/3_administración_profesional.png",
            title: "Administración profesional",
            description: "Gestión eficiente sin preocupaciones.",
        },
    ]
    return(
        <>
            <section className="flex flex-col items-center justify-center container py-10 pb-0 gap-5">
                <h1 className="font-raleway text-black text-6xl xl:text-8xl text-center px-16">
                    <b className="font-playfair text-blue">Inversiones</b> <br/>
                    INTELIGENTES
                </h1>
                <p className="font-raleway text-black text-2xl xl:text-4xl text-center xl:mb-20 my-5 xL:my-0 xl:w-[60%] px-16">
                    Invertí de manera inteligente y obtené retornos rápidos y seguros.
                </p>
                <div className="grid grid-cols-1 gap-2 xl:w-[70%] mx-auto ">
                    {
                        investments.map((investment,index) => (
                            <CardInvestment key={`investment-${index}`} {...investment}/>
                        ))
                    }
                </div>
            </section>
            <section className="relative w-full ">
                <Image
                    src="/img/inversiones_inteligentes.png"
                    alt="Inversiones Inteligentes"
                    width={1000}
                    height={1000}
                    className="w-full xl:h-[80vh] h-[40vh] object-top"
                />
                <Link href="/" className="xl:text-3xl text-xl absolute bottom-10 xl:bottom-32  left-1/2 transform -translate-x-1/2 z-10 text-blue  bg-white xl:px-24 px-10 py-2 xl:py-4 rounded-full uppercase">
                    ¡Saber más!
                </Link>
            </section>
        </>
    )
}