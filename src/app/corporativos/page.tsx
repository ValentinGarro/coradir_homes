import Image from "next/image";
import Link from "next/link";

export default function Page(){
    const benefits = [
        <>Trámite ágil y <b>garantía empresarial.</b></>,
        <>Costos operativos optimizados <b>enfocados en tu crecimiento.</b></>,
        <><b>Ubicación inteligente,</b> conectividad para empleados, clientes.</>,
        <b>Contratos flexibles y precios transparentes.</b>
    ]
    return (
        <>
            <section className="relative container bg-white flex flex-col items-start justify-start xl:py-16 xl:px-36 gap-5">
                <h1 className="text-blue font-playfair xl:text-9xl font-bold">Corporativos</h1>
                <p className="text-black font-raleway xl:text-5xl w-[50%] mt-20">Invertí en eficiencia para tu empresa con <b>Coradir Homes.</b></p>
                <p className="text-black font-raleway xl:text-5xl w-[50%]"> <b>¡Soluciones habitacionales listas para tu equipo!</b> <br/> Departamentos modernos, conectividad de punta y ubicación estratégica para optimizar tiempos y recursos.</p>
                <Image
                    src="/img/pagina_corporativos_inicio.jpg"
                    alt="Corporativos"
                    width={1000}
                    height={1000}
                    className="w-[45%] h-[50%] absolute z-10 top-[22%] right-0 rounded-4xl object-right-top"
                />
                <div className="flex flex-col items-start justify-start gap-5 py-20 w-full relative">
                </div>
            </section>  
            <section className="relative container bg-white flex flex-col items-center justify-start xl:py-16 xl:px-36 gap-5">
                <h2 className="uppercase text-black font-raleway xl:text-7xl font-bold text-center">¡CONOCÉ LOS BENEFICIOS!</h2>
                <div className="flex flex-col items-center justify-center py-10 gap-8 w-full">
                    {benefits.map((benefit,index) => (
                        <div key={`benefit-${index}`} className="flex items-center justify-center gap-5 w-full">
                            <Image
                                src="/icons/01.png"
                                alt="Beneficios"
                                width={100}
                                height={100}
                                className="w-20 h-20"
                            />
                            <p className="text-black font-raleway xl:text-5xl w-[80%]">{benefit}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="container relative w-full ">
                <Image
                    src="/img/coraporativos_final.jpg"
                    alt="Corporativos"
                    width={1000}
                    height={1000}
                    className="w-full h-[80vh] object-top"
                />
                <Link href="/" className="xl:text-3xl absolute xl:bottom-32 xl:left-1/2 transform -translate-x-1/2 z-10 text-blue border-2 border-blue bg-white xl:px-24 xl:py-4 rounded-full uppercase">
                    ¡Saber más!
                </Link>
            </section>
        </>
    )
}