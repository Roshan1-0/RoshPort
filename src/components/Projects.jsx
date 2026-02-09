import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Github, ExternalLink, X } from "lucide-react";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, handleOpenModal }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer group'
            >
                <div className='relative w-full h-[230px]' onClick={() => handleOpenModal({ name, description, tags, image, source_code_link })}>
                    <div className="w-full h-full object-cover rounded-2xl bg-[#1d1836] flex justify-center items-center text-white-100">
                        {/* Placeholder for project image */}
                        <span className="font-bold text-xl">{name[0]}</span>
                    </div>

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                                window.open(source_code_link, "_blank");
                            }}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform'
                        >
                            <Github className='w-1/2 h-1/2 object-contain text-white' />
                        </div>
                    </div>
                </div>

                <div className='mt-5' onClick={() => handleOpenModal({ name, description, tags, image, source_code_link })}>
                    <h3 className='text-white font-bold text-[24px] group-hover:text-neonBlue transition-colors'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px] line-clamp-3'>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>My work</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    Following projects showcases my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories and live demos.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} handleOpenModal={setSelectedProject} />
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-80 backdrop-blur-sm p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="bg-tertiary p-8 rounded-2xl max-w-2xl w-full relative shadow-card border border-white-100/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="absolute top-4 right-4 text-secondary hover:text-white" onClick={() => setSelectedProject(null)}>
                                <X size={24} />
                            </button>

                            <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.name}</h3>

                            <div className="w-full h-64 bg-[#1d1836] rounded-xl mb-6 flex justify-center items-center">
                                <span className="text-6xl font-bold text-white-100 opacity-50">{selectedProject.name[0]}</span>
                            </div>

                            <p className="text-secondary text-[16px] leading-[30px] mb-6">
                                {selectedProject.description}
                            </p>

                            <div className="flex flex-wrap gap-4 mb-6">
                                {selectedProject.tags.map((tag) => (
                                    <span key={tag.name} className={`px-3 py-1 rounded-full text-sm font-medium border border-white/10 ${tag.color}`}>
                                        #{tag.name}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <a href={selectedProject.source_code_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-black-100 hover:bg-black-200 text-white px-4 py-2 rounded-lg transition-colors">
                                    <Github size={20} /> Source Code
                                </a>
                                {/* If live link exists, add it here */}
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default SectionWrapper(Projects, "");
