import Image from "next/image";

export default function Footer(){
    return(
        <footer className="flex justify-between items-center container xl:max-h-[25vh] bg-blue px-10 overflow-hidden">
            <div className="flex flex-col justify-start items-center gap-3">
                <span className="text-white font-raleway xl:text-xl">¡Seguinos y conocé más!</span>
                <ul className="list-none text-white flex justify-start flex-col gap-2 w-full">
                    <li>@</li>
                    <li>!</li>
                    <li>O</li>
                </ul>
            </div>
            <Image 
                loading="lazy"
                src="/img/marca blanco.png" 
                alt="Logo Coradir Homes" 
                aria-label="Logo Coradir Homes"
                width={1000} 
                height={1000} 
                className="w-90 h-90 text-white"
            />

        </footer>
    )
}