"use client"
import { motion } from "framer-motion";

export default function Bot() {
    return (
        <span className="fixed bottom-1/2 left-10 z-50 w-20 h-20 flex items-center justify-center">
            {/* Auriolas animadas */}
            <motion.span
                className="absolute w-20 h-20  rounded-full bg-blue/80"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: [1.2  , 1.1, 1 ], opacity: [0, 0.2 , .5] }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut"
                }}
            /> 
            {/* Botón principal */}
            <span className="relative z-10 bg-blue/95 transition-all ease-in-out duration-200 hover:bg-blue w-20 h-20 rounded-full border-2 border-white cursor-pointer" />
        </span>
    );
}