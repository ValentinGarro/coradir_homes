export default function CardChar({title,description,className}: {title: string, description: string,className?: string}) {
    return (
        <div className={`flex flex-col items-center justify-center text-white py-4 px-10 text-center w-[80%] gap-2 ${className}`}>
            <h2 className=" font-playfair xl:text-4xl font-bold ">{title}</h2>
            <p className=" font-raleway xl:text-lg ">{description}</p> 
        </div>
    );
}