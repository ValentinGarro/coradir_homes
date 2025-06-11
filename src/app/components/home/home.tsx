import Image from "next/image"; 

export default function Home(){
    return( 
        <section className="flex flex-col justify-center items-center p-16 relative xl:h-[80vh]"> 
            <h1 
                className="z-10 flex flex-col justify-center items-center font-playfair xl:text-6xl gap-4 text-white uppercase xl:mt-20 "
                aria-label="Elegí tu nuevo hogar Y viví la vida que mereces."
                style={{ textShadow: '6px 3px 4px rgba(0,0,0,0.5)' }}
            >
                Elegí tu nuevo hogar <br/>
                <b>Y viví la vida que mereces.</b>
            </h1> 
            <Image //la imagen 1271x628
                priority={true}
                loading="eager"
                src="/img/hero_paginaprincipal.jpg" 
                alt="Hero Pagina Principal" 
                aria-label="Hero Pagina Principal"
                width={2000} 
                height={2000} 
                className="w-[100vw] xl:h-[80vh] absolute top-0 left-0 object-cover object-top"
            />
        </section>
              
    )
}