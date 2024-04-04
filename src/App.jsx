
import { ToastContainer } from "react-toastify"
import { Contact, Education, Experience, Hero, Projects, Services, Skills, Social, Testimonial } from "./constant"
import 'react-toastify/dist/ReactToastify.css';
import Sorry from "./Component/Sorry";
import { useSharedContext } from "./context/SharedContext";

const App = () => {
  const { userData } = useSharedContext()
  return (
    <div className="bg-slate-950">
    {
      userData.length > 0 ? (<>
      <Hero/>
   <Services/>
   <Skills/>
   <Projects/>
   <Testimonial/>
   <Experience/>
   <Education/>
   <Contact/>
   <Social/>
      </>) :  <Sorry/>
    }
   <ToastContainer />
    </div>
  )
}

export default App