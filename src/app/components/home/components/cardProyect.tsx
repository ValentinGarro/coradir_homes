import Link from "next/link";
import Image from "next/image";

export default function CardProyect({
            title,
            image,
            link,
        }: {
            title: string;
            image: string;
            link: string;
}) {
    return (
        <div 
            className="w-full relative flex flex-col items-center justify-center gap-3"
        >
            <Image 
                loading="lazy"
                src={image}
                alt={title}
                aria-label={title}
                width={1000}
                height={1000}
                className="w-full xl:w-80  h-80 xl:object-cover"
            />
            <h3 className="w-full text-center text-white font-raleway xl:text-2xl">
                {title}
            </h3>
            <Link href={link} aria-label="Ver Proyecto" 
                target="_blank" 
                className=" text-center bg-white text-blue border-1 border-blue  font-raleway px-20 py-2 xl:text-xl rounded-full"
            >
                Ver Proyecto
            </Link>
        </div>
    )
}