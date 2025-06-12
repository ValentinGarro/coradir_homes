"use client";
import { useForm, Controller } from "react-hook-form";
import { FormSchema } from "./components/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Page(){
    const form = useForm<FormSchema>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email:"",
            interesting: "",
            message: "",
            name:"",
            phone: "",
        }
    });
    const { handleSubmit, control , formState:{ errors } } = form;
    const  OnSubmit = async (data:FormSchema) => {
        console.log(data);
    }
    return(
        <section className="container flex flex-col items-center justify-start py-10 pt-14 min-h-[73vh] gap-5"> 
            <h1 className="text-center text-7xl text-blue font-playfair">¡Hola!</h1>   
            <h2 className="w-[80%] text-gray font-raleway text-center">Por favor, completa el siguiente formulario para que podamos conocer mejor tus intereses y asesorarte.</h2> 
            <form onSubmit={handleSubmit(OnSubmit)} className="p-5 rounded-2xl bg-blue w-[80%] flex flex-col items-center justify-center gap-5">
                <Controller  
                    name="name"
                    control={control}
                    render={(e)=>{
                        return <div className="flex flex-col items-center justify-center gap-2 text-white font-raleway">
                            <label htmlFor="name">Nombre y Apellido</label>
                            <input type="text" {...e.field} className=" border-b-2 border-white w-full" />
                            <p className="text-red h-8 text-xs">{errors.name?.message}</p>
                        </div>;
                    }} 
                />
                <Controller 
                    name="email"
                    control={control}
                    render={(e)=>{
                        return <div className="flex flex-col items-center justify-center gap-2 text-white font-raleway">
                            <label htmlFor="email">Email</label>
                            <input type="email" {...e.field} className=" border-b-2 border-white w-[80%]" />
                            <p className="text-red h-8 text-xs">{errors.email?.message}</p>
                        </div>;
                    }} 
                />
                <Controller 
                    name="phone"
                    control={control}
                    render={(e)=>{
                        return <div className="flex flex-col items-center justify-center gap-2 text-white font-raleway">
                            <label htmlFor="phone">Teléfono</label>
                            <input type="tel" {...e.field} className=" border-b-2 border-white w-[80%]" />
                            <p className="text-red h-8 text-xs">{errors.phone?.message}</p>
                        </div>;
                    }} 
                />
                <Controller 
                    name="interesting"
                    control={control}
                    render={(e)=>{
                        return <div className="flex flex-col items-center justify-center gap-2 text-white font-raleway">
                            <label htmlFor="interesting">Interés</label>
                            <input type="text" {...e.field} className=" border-b-2 border-white w-[80%]" />
                            <p className="text-red h-8 text-xs">{errors.interesting?.message}</p>
                        </div>;
                    }} 
                />
                <Controller 
                    name="message"
                    control={control}
                    render={(e)=>{
                        return <div className="flex flex-col items-center justify-center gap-2 text-white font-raleway">
                            <label htmlFor="message">Mensaje</label>
                            <textarea {...e.field} className=" border-b-2 border-white w-[80%]" />
                            <p className="text-red h-8 text-xs">{errors.message?.message}</p>
                        </div>;
                    }} 
                />
                <button type="submit"  className="xl:text-3xl text-xl z-10 text-blue  bg-white xl:px-24 px-10 py-2 xl:py-4 rounded-full uppercase">Enviar</button>
            </form>
        </section>  
    );
}