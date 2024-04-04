import { ServiceCard } from "../constant"
import { useSharedContext } from "../context/SharedContext"

const Services = () => {
  const { userData } = useSharedContext()
  
  return (
    <div className="pt-20 bg-slate-950">
      <div >
      
      <h1 className="max-w-3xl  text-center text-3xl font-medium leading-tight  sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight mb-5 mx-auto text-white uppercase">Services</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto">
        {
          userData && userData?.services?.map(service => 
            service.enabled && <ServiceCard
            service={service}
            key={service._id}
            />
          )
        }
      </div>
      </div>
    </div>
  )
}

export default Services