import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import  { useEffect, useState } from "react";
import { FiArrowDown } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { useSharedContext } from "../context/SharedContext";
import { Loading } from "../constant";


const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

 const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  const {isLoading, userData} = useSharedContext()
  const [quoteTooltip, setQuoteTooltip] = useState(false);
  const [descriptionTooltip, setDescriptionTooltip] = useState(false);
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
   <>
     <motion.section
    style={{
      backgroundImage,
    }}
    className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200 "
  >
    <div className="relative z-10 flex flex-col items-center">
      <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight mb-5"
      onMouseEnter={() => setQuoteTooltip(true)}
      onMouseLeave={() => setQuoteTooltip(false)}
      >
      {userData?.about?.name}
      </h1>
      {quoteTooltip && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-600/50 px-3 py-1.5 text-sm absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1.5 pointer-events-none rounded-full"
              >
                {userData?.about?.quote}
              </motion.div>
            )}
      <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm"
       onMouseEnter={() => setDescriptionTooltip(true)}
       onMouseLeave={() => setDescriptionTooltip(false)}
      >
      {userData?.about?.title}
      </span>
      {descriptionTooltip && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-600 px-3 py-1.5 text-sm absolute  left-10 top-24 md:top-40 transform -translate-x-1/2 mb-1.5 pointer-events-none rounded-xl z-50"
              >
                {userData?.about?.description}
              </motion.div>
            )}
      <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
        {userData?.about?.subTitle}
      </p>
      <motion.button
        style={{
          border,
          boxShadow,
        }}
        whileHover={{
          scale: 1.015,
        }}
        whileTap={{
          scale: 0.985,
        }}
        className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
      >
        Let's Start
        <FiArrowDown className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
      </motion.button>
    </div>

    <div className="absolute inset-0 z-0">
      <Canvas>
        <Stars radius={50} count={2500} factor={4} fade speed={2} />
      </Canvas>
    </div>
  </motion.section>
   
   </>
  );
};

export default Hero