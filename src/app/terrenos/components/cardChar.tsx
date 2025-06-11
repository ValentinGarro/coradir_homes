export default function CardChar({title,description,className}: {title: string, description: string,className?: string}) {
    return (
        <div className={`flex flex-col items-center justify-center text-white py-4 px-5 xl:px-10 text-center w-[90%] xl:w-[80%] gap-2 ${className}`}>
            <h2 className=" font-playfair text-xl xl:text-4xl font-bold ">{title}</h2>
            <p className=" font-raleway text-xs xl:text-lg ">{description}</p> 
        </div>
    );
}