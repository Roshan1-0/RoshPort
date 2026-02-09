import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications, codingProfiles } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const FeedbackCard = ({ index, name, issuer, image }) => (
    <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
    >
        <div className='mt-1'>
            <p className='text-white tracking-wider text-[18px]'>{name}</p>
            <div className='mt-7 flex justify-between items-center gap-1'>
                <div className='flex-1 flex flex-col'>
                    <p className='text-white font-medium text-[16px]'>
                        <span className='blue-text-gradient'>@</span> {issuer}
                    </p>
                </div>
                <div className='w-10 h-10 rounded-full bg-tertiary flex justify-center items-center text-white text-xs font-bold'>
                    {issuer?.[0] || "C"}
                </div>
            </div>
        </div>
    </motion.div>
);

const ProfileCard = ({ index, name, rating, link, color }) => (
    <Tilt className='xs:w-[250px] w-full'>
        <div
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer'
            onClick={() => window.open(link, "_blank")}
        >
            <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[150px] flex justify-evenly items-center flex-col'>
                <h3 className='text-white text-[20px] font-bold text-center'>{name}</h3>
                <p className={`${color} text-[16px] font-semibold mt-2`}>{rating}</p>
            </div>
        </div>
    </Tilt>
);

const Certifications = () => {
    return (
        <div className={`mt-12 bg-black-100 rounded-[20px]`}>
            <div
                className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
            >
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>My Learning</p>
                    <h2 className={styles.sectionHeadText}>Certifications.</h2>
                </motion.div>
            </div>
            <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
                {certifications.map((cert, index) => (
                    <FeedbackCard key={cert.name} index={index} {...cert} />
                ))}
            </div>

            <div className={`${styles.padding} pt-10`}>
                <motion.div variants={textVariant()}>
                    <h2 className={`${styles.sectionHeadText} text-center`}>Coding Profiles.</h2>
                </motion.div>

                <div className='mt-10 flex flex-wrap gap-10 justify-center'>
                    {codingProfiles.map((profile, index) => (
                        <ProfileCard key={profile.name} index={index} {...profile} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Certifications, "");
