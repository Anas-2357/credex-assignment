import { motion } from "framer-motion";
import { FaShieldAlt, FaClock, FaThumbsUp, FaBolt } from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt size={28} className="text-blue-400" />,
    title: "Trusted & Secure",
    description: "Industry-standard security ensures your data and licenses are safe.",
  },
  {
    icon: <FaClock size={28} className="text-yellow-400" />,
    title: "Quick Process",
    description: "Sell your license in minutes, not days.",
  },
  {
    icon: <FaThumbsUp size={28} className="text-green-400" />,
    title: "Fair Valuation",
    description: "We provide transparent, market-driven pricing.",
  },
  {
    icon: <FaBolt size={28} className="text-pink-400" />,
    title: "Instant Payout",
    description: "Once approved, get paid instantly via your preferred method.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-950 text-white py-24 px-6">
      <motion.h2
        className="text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Choose Us
      </motion.h2>

      <div className="grid gap-10 sm:grid-cols-2 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-2xl p-8 shadow-xl hover:scale-[1.02] transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: "easeOut",
            }}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
