import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { Cloud, Code, Server, Users } from "lucide-react";

const iconMap = {
    cloud: Cloud,
    code: Code,
    server: Server,
    users: Users
};

const ServiceCard = ({ index, title, icon }) => {
    const IconComponent = iconMap[icon];

    return (
        <Tilt className='xs:w-[250px] w-full'>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    show: { opacity: 1, x: 0, transition: { type: "spring", delay: index * 0.5, duration: 0.75 } },
                }}
                className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
                >
                    {IconComponent && <IconComponent size={64} className="text-white" />}

                    <h3 className='text-white text-[20px] font-bold text-center'>
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

const About = () => {
    return (
        <>
            <motion.div variants={{
                hidden: { opacity: 0, y: -50 },
                show: { opacity: 1, y: 0, transition: { type: "spring", delay: 0.1, duration: 0.75 } },
            }}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1, transition: { delay: 0.1, duration: 1 } },
                }}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                I am a Computer Science student at Parul University specializing in Cloud Computing.
                I have a strong foundation in Data Structures, Algorithms, and Object-Oriented Programming.
                As a Placement Coordinator, I have developed strong leadership and communication skills.
                I am passionate about building modern, scalable web applications and exploring AI-powered solutions.
            </motion.p>

            <div className='mt-20 flex flex-wrap gap-10 justify-center'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
