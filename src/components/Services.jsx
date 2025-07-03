import React from "react";
import { servicesCardItems } from "../data/data";

const Services = () => {
    return (
        <section className="section bg-purple-50 pb-[120px] md:pb[150px ]" id="services">
            <div className="container">
                <p className="subtitle">Our services</p>
                <h2>What We Offer</h2>

                {/* card wrapper */}

                <div className="grid gap-6 mt-10 md:mt-16 sm:grid-cols-2 md:grid-cols-3">{servicesCardItems.map((item) => (
                    <div className="bg-white border-purple-300 px-5 rounded-lg text-center pd-20  " key={item.id}>
                        {/* card icon */}
                        <figure className="bg-purple-400 max-w-max mx-auto w-[180px] p-6 rounded-bl-full rounded-br-full">
                            <img src={item.icon} alt={item.title} />
                        </figure>

                        {/* card content */}
                        <div className="mt-7 px-6">
                            <h4 className="mb-3 text-xl md:text-2xl">{item.title}</h4>
                            <p>{item.text}</p>
                        </div>
                    </div>
                ))}</div>
            </div>
        </section>
    )
}

export default Services