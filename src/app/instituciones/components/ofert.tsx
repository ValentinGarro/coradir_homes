import ButtonContact from "@/app/components/buttonContact";
import Link from "next/link";

export default function Ofert(){
    return(
    <section className="flex flex-col justify-start items-center container p-10 xl:p-16 pb-0 xl:pb-10 bg-white">
        <h2 className="text-black font-raleway text-3xl xl:text-7xl uppercase">  ¿Cómo funciona?  </h2>
        <h2 className="text-blue font-playfair text-3xl xl:text-7xl font-bold">El proyecto está armado.</h2>
        <p className="text-black font-raleway text-xl xl:text-4xl text-center my-10">
            Ofrecemos una solución de residencias estudiantiles <br/>
            accesibles para instituciones educativas, mediante <br/>
            financiamiento colectivo y el uso de terrenos disponibles, <br/>
            con construcciones tecnológicas y seguras.
        </p> 
        <ButtonContact 
            href="/saber-mas/instituciones"
            className="bg-blue  text-white"
        />
    </section>  
    );
}