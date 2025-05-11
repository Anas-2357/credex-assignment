import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Ananya S.",
        role: "Product Manager",
        quote: "Selling unused licenses has never been this easy. I was amazed by the speed and transparency!",
    },
    {
        name: "Rohan P.",
        role: "Freelancer",
        quote: "The valuation was fair and payment was instant. Highly recommend their service.",
    },
    {
        name: "Kiran M.",
        role: "Founder, Sneek.com",
        quote: "They turned old tools into cash effortlessly. Smooth process from start to finish.",
    },
];

const bubbleVariants = {
    hidden: (i) => ({
        opacity: 0,
        x: i % 2 === 0 ? -100 : 100,
        y: i - 60,
        rotate: i % 2 === 0 ? -6 : 6,
        scale: 1.4,
    }),
    visible: (i) => ({
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

export default function Testimonials() {
    return (
        <section className="bg-gray-900 text-white py-24 px-6 overflow-hidden relative">
            <motion.h2
                className="text-5xl font-bold text-center mb-24"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                What Our Users Say
            </motion.h2>

            <div className="relative flex justify-center flex-wrap gap-8 max-w-6xl mx-auto">
                {testimonials.map((item, index) => (
                    <motion.div
                        key={index}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 text-white p-6 rounded-2xl w-[300px] shadow-2xl duration-300"
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        variants={bubbleVariants}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm text-gray-300 italic leading-relaxed mb-4">
                            “{item.quote}”
                        </p>
                        <div className="text-sm font-semibold">
                            — {item.name},{" "}
                            <span className="text-gray-400">{item.role}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
