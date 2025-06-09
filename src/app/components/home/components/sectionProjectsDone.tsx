import CardProyect from "./cardProyect"

export default function SectionProjectsDone(){
    const proyects = [
        {
            title: "La Torre I",
            image: "/img/proyectos_realizados_1.png",
            link: "/",
        },
        {
            title: "La Torre II",
            image: "/img/proyectos_realizados_2.png",
            link: "/",
        },

    ]
    return(
        <section className="bg-blue p-5 flex flex-col items-center justify-center  w-full gap-10 mb-10">
            <h2 className="xl:text-5xl  text-center font-playfair text-white font-bold">Proyectos realizados</h2>
            <section className="grid grid-cols-2 gap-2 w-full py-5 px-56"> 
                {
                    proyects.map((proyect,index) => ( <CardProyect key={`proyect-${index}`} {...proyect}/>))
                }
            </section>
        </section>
    )
}