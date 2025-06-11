import Image from "next/image"; 
import CardChar from "./components/cardChar";
export default function Page(){
    const characteristic = [
        {title:"Tu tierra, tu inversión.",description:`En lugar de dejar tu terreno sin aprovechar, conviértelo 
            en un desarrollo inmobiliario sin necesidad de inversión adicional.`},
        {title:"Nostros construimos, vos ganás.", description:`Te aseguramos un prouuecto de alta calidad en tu terreno,
            con diselos modernos y estrátegicos para maximizar la rentabilidad.`},
        {title:"Ingresos grantizados.", description:`
            Una vez finalizada la obra. recibirás unidades, con administración integral a cargo de CORADIR,
            asegurando ocipación rapida y rentabilidad optima.`},
        {title:"Modelo sin riesgos.", description:`
            No necesitas preociparte por costos de construcción o gestión.
            Te asocias con un equipo experto que convierte tu terreno en un acivo inmobiliario rentable.`},
        {title:"Rentabilidad asegurada.", description:`
            Los alquileres de los departamentos generan ingresos mensuales recurrentes, aumentando tu patrimonio
            sin esfuerzo.`}
    ]
    return(
        <>
            <section className="flex flex-col justify-end items-center p-16 relative xl:h-[70vh]"> 
                <h1 
                    className="z-10 flex flex-col justify-center items-center font-playfair xl:text-8xl gap-4 text-white uppercase xl:mt-20 "
                    aria-label="Terrenos"
                    style={{ textShadow: '6px 3px 4px rgba(0,0,0,0.5)' }}
                >
                Terrenos
                </h1> 
                <Image 
                    priority={true}
                    loading="eager"
                    src="/img/terrenos_hero.png" 
                    alt="Hero Pagina Principal" 
                    aria-label="Hero Pagina Principal"
                    width={2000} 
                    height={2000} 
                    className="w-[100vw] xl:h-[70vh] absolute top-0 left-0 "
                />
            </section>
            <section className="flex flex-col justify-start items-center container p-16 bg-white">
                <h2 className="text-blue font-playfair xl:text-7xl font-bold">¿Tenés un terreno?</h2>
                <h2 className="text-black font-raleway xl:text-7xl uppercase">Convertilo en ingresos</h2>
                <p className="text-black font-raleway xl:text-4xl text-center my-10">
                    Sumate a nuestro sistema aportando tu terreno<br/>
                    y recibis propiedades listas para alquilar.<br/>
                    Fácil, rentable y sin necesidad de invertir capital.  
                </p> 
            </section>  
            <section className="flex flex-col items-center justify-center container relative px-56 py-10 pt-0 gap-4 xl:pb-26">
                {
                    characteristic.map((characteristic,index) => (
                        <CardChar 
                            key={`characteristic-${index}`} 
                            {...characteristic}  
                            className={index % 2 === 0 ? 
                                "bg-blue-gray rounded-full rounded-tr-none" : 
                                "bg-blue rounded-full rounded-tl-none"  } 
                        />
                    ))
                }
            </section>
        </>
    );
}
    