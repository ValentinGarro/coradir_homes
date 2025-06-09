import Link from "next/link";

export default function SectionInvestments(){
    return(
        <section className="xl:w-[70%] flex items-center justify-center gap-5">
            <h2 className="font-playfair text-black xl:text-6xl">
                Tu oportunidad de <br/> 
                <b className="text-blue font-bold font-playfair xl:text-9xl">Inversión</b>
            </h2>
            <div className="w-[40%] flex flex-col justify-center items-center gap-5 p-10">
                <p className="xl:text-xl font-raleway text-black">
                    <b>Invertí con seguridad,</b> incluso sin experiencia previa,
                    y sé parte activa del desarrollo inmobiliario.
                </p>
                <Link 
                    href="/"
                    className="xl:text-xl font-raleway bg-blue uppercase text-white px-20 py-2 rounded-full"
                > 
                    ¡Saber mas!
                </Link>
            </div>
        </section>
    )
}