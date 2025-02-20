import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const TestimonialsSlide = () => {
    const controls = useAnimation();
    const [isHovered, setIsHovered] = useState(false);

    const slides = [
        "Insights into Neuform’s design process, strategies, and methodologies that drive exceptional results.",
        "Introduction to Neuform’s recent groundbreaking projects.",
        "Expert tips or strategies shared by Neuform’s UX designers for creating impactful user journeys.",
        "Client feedback or reviews on the impact of Neuform’s innovative solutions."
    ];

    // Duplicate slides for seamless animation
    const loopSlides = [...slides, ...slides, ...slides];

    const startAnimation = async () => {
        setIsHovered(true);
        await controls.start({
            x: ["0%", "-100%"], // Moves left infinitely
            transition: {
                duration: 25, // Adjust speed (higher = slower)
                ease: "linear",
                repeat: Infinity
            }
        });
    };

    const stopAnimation = () => {
        setIsHovered(false);
        controls.stop(); // Stops exactly where it is
    };

    return (
        <div
            className="overflow-hidden relative flex items-center h-[150px] w-full"
            onMouseEnter={startAnimation}
            onMouseLeave={stopAnimation}
        >
            <motion.div className="flex space-x-20" animate={isHovered ? controls : {}}>
                {loopSlides.map((text, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-[400px] ml-[80px] mt-10"
                    >
                        <p className="text-[20px]">{text}</p>
                        <h3 className="text-[14px] text-white/50">Testimonials</h3>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default TestimonialsSlide;
