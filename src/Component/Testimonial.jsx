import { InfiniteMovingCards } from "../constant/index";
import { useSharedContext } from "../context/SharedContext";

function Testimonial() {
  const { userData } = useSharedContext()
  return (
   <div className="">
<div className=" flex  items-center justify-center mb-20">
      <h1 className="max-w-3xl  text-center text-3xl font-medium leading-tight  sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight  mx-auto text-white uppercase">
        Testimonials
      </h1></div>
     <div className=" flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden pb-20">
      <InfiniteMovingCards
        items={userData?.testimonials}
        direction="right"
        speed="slow"
      />
    </div>
   </div>
  );
}

export default Testimonial;


