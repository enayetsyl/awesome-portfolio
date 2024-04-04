import { useSharedContext } from "../context/SharedContext";
import { HoverEffect } from "../constant/index";


 function Projects() {
  const {userData} = useSharedContext()
  return (
    <div className="bg-slate-950 py-10">
      
      <h1 className="max-w-3xl  text-center text-3xl font-medium leading-tight  sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight mb-20 mx-auto text-white uppercase">Projects</h1>
    
      <div className="max-w-5xl mx-auto px-8 ">
      <HoverEffect items={userData?.projects} />
    </div>
    </div>
  );
}

export default Projects


