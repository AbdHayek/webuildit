"use client";
import React, { useEffect, useState } from "react";

export default function Form() {
    const [selectedOption, setSelectedOption] = useState("New Project");
    const options = ["New Project", "Joining Our Team"];
    const [showForm, setShowForm] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    // Form fields state
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    // Reset form when selectedOption changes
    useEffect(() => {
        setShowForm(false);
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
        });

        setShowForm(true);

    }, [selectedOption]);

    // Handle input changes
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        const dataToSend = {
            ...formData,
            subject: selectedOption,
        };

        setIsLoading(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSend),
            });

            if (!res.ok) {
                throw new Error("Failed to send message");
            }

            alert("Message sent successfully!");
            // Optionally reset form here
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
            });
        } catch (error) {
            alert("Error sending message. Please try again.");
            console.error(error);


        }
        finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {selectedOption === "New Project" ?
                <div className={`transition-opacity duration-500  w-full ${showForm ? "opacity-100" : "opacity-0"}`}>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Let's Talk About <span>:</span>
                    </h2>
                    <p className="text-lg mb-12 text-gray-300">
                        Have a project in mind that you think we'd be a great fit for it? We'd love to know what you're thinking
                    </p>
                </div>
                :
                <div className={`transition-opacity duration-500  w-full ${showForm ? "opacity-100" : "opacity-0"}`}>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Joining our team <span>:</span>
                    </h2>
                    <p className="text-lg mb-12 text-gray-300">
                        Our office is the internet, and our team is spread across
                        time zones. If you’re a developer, designer, or innovator who loves solving
                        problems (and maybe sipping coffee in your pajamas while doing it), we’d
                        love to meet you. Send us a message and let’s connect.
                    </p>
                </div>
            }
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
                {/* Left Side */}
                <div className="md:w-1/2">
                    <div className="space-y-6 text-xl font-medium">
                        {options.map((option) => (
                            <div
                                key={option}
                                onClick={() => setSelectedOption(option)}
                                className={`pl-4 cursor-pointer transition-all 
                                     ${selectedOption === option
                                        ? "text-[#8A3EFF] border-l-4 border-[#8A3EFF]"
                                        : "text-white hover:text-[#8A3EFF]"
                                    }`}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side (Form) */}
                <form
                    onSubmit={handleSubmit} className={`md:w-1/2 space-y-6 transition-opacity duration-500  ${showForm ? "opacity-100" : "opacity-0"}`}>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full">
                            <label className="block text-sm mb-1">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-b border-gray focus:outline-none py-2"
                            />
                        </div>
                        <div className="w-full">
                            <label className="block text-sm mb-1">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-b border-gray focus:outline-none py-2"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full">
                            <label className="block text-sm mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-b border-gray focus:outline-none py-2"
                            />
                        </div>
                        <div className="w-full">
                            <label className="block text-sm mb-1">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-b border-gray focus:outline-none py-2"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Message</label>
                        <textarea
                            rows={4}
                            name="message"
                            placeholder="Write your message.."
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent border-b border-gray focus:outline-none py-2 resize-none"
                        ></textarea>
                    </div>

                    <div className="pt-4">
                        <button disabled={isLoading} className="px-8 py-3 border cursor-pointer text-white border-[#8A3EFF] rounded-full hover:bg-[#8A3EFF] hover:text-white transition-all">
                            {isLoading ? "Sending..." : "Send message"}
                        </button>
                    </div>
                </form>
            </div >
        </>

    );
}
