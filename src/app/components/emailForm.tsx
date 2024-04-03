"use client";
import { motion } from "framer-motion";
import Image from "next/image";


function handleWarning(Event: React.FormEvent<HTMLInputElement>) {
    const input = Event.currentTarget;
    const errorIcon = document.getElementById("error-icon") as HTMLImageElement;
    const errorMsg = document.getElementById("error-msg") as HTMLParagraphElement;

    Event.preventDefault();
    input.style.border = "2px solid red";
    errorIcon.style.display = "block";
    errorMsg.style.display = "block";


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
                        className=" object-contain w-2/3 py-3 px-5 text-sm rounded-3xl flex-1 bg-transparent text-desaturated-redß focus:outline-none placeholder:text-desaturated-red/40"

                    />
                    <Image src="/icon-error.svg" id="error-icon"
                        alt="error" width={20} height={20}
                        className=" w-7 h-auto absolute right-1/4 top-1/2 -translate-y-1/2 translate-x-1 hidden"
                        sizes="20px"
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
                        className="absolute right-0 top-0 h-full w-16 text-white p-1 bg-button hover:bg-soft-red shadow-inner antialiased rounded-3xl drop-shadow-2xl text-2xl cursor-pointer"
                    >
                        &gt;
                    </motion.button>
                </fieldset>
                <p id="error-msg" className="text-left my-1 ml-3 text-sm text-desaturated-red/70 hidden">Please provide a valid email</p>
            </form>
        </>
    )
}

