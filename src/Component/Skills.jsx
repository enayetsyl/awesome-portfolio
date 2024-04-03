import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { useSharedContext } from "../context/SharedContext";

const Skills = () => {
  return (
    <div className="bg-slate-800">
      <div className="flex h-48 items-center justify-center">
        <span className="max-w-3xl  text-center text-3xl font-medium leading-tight  sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight mb-5 mx-auto text-white uppercase">
          Skills
        </span>
      </div>
      <HorizontalScrollCarousel />
     
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const {userData} = useSharedContext()
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-slate-950">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {userData?.skills?.map((card) => 
          card.enabled && <Card 
          card={card} key={card._id} />
          )}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card._id}
      className="group relative h-[350px] md:h-[450px] w-[350px] md:w-[450px] overflow-hidden bg-[#38294a] rounded-xl"
    >
      <div
        style={{
          backgroundImage: `url(${card?.image?.url})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat:'none',
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute top-5 left-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-3xl md:text-4xl font-black uppercase text-black backdrop-blur-lg rounded-xl">
          {card?.name} ({card?.percentage}%)
        </p>
      </div>
    </div>
  );
};

export default Skills;

