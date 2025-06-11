import Image from "next/image";
import CardChar from "../terrenos/components/cardChar";
import Link from "next/link";

export const metadata = {
    title: "Casa Joven",
    description: "Casa Joven",
};
export default function CasaJoven() {
    return (
        <>
            <section className="relative container flex flex-col items-center justify-start gap-5 min-h-[100vh]">
                <h1 className="text-blue font-playfair text-6xl xl:text-8xl font-bold xl:mb-10 mb-5">Casa Jóven</h1>
                <div 
                className={`flex flex-col items-center justify-center text-white py-4 px-16 text-center  gap-2 
                bg-blue-gray rounded-full rounded-tr-none w-[90%] xl:w-[50%] `}> 
                    <p className=" font-raleway text-lg xl:text-3xl ">Acceder a tu primer departamento nunca fue tan fácil, rápido y accesible.</p> 
                </div> 
                <section className="relative xl:px-16 px-4 w-full xl:pt-26 pt-16 flex items-center justify-center">
                    <Image
                        src="/img/casa_joven_1.png"
                        alt="Casa Joven"
                        width={1000}
                        height={1000}
                        className="xl:w-72 xl:h-72 w-32 h-32 absolute z-10 top-0 right-0 rounded-full"
                    /> 
                    
                    <p className="xl:text-center text-black text-lg font-raleway xl:text-3xl xl:w-[50%]">
                        Tu nuevo comienzo empieza <br className="xl:hidden"/> en Coradir Homes.
                        Viviendas <br className="xl:hidden"/> modernas, seguras y accesibles,<br className="xl:hidden"/>
                        pensadas para acompañarte en cada etapa de la
                        vida. Ya seas madre soltera, pareja mayor o familia
                        primeriza, encontrá un hogar funcional, sin estrés
                        ni complicaciones
                    </p>
                </section>
                <section className="relative xl:px-16 px-4 w-full pt-10 pb-10 flex flex-col items-center justify-center gap-5">
                    <Image
                        src="/img/casajoven_2.png"
                        alt="Casa Joven"
                        width={1000}
                        height={1000}
                        className="xl:w-72 xl:h-72 w-32 h-32 absolute z-10 bottom-0 left-0 transform  -translate-y-1/2  rounded-full"
                    />
                    <p className="text-center text-black font-raleway xl:text-3xl xl:w-[50%]">
                        <b>Confort total desde el primer día:</b><br/>
                        Sin preocuparte por mantenimiento ni estructura.
                    </p>
                    <p className="text-center text-black font-raleway xl:text-3xl xl:w-[50%]">
                        <b>Seguridad inteligente 24/7: </b><br/>
                        Vigilancia en tiempo real con IA para que descanses tranquila.
                    </p>
                    <p className="text-center text-black font-raleway pl-36 xl:pl-0 xl:text-3xl xl:w-[50%]">
                        <b>Tecnología que simplifica tu vida:</b><br/>
                        Todo pensado para un estilo de vida cómodo y actual.
                    </p>
                    <p className="text-center text-black font-raleway pl-26 xl:pl-0 xl:text-3xl xl:w-[50%]">
                        <b>Ubicación estratégica + precio accesible:</b><br/>
                        Calidad y conectividad sin sacrificar tu presupuesto.
                    </p>
                    <Image
                        src="/img/casa_joven_3.png"
                        alt="Casa Joven"
                        width={1000}
                        height={1000}
                        className="xl:w-96 xl:h-96 w-44 h-44 absolute z-10  xl:-bottom-72 -bottom-36 right-0  rounded-full"
                    />
                </section>
                <section className="relative flex flex-col items-start xl:items-center justify-center xl:gap-10 xl:w-[80%] px-5 pr-44 xl:pr-0 overflow-hidden xl:py-20">
                    <div
                        aria-hidden="true"
                        className="absolute xl:-left-32 -left-16 -bottom-0 w-full h-full pointer-events-none z-0"
                        style={{
                            backgroundImage: "url('/img/torre.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "left", 
                            backgroundSize: "contain",
                            
                        }}
                    />
                    <p className="text-black font-raleway text-xl xl:text-5xl font-bold xl:w-[70%]">
                        Vivir bien nunca fue tan sencillo. Conectá con nosotros y encontrá el hogar que se adapta a vos.
                    </p>
                    <div className="w-full flex items-center justify-center xl:my-20 my-10">
                        <Link href="/" className="xl:text-3xl text-lg border-2 bg-blue text-white xl:px-24 xl:py-4 py-2 px-5 rounded-full uppercase">
                            ¡Saber más!
                        </Link>
                    </div>
                </section>
            </section>
        </>
    );
}