import { useSharedContext } from "../context/SharedContext"
import EducationCard from "./EducationCard"

const Education = () => {


 
  const { userData } = useSharedContext()
  return (
    <div className="pb-20">
      <div className="bg-slate-800 flex h-48 items-center justify-center mt-10 mb-20">
     <h1 className="max-w-3xl  text-center text-3xl font-medium leading-tight  sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight  mx-auto text-white uppercase">
        Education
      </h1>
      </div>
      <div className="max-w-5xl mx-auto pb-20">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {
        userData?.timeline?.map(education => education.forEducation && <EducationCard 
        key={education._id}
        education={education}
        
        />)
      }
      
    </div>
    </div>
    </div>
  )
}

export default Education