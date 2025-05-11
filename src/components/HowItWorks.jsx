import { motion } from "framer-motion";
import { FaCloudUploadAlt, FaDollarSign, FaRocket } from "react-icons/fa";

const steps = [
    {
        title: "Upload License",
        icon: <FaCloudUploadAlt size={28} className="text-pink-400" />,
        description: "Drag & drop your unused software license here.",
    },
    {
        title: "Get Valuation",
        icon: <FaDollarSign size={28} className="text-yellow-400" />,
        description: "We analyze and show market-accurate value instantly.",
    },
    {
        title: "Get Paid",
        icon: <FaRocket size={28} className="text-green-400" />,
        description: "Accept offer & get paid fast, securely and easily.",
    },
];

export default function HowItWorks() {
    return (
        <section className="bg-gray-900 text-white min-h-screen flex flex-col justify-center gap-24 items-center px-4">
            <motion.h2
                className="text-6xl font-bold text-white mb-10"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                How It Works
            </motion.h2>

            <div className="flex items-center justify-center space-x-6 md:space-x-12 relative">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-center">
                        <motion.div
                            className="bg-white text-gray-900 rounded-2xl px-8 py-10 w-[280px] h-[240px] shadow-xl hover:scale-105 transition flex flex-col justify-center"
                            initial={{ opacity: 0, x: -100, scale: 1.2 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{
                                opacity: {
                                    delay: index * 0.45 + 0.25,
                                    duration: 0.7,
                                },
                                duration: 0.9,
                                delay: index * 0.45,
                                ease: "easeInOut",
                            }}
                        >
                            <div className="flex justify-center mb-4">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-2">
                                {step.title}
                            </h3>
                            <p className="text-sm text-center text-gray-600">
                                {step.description}
                            </p>
                        </motion.div>

                        {index < steps.length - 1 && (
                            <motion.div
                                className="mx-4"
                                initial={{ opacity: 0, scale: 3, x: -100 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{
                                    delay: index * 0.4 + 1.5,
                                    duration: 0.5,
                                }}
                            >
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="text-white opacity-60"
                                >
                                    <path
                                        d="M5 12h14m0 0l-4-4m4 4l-4 4"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
