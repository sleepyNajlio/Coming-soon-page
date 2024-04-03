import Image from "next/image";
import EmailForm from "./emailForm";

export default function ComingSoon() {


    return (
        <div className="flex flex-col justify-center items-center">
            <header className="w-full flex justify-start items-center h-20 px-6 bg-white">
                <Image src="/logo.svg" alt="logo"
                    width={100} height={100} priority={true}
                    className=" w-24 h-auto" />
            </header>
            <div className="w-full">
                <Image src="/hero-mobile.jpg"
                    alt="logo" height={300} width={300}
                    priority={true}
                    className="w-full h-auto mb-4"
                />
                {/* <Image src="/loading.svg" alt="logo" width={100} height={100} /> */}
            </div>
            <div className="flex flex-col justify-center items-center gap-2 antialiased text-desaturated-red/55">
                <header className=" text-5xl flex flex-col items-center tracking-widest my-6">
                    <span className="font-light antialiased">WE&apos;RE</span>
                    <span className=" text-dark-grayish-red">COMING </span>
                    <span className=" text-dark-grayish-red">SOON</span>
                </header>
                <p className="text-center text-base w-80 tracking-tight ">
                    Hello fellow shoppers! We&apos;re currently building our new fashion store.
                    Add your email below to stay up-to-date with announcements and our launch deals.
                </p>
                <EmailForm />
            </div>


        </div>
    );
}