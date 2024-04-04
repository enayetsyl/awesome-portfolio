import {ContactForm} from '../constant/index'
import { useSharedContext } from '../context/SharedContext'

const Contact = () => {
  const { userData } = useSharedContext()
  return (
    <div className='pb-20'>
   <div className="flex items-center justify-center ">
        <span className="max-w-3xl  text-center text-3xl font-medium leading-tight  sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight mx-auto text-white uppercase">
          Contact Me
        </span>
      </div>
   <div className='max-w-5xl mx-auto pt-20 px-4'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className=' h-full max-w-md rounded-xl lg:rounded-2xl bg-[#373f77] mx-auto min-w-md w-full p-4 md:p-8 space-y-5'>
          <h1 className='text-center text-5xl text-white/90 font-bold capitalize py-5'>Myself: <br /> {userData?.about?.name}</h1>

          <p className='text-lg font-semibold text-white/80'>Lives In: {userData?.about?.address}</p>

          <p className='text-lg font-semibold text-white/80 text-end'>Write me: {userData?.about?.contactEmail}</p>

          <p className='text-lg font-semibold text-white/80 text-center'>Call me: {userData?.about?.phoneNumber}</p>

         <div className='flex justify-center'>
         <img src={userData?.about?.avatar?.url} alt={userData?.about?.avatar?.public_id}  
          style={{
            borderTopRightRadius:'150px',
            borderTopLeftRadius:'30px',
            borderBottomLeftRadius:'150px',
          }}
          className='hover:scale-90 transition-all duration-700 hover:border-4 hover:border-zinc-300 hover:scale-x-[-1] max-h-52'
          />
         </div>
        </div>
        <ContactForm/>
      </div>
   </div>
    </div>
  )
}

export default Contact