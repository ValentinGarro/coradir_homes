import Link from "next/link";

export default function SectionInvestments(){
    return(
        <section className="w-full xl:w-[80%] flex flex-col xl:flex-row items-center justify-center gap-10">
            <h2 className="font-playfair text-black text-4xl xl:text-6xl">
                Tu oportunidad de <br/> 
                <b className="text-blue font-bold font-playfair text-5xl xl:text-9xl">Inversión</b>
            </h2>
            <div className="w-full flex flex-col justify-center items-center gap-5  ">
                <p className="text-lg xl:text-xl font-raleway text-black">
                    <b>Invertí con seguridad,</b> incluso sin experiencia previa,
                    y sé parte activa del desarrollo inmobiliario.
                </p>
                <Link 
                    href="/"
                    className="text-center w-full xl:text-xl font-raleway bg-blue uppercase text-white py-2 rounded-full"
                > 
                    ¡Saber mas!
                </Link>
            </div>
        </section>
    )
}