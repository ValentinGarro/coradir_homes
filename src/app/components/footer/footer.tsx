import Image from "next/image";

export default function Footer(){
    return(
        <footer className="flex  xl:flex-row justify-between pt-10 xl:pt-0 items-center xl:max-h-[25vh] bg-blue xl:px-10 px-5 overflow-hidden">
            <div className="flex flex-col justify-start items-center gap-3">
                <span className="text-xs xl:text-xl text-white font-raleway">¡Seguinos y conocé más!</span>
                <ul className="list-none text-white flex justify-start flex-col gap-2 w-full">
                    <li>@</li>
                    <li>!</li>
                    <li>O</li>
                </ul>
            </div>
            <div className="overflow-hidden h-[20vh] xl:h-auto">
                <Image 
                loading="lazy"
                src="/img/marca blanco.png" 
                alt="Logo Coradir Homes" 
                aria-label="Logo Coradir Homes"
                width={1000} 
                height={1000} 
                className="xl:w-90 xl:h-90 w-50 h-50 -mt-12 xl:-mt-0"
            />
            </div>
        </footer>
    )
}