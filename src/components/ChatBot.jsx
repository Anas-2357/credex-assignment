import { useState } from "react";
import { FiMessageSquare } from "react-icons/fi"; // install react-icons if not already

const faq = {
    "How do I sell my license?":
        "Just upload your license file, we’ll evaluate it, and you get paid instantly.",
    "Is the process secure?":
        "Yes, we ensure encrypted handling of all license data and secure payments.",
    "How long does payment take?":
        "Payments are typically processed within 24 hours of accepting the offer.",
    "What types of licenses can I sell?":
        "You can sell unused software licenses that are transferable under the T&C",
    "Do I need to create an account?":
        "No account is required to get started, just upload your license and receive a valuation.",
    "Will I get a receipt or proof of transaction?":
        "Yes, you'll receive a confirmation email with full transaction details.",
    "Can I cancel after uploading?":
        "Yes, you're free to cancel any time before accepting the offer.",
    "Is this service free?":
        "Yes, getting a valuation is 100% free. We only take a small fee that too upon successful sale.",
};

export default function ChatBox() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([]);

    const handleQuestionClick = (question) => {
        const answer = faq[question];
        setMessages((prev) => [
            ...prev,
            { from: "user", text: question },
            { from: "bot", text: answer },
        ]);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {!open && (
                <button
                    onClick={() => setOpen(true)}
                    className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
                    aria-label="Open chat"
                >
                    <FiMessageSquare size={24} />
                </button>
            )}

            {open && (
                <div className="w-80 max-w-full shadow-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                    <div className="bg-blue-600 text-white p-3 font-semibold flex justify-between items-center">
                        <span>Chat with us 💬</span>
                        <button
                            onClick={() => setOpen(false)}
                            className="text-white text-xl leading-none hover:text-gray-200"
                            aria-label="Close chat"
                        >
                            ×
                        </button>
                    </div>

                    <div className="p-4 space-y-2 max-h-60 overflow-y-auto text-sm flex flex-col">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`p-2 rounded-lg ${
                                    msg.from === "user"
                                        ? "bg-blue-100 text-gray-900 self-end max-w-[90%]"
                                        : "bg-gray-100 dark:bg-gray-800 dark:text-gray-100 max-w-[90%]"
                                }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        {messages.length === 0 && (
                            <div className="text-gray-400">
                                Tap a question below to start.
                            </div>
                        )}
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700 p-3">
                        <div className="flex flex-wrap gap-2">
                            {Object.keys(faq).map((question, i) => (
                                <button
                                    key={i}
                                    onClick={() =>
                                        handleQuestionClick(question)
                                    }
                                    className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                                >
                                    {question}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
