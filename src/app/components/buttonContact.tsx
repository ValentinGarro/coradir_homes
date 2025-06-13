import Link from "next/link";
export default function ButtonContact({href, className}: {href: string, className?: string}){
    return(
        <Link href={href} className={`xl:text-3xl text-xl z-10 xl:px-24 px-10 py-2 xl:py-4 rounded-full uppercase ${className} `}>
            ¡Saber más!
        </Link>
    )
}