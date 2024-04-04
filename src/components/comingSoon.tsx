import Image from "next/image";
import EmailForm from "./emailForm";
import CustomImage from "./customImage";

// export default function ComingSoon() {


//     return (
//         <div id="container" className=" grid sm:h-screen sm:grid-cols-2 sm:bg-pattern-desktop">
//             <header className=" w-full flex justify-start items-center h-20 px-6  ">
//                 <Image src="/logo.svg" alt="logo"
//                     width={100} height={100} priority={true}
//                     className=" w-24 h-auto sm:w-36" />
//             </header>
//             <div className="flex flex-col justify-center items-center gap-2 antialiased text-desaturated-red/55 sm:w-1/2 sm:row-start-2">
//                 <header className=" text-5xl flex flex-col items-center tracking-widest my-6 sm:items-start sm:text-6xl  space-y-4">
//                     <span className="font-light antialiased">WE&apos;RE</span>
//                     <span className=" text-dark-grayish-red">COMING </span>
//                     <span className=" text-dark-grayish-red">SOON</span>
//                 </header>
//                 <p className="text-center text-base w-80 tracking-tight sm:text-left">
//                     Hello fellow shoppers! We&apos;re currently building our new fashion store.
//                     Add your email below to stay up-to-date with announcements and our launch deals.
//                 </p>
//                 <EmailForm />
//             </div>
//             <div className="row-start-2 sm:row-start-1 sm:row-span-1 sm:col-start-2 sm:col-span-1">
//                 <CustomImage />
//             </div>
//         </div>
//     );
// }
export default function ComingSoon() {
    return (
        <div id="container" className=" relative grid grid-cols-1 sm:grid-cols-5 sm:grid-rows-3 sm:h-screen sm:bg-pattern-desktop">
            <header className="w-full flex justify-start items-center h-20 sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-1 sm:my-auto sm:ml-[11%] md:ml-[21%]">
                <Image src="/logo.svg" alt="logo"
                    width={100} height={100} priority={true}
                    quality={100}
                    className="w-24 h-auto sm:w-36" />
            </header>
            <div className="flex flex-col justify-center items-center sm:items-start gap-2 antialiased text-desaturated-red/55 sm:col-start-1 sm:col-end-4 sm:row-start-2 sm:row-end-auto sm:ml-[10%] md:ml-[20%]">
                <header className="text-5xl flex flex-col items-center tracking-widest my-6 sm:items-start sm:text-6xl md:text-7xl ">
                    <span className="font-light antialiased">WE&apos;RE</span>
                    <span className="text-dark-grayish-red">COMING </span>
                    <span className="text-dark-grayish-red">SOON</span>
                </header>
                <p className="text-center text-base w-80 tracking-tight sm:text-left md:w-96">
                    Hello fellow shoppers! We&apos;re currently building our new fashion store.
                    Add your email below to stay up-to-date with announcements and our launch deals.
                </p>
                <EmailForm />
            </div>
            <div className="row-start-2 sm:col-start-4 sm:col-end-6 sm:row-start-1 sm:row-end-3">
                <CustomImage />
            </div>
        </div>
    );
}