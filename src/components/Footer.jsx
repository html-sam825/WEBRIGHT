import React from "react";
import { footerList } from "../data/data";
import { Send } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-16 bg-neutral-800">
            <div className="container">
                {/* foot top */}
                <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1fr_0.7fr_0.7fr_0.7fr]">
                    {/* footer brand */}
                    <div >
                        {/* footer brand */}
                        <div>
                            <img src="/images/footer-logo.png" alt="footer logo" />
                        </div>
                        <p className="mt-3">Simple, secure, and smart payments  built for everyday use.</p>
                    </div>
                    {/* footer List */}
                    {footerList.map((list) => (
                        <div className="" key={list.id}>
                            <p className="text-white text-xl font-semibold mb-3">{list.title}</p>
                            <ul className="grid gap-3">
                                {
                                    list.links.map((link, index) => (
                                        <li key={index}>
                                            <a href="#" className="text-neutral-300 hover:text-neutral-50 transition-colors">{link.label}</a>

                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter input  */}

                    <div>
                        <h4 className="text-xl text-while font-semibold">Newsletter Signup</h4>
                        <p className="">Stay update with the  latest <br /> features and  offers.</p>

                        <div className="bg-white relative rounded rounded-full max-w-[300px]">
                            <input type="email" placeholder="Your Email" className="w-full h-full py-4 indent-5 rounded-full" required />
                            <button type="submit" className="absolute top-1/2 right-2-translate-y-1/2 bg-purple-400 h-[80%] w-18 flex items-center text-white justisfy-center rounded-full hover:bg-purple-700 transition-colors">
                                <Send size={24} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* footer bottom */}
                <div className="mt-16 text-center">&copy; {new Date().getFullYear()} 2025 Monexa All rights reserved.</div>
            </div>
        </footer>
    )
}

export default Footer