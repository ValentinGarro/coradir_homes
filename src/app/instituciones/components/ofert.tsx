import Link from "next/link";

export default function Ofert(){
    return(
    <section className="flex flex-col justify-start items-center container p-16 bg-white">
        <h2 className="text-black font-raleway xl:text-7xl">  ¿Cómo funciona?  </h2>
        <h2 className="text-blue font-playfair xl:text-7xl font-bold">El proyecto está armado.</h2>
        <p className="text-black font-raleway xl:text-4xl text-center my-10">
            Ofrecemos una solución de residencias estudiantiles <br/>
            accesibles para instituciones educativas, mediante <br/>
            financiamiento colectivo y el uso de terrenos disponibles, <br/>
            con construcciones tecnológicas y seguras.
        </p>
        <Link href="/" className="xl:text-3xl border-2 bg-blue text-white xl:px-24 xl:py-4 rounded-full uppercase">
            ¡Saber más!
        </Link>
    </section>  
    );
}