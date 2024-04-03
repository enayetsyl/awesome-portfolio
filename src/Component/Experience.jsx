import { BackgroundGradient } from "./ui/background-gradient";
import { useSharedContext } from "../context/SharedContext";

function Experience() {
  const { userData } = useSharedContext();
  return (
    <div className=" pb-20">
      <div className="bg-slate-800 flex h-48 items-center justify-center my-20">
     <h1 className="max-w-3xl  text-center text-3xl font-medium leading-tight  sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight  mx-auto text-white uppercase">
        Experience
      </h1>
      </div>
     <div className="max-w-5xl mx-auto">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {userData?.timeline?.map(
          (exp) =>
            exp.forEducation ? null : (
              <div key={exp._id} className="max-w-xs mx-auto w-full">

                <BackgroundGradient className="rounded-[22px]  p-4 sm:p-10 bg-[#433d70] dark:bg-zinc-900">
                
                  <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
                    {exp.company_name}
                  </p>
                
                  <p className="text-base sm:text-xl text-black  mb-5 dark:text-neutral-200 text-end font-bold">
                    {exp.jobTitle}
                  </p>
                  <button className="rounded-full pl-4 pr-2 py-2 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800 self-end">
                    <span>Duration</span>{" "}
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                      {new Date(exp.startDate).toLocaleDateString()}
                    </span> <span>to</span>  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                      {new Date(exp.endDate).toLocaleDateString()}
                    </span>
                  </button>
                  <div className="flex flex-col min-h-[450px] mt-10">
                  
                  <p className="text-sm text-white/80 flex-1 dark:text-neutral-400 ">
                   <span className="font-bold text-white">Summary: </span> {exp.summary}
                  </p>
                  <p className="text-sm text-white/80  dark:text-neutral-400 mt-10 flex-1">
                   <span className="font-semibold text-white"> Key Responsibilities:</span> {exp.bulletPoints?.map(item => <li key={item} className="py-2">{item}</li>)}
                  </p>
                 
                
                 
                  </div>
                </BackgroundGradient>
              </div>
            )
        )}
      </div>
     </div>
    </div>
  );
}

export default Experience;
