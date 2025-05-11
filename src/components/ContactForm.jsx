import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        license: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
            newErrors.email = "Valid email required";
        if (!form.license) newErrors.license = "Select a license type";
        if (!form.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const foundErrors = validate();
        setErrors(foundErrors);
        if (Object.keys(foundErrors).length === 0) {
            alert("Form submitted!");
        }
    };

    return (
        <section className="contact-form bg-gray-950 text-white py-24 px-6">
            <motion.h2
                className="text-5xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Get In Touch
            </motion.h2>

            <form
                onSubmit={handleSubmit}
                className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-2xl shadow-xl grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
                <div className="col-span-1">
                    <label className="block text-sm mb-2">Name</label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.name}
                        </p>
                    )}
                </div>

                <div className="col-span-1">
                    <label className="block text-sm mb-2">Email</label>
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.email}
                        </p>
                    )}
                </div>

                <div className="col-span-1">
                    <label className="block text-sm mb-2">Company</label>
                    <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none"
                    />
                </div>

                <div className="col-span-1">
                    <label className="block text-sm mb-2">License Type</label>
                    <select
                        name="license"
                        value={form.license}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none"
                    >
                        <option value="">Select License Type</option>
                        <option value="SaaS">SaaS</option>
                        <option value="Desktop">Desktop</option>
                        <option value="Cloud-based">Cloud-based</option>
                        <option value="Custom">Custom</option>
                    </select>
                    {errors.license && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.license}
                        </p>
                    )}
                </div>

                <div className="col-span-1 sm:col-span-2">
                    <label className="block text-sm mb-2">Message</label>
                    <textarea
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none"
                    />
                    {errors.message && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.message}
                        </p>
                    )}
                </div>

                <div className="col-span-1 sm:col-span-2 flex justify-center">
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-pink-600 hover:bg-pink-700 transition text-white font-semibold px-6 py-3 rounded-lg"
                    >
                        Submit
                    </motion.button>
                </div>
            </form>
        </section>
    );
}
