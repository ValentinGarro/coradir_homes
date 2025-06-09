import Image from "next/image";

export default function CardInvestment({img,title,description}: {img:string,title:string,description:string}){
    return(
        <div className="flex justify-center items-center p-5 gap-5 w-[80%] mx-auto">
            <Image
                src={img}
                alt={title}
                width={1000}
                height={1000}
                className="w-36 h-36 object-cover"
            />
            <div className="flex flex-col justify-center items-start w-full gap-3">
                <h2 className="text-blue font-playfair text-4xl font-bold">{title}</h2>
                <p className="text-black font-raleway text-2xl">{description}</p>
            </div>
        </div>
    )
}