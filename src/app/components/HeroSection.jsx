import Image from 'next/image';
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="relative w-screen h-[100vh] min-h-[600px] overflow-hidden">
        <img
            alt="Hero Image"
            className="absolute inset-0 w-fill h-full object-cover object-center"
            height={1080}
            src="/MArtial_Arts-QQrq_emjT-transformed.jpg"
            style={{
            objectFit: "cover",
            }}
            width={1920}
        />
        <div className="absolute inset-1 bg-gradient-to-t from-gray-900/20 to-gray-900" />
        <div className="absolute inset-6 flex items-center justify-start px-4 text-left">
            <div className="max-w-6xl">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                LEARN AUTHENTIC
                </h1>
                <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-700 mb-2">
                MUAY THAI,
                </h2>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                WITH DETAILED AND CORRECT
                TECHNIQUE.
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">
                Unlock the power of our cutting-edge solutions to transform your online experience and drive unparalleled
                success.
                </p>
                <Link
                href="../public/images/CV_v2_sA.pdf"
                className="font-bold text-2xl mt-4 px-6 inline-block py-3 w-full sm:w-fit rounded-md mr-4 bg-red-700 from-primary-500 to-secondary-500 hover:bg-white hover:text-red-700  text-white"
                >
                GET PERSONAL TRAINING
                </Link>
                <Link
                href="../public/images/CV_v2_sA.pdf"
                className="font-bold text-2xl mt-4 px-6 inline-block py-3 w-full sm:w-fit rounded-md ml-5 mr-4 bg-white from-primary-500 to-secondary-500 hover:bg-white hover:text-red-700  text-black"
                >
                BUY EQUIPMENT
                </Link>
            </div>
        </div>
    </section>
    );
};

export default HeroSection;