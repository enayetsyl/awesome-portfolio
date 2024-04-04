import { cn } from "../../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useSharedContext } from "../../context/SharedContext";

 const HoverEffect = ({ items, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { hoveredIndex, setHoveredIndex,selectedFilters,  handleFilterChange} = useSharedContext()
  

  const filteredItems = selectedFilters?.length
  ? items?.filter((item) =>
      item?.techStack?.some((tech) =>
        selectedFilters?.includes(tech.trim())
      )
    )
  : items;

  useEffect(() => {
    if(isOpen){
      disablePageScroll()
    } else{
      enablePageScroll()
    }
  
  }, [isOpen])
  

  return (
    <>
    <div className="flex justify-center mt-4 space-x-4 flex-wrap gap-5">
    {uniqueTechStack(items)?.map((tech) => (
      <button
        key={tech}
        onClick={() => handleFilterChange(tech)}
        className={cn(
          "px-4 py-2 rounded-md border border-transparent focus:outline-none focus:border-black dark:focus:border-white",
          selectedFilters.includes(tech)
            ? "bg-black text-white dark:bg-white dark:text-black"
            : "bg-white dark:bg-black text-black dark:text-white"
        )}
      >
        {tech}
      </button>
    ))}
  </div>
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {filteredItems?.map((item, idx) => 
      item.enabled && (
        <div
          href={item?.liveurl}
          key={idx}
          className="relative group block p-2 h-full w-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => setIsOpen(idx)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
                />
                )}
          </AnimatePresence>
               
          <Card>
            <CardTitle>{item?.title}</CardTitle>
            <CardDescription>{item?.description}</CardDescription>
          </Card>
          <SpringModal isOpen={isOpen === idx} setIsOpen={setIsOpen} item={item} /> 
        </div>
      )
      )}
     
    </div>
    </>
  );
};

export default HoverEffect

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-[#173164] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

const SpringModal = ({ isOpen, setIsOpen, item }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0c2b56] text-white p-6 rounded-xl w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            
            <div className="relative z-10">
              <img src={item?.image?.url} alt={item?.image?.public_id} className="rounded-xl" />
              {/* <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <FiAlertCircle />
              </div> */}
             <div className="flex justify-around mt-2 underline">
             <a className="text-xl font-bold text-center mb-2"
             href={item?.liveurl}
             >
                Live Site
              </a>
              <a className="text-xl font-bold text-center mb-2"
               href={item?.githuburl}
              >
                Git Hub
              </a>
             </div>
             <div className="flex justify-center items-center gap-5 flex-wrap  font-semibold my-5 ">
              {
                item?.techStack?.map(stack => <span key={stack} className="bg-black/50 py-1 px-3 rounded-xl">{stack}</span>)
              }
              
             </div>
              
              <div className="flex justify-center ">
               
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold "
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


const uniqueTechStack = (items) => {
  const techStackSet = new Set();
  items?.forEach((item) => {
    item?.techStack?.forEach((tech) => techStackSet?.add(tech.trim()));
  });
  return Array.from(techStackSet);
};