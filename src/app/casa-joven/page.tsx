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
                <h1 className="text-blue font-playfair xl:text-7xl font-bold">Casa Jóven</h1>
                <div 
                className={`flex flex-col items-center justify-center text-white py-4 px-16 text-center  gap-2 
                bg-blue-gray rounded-full rounded-tr-none w-[50%] `}> 
                    <p className=" font-raleway xl:text-3xl ">Acceder a tu primer departamento nunca fue tan fácil, rápido y accesible.</p> 
                </div> 
                <section className="relative px-16 w-full pt-26 flex items-center justify-center">
                    <Image
                        src="/img/casa_joven_1.png"
                        alt="Casa Joven"
                        width={1000}
                        height={1000}
                        className="w-72 h-72 absolute z-10 top-0 right-0 rounded-full"
                    /> 
                    
                    <p className="text-center text-black font-raleway xl:text-2xl w-[50%]">
                        Tu nuevo comienzo empieza en Coradir Homes.
                        Viviendas modernas, seguras y accesibles,
                        pensadas para acompañarte en cada etapa de la
                        vida. Ya seas madre soltera, pareja mayor o familia
                        primeriza, encontrá un hogar funcional, sin estrés
                        ni complicaciones
                    </p>
                </section>
                <section className="relative px-16 w-full pt-10 pb-10 flex flex-col items-center justify-center gap-5">
                    <Image
                        src="/img/casajoven_2.png"
                        alt="Casa Joven"
                        width={1000}
                        height={1000}
                        className="w-72 h-72 absolute z-10 bottom-0 left-0 transform  -translate-y-1/2   rounded-full"
                    />
                    <p className="text-center text-black font-raleway xl:text-2xl w-[50%]">
                        <b>Confort total desde el primer día:</b><br/>
                        Sin preocuparte por mantenimiento ni estructura.
                    </p>
                    <p className="text-center text-black font-raleway xl:text-2xl w-[50%]">
                        <b>Seguridad inteligente 24/7: </b><br/>
                        Vigilancia en tiempo real con IA para que descanses tranquila.
                    </p>
                    <p className="text-center text-black font-raleway xl:text-2xl w-[50%]">
                        <b>Tecnología que simplifica tu vida:</b><br/>
                        Todo pensado para un estilo de vida cómodo y actual.
                    </p>
                    <p className="text-center text-black font-raleway xl:text-2xl w-[50%]">
                        <b>Ubicación estratégica + precio accesible:</b><br/>
                        Calidad y conectividad sin sacrificar tu presupuesto.
                    </p>
                    <Image
                        src="/img/casa_joven_3.png"
                        alt="Casa Joven"
                        width={1000}
                        height={1000}
                        className="w-96 h-96 absolute z-10 -bottom-72 right-0  rounded-full"
                    />
                </section>
                <section className="relative flex flex-col items-start justify-center gap-10 px-40 overflow-hidden py-20">
                    <div
                        aria-hidden="true"
                        className="absolute -left-48 -bottom-28 w-full h-full pointer-events-none z-0"
                        style={{
                            backgroundImage: "url('/img/logo-tipografia-blanca.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "left", 
                            backgroundSize: "contain",
                            opacity: 0.3 
                        }}
                    />
                    <p className="text-black font-raleway xl:text-5xl font-bold w-[70%]">
                        Vivir bien nunca fue tan sencillo. Conectá con nosotros y encontrá el hogar que se adapta a vos.
                    </p>
                    <div className="w-full flex items-center justify-center my-20">
                        <Link href="/" className="xl:text-3xl border-2 bg-blue text-white xl:px-24 xl:py-4 rounded-full uppercase">
                            ¡Saber más!
                        </Link>
                    </div>
                </section>
            </section>
        </>
    );
}