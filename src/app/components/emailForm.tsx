"use client";
import { motion } from "framer-motion";


function handleWarning(Event: Event) {
    const fieldset = window.document.querySelector('fieldset');
    if (!fieldset) return;
    fieldset.classList.add('border-red-500', 'border-2');

}

export default function EmailForm() {
    return (
        <>
            <form className="">
                <fieldset className=" relative flex  border border-soft-red/40 rounded-3xl w-80">
                    <input
                        type="email"
                        placeholder="Email address"
                        onInvalid={(Event) => handleWarning(Event)}
                        className=" object-contain w-full py-3 px-5 text-sm rounded-3xl flex-1 bg-transparent text-desaturated-redß focus:outline-none placeholder:text-desaturated-red/40"

                    />
                    <motion.button
                        whileTap={{
                            scale: 1.4,
                            transition: { duration: 0.1 },

                        }}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.1 },
                        }}
                        type="submit"
                        className="absolute right-0 top-0 h-full w-16 text-white p-1 bg-button hover:bg-soft-red shadow-inner antialiased rounded-3xl drop-shadow-2xl text-2xl"
                    >
                        &gt;
                    </motion.button>
                </fieldset>
            </form>
        </>
    )
}

