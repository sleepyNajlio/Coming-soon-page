"use client";
import Image from "next/image";
import { useState, useEffect } from "react";


export default function CustomImage() {
    const [src, setSrc] = useState<string>("");
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [className, setClassName] = useState<string>("");

    const mobileStyle = "w-full h-auto mb-4 ";
    const desktopStyle = "sm:absolute sm:right-0 sm:w-1/2 sm:h-full sm:top-0 sm:object-cover sm:object-center";




    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
            if (width > 640) {
                setSrc("/hero-desktop.jpg");
                setClassName(" ");
            }
            else {
                setSrc("/hero-mobile.jpg");
                setClassName("w-full h-auto mb-4");
            }
        };
        // Initial call
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [width]);


    return (
        <>
            {src === '' ? (
                <Image src="/loading.svg" alt="loading"
                    width={100} height={100}
                    className="w-auto h-10 place-self-center mx-auto my-[50%]"
                />) : (
                <Image src={src} alt="Hero Image"
                    width={width} height={height} priority={true}
                    quality={100}
                    className="object-cover object-center h-full w-full sm:h-screen"
                />
            )}
        </>
    )

}