import Image from "next/image";
import Link from "next/link";
export const metadata = {
    title: "Corporativos",
    description: "Corporativos",
}
export default function Page(){
    const benefits = [
        <>Trámite ágil y <b>garantía empresarial.</b></>,
        <>Costos operativos optimizados <b>enfocados en tu crecimiento.</b></>,
        <><b>Ubicación inteligente,</b> conectividad para empleados, clientes.</>,
        <b>Contratos flexibles y precios transparentes.</b>
    ]
    return (
        <>
            <section className="relative xl:container bg-white flex flex-col items-start justify-start px-10 xl:py-16 xl:px-36 gap-5">
                <h1 className="text-blue font-playfair text-6xl xl:text-9xl font-bold">Corporativos</h1>
                <p className="text-black font-raleway text-lg xl:text-5xl w-[50%] mt-5 xl:mt-20">Invertí en eficiencia para tu empresa con <b>Coradir Homes.</b></p>
                <p className="text-black font-raleway text-lg xl:text-5xl w-[50%]"> <b>¡Soluciones habitacionales listas para tu equipo!</b> <br/> Departamentos modernos, conectividad de punta y ubicación estratégica para optimizar tiempos y recursos.</p>
                <Image
                    src="/img/pagina_corporativos_inicio.jpg"
                    alt="Corporativos"
                    width={1000}
                    height={1000}
                    className="w-[45%] h-[40%] xl:h-[50%] absolute z-10 top-[22%] right-0 rounded-4xl object-right-top"
                />
                <div className="flex flex-col items-start justify-start gap-5 xl:py-20 py-5 w-full relative">
                </div>
            </section>  
            <section className="relative container bg-white flex flex-col items-center justify-start xl:py-16 xl:px-36 gap-5">
                <h2 className="uppercase text-black font-raleway text-2xl xl:text-7xl font-bold text-center">¡CONOCÉ LOS BENEFICIOS!</h2>
                <div className="flex flex-col items-center justify-center py-10 gap-8 xl:w-full w-[90%]">
                    {benefits.map((benefit,index) => (
                        <div key={`benefit-${index}`} className="flex items-center justify-center gap-5 w-full">
                            <Image
                                src="/icons/check.png"
                                alt="Beneficios"
                                width={100}
                                height={100}
                                className="xl:w-20 xl:h-20 w-10 h-10"
                            />
                            <p className="text-black font-raleway xl:text-5xl w-[80%]">{benefit}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="relative w-full">
                <Image
                    src="/img/coraporativos_final.jpg"
                    alt="Corporativos"
                    width={1000}
                    height={1000}
                    className="w-full xl:h-[80vh] h-[50vh] object-top"
                />
                <Link href="/" className="xl:text-3xl absolute xl:bottom-32 bottom-16 left-1/2 transform -translate-x-1/2 z-10 text-blue border-2 border-blue bg-white xl:px-24 xl:py-4 py-2 px-5 rounded-full uppercase">
                    ¡Saber más!
                </Link>
            </section>
        </>
    )
}