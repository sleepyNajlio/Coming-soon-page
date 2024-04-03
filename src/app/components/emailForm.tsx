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
                <fieldset className="flex  border border-soft-red/40 rounded-3xl w-80">
                    <input
                        type="email"
                        placeholder="Email address"
                        className=" object-contain w-full p-2 rounded-3xl flex-1 bg-transparent"
                        onInvalid={(Event) => handleWarning(Event)}
                        autoComplete="email"

                    />
                    <motion.button
                        type="submit"
                        className="z-10 float-right right-7 w-16 bg-soft-red text-white p-2 rounded-3xl"
                    >
                        &gt;
                    </motion.button>
                </fieldset>
            </form>
        </>
    )
}

