import { motion } from "framer-motion";

function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center text-white bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden">
            <motion.div
                className="absolute top-10 left-[-50px] w-[300px] h-[300px] bg-pink-500 rounded-full filter blur-3xl opacity-20"
                animate={{ y: [0, 300, 0], x: [0, 400, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-10 right-[-50px] w-[300px] h-[300px] bg-blue-500 rounded-full filter blur-3xl opacity-20"
                animate={{ y: [0, -200, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="z-10 text-center px-4 w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Sell Your {}
                    <span className="text-pink-400">Unused Software</span>
                    <br />
                    <span className="text-blue-400">Licenses Instantly.</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-300">
                    SoftSell helps companies get value back from unused software
                    — fast, secure, and hassle-free.
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block mt-8 px-6 py-3 bg-white text-gray-900 rounded-full font-medium shadow-lg hover:bg-orange-200 transition"
                    onClick={() => {
                        window.scrollTo({
                            top: document.body.scrollHeight,
                            behavior: "smooth",
                        });
                    }}
                >
                    Get a Free Quote →
                </motion.button>
            </motion.div>
        </section>
    );
}

export default Hero;
