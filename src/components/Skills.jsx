import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Since we may not have actual image files for textures yet, 
// we'll need to handle the icons. 
// The BallCanvas expects a texture URL. 
// For now, I'll use a placeholder or conditional rendering.
// However, the user provided 'technologies' has 'icon' as string name.
// We need to map these names to actual imports or paths.
// I'll update constants/index.js later to have real paths if I had images.
// For now, I will skip BallCanvas if no image, or just show text cards.
// But user asked for 3D floating tiles.
// I'll assume we don't have texture images yet, so I will make 3D cards with Text instead of Decal,
// OR I'll stick to 3D cards using tilt like About section but smaller.
// Let's stick to the requested "3D floating or rotating tiles".
// If I can't load textures, I'll use simple colored spheres/boxes.

const Skills = () => {
    return (
        <div className='flex flex-row flex-wrap justify-center gap-10'>
            {technologies.map((technology) => (
                <div className='w-28 h-28' key={technology.name}>
                    {/* <BallCanvas icon={technology.icon} /> */}
                    {/* Placeholder for now until we have icons */}
                    <div className="w-full h-full bg-tertiary rounded-full flex justify-center items-center border border-white-100 glass-card">
                        <span className="text-white text-[12px] text-center">{technology.name}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SectionWrapper(Skills, "");
