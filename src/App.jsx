
import { ToastContainer } from "react-toastify"
import Contact from "./Component/Contact"
import Education from "./Component/Education"
import Experience from "./Component/Experience"
import Projects from "./Component/Projects"
import Social from "./Component/Social"
import Testimonial from "./Component/Testimonial"
import { Hero, Services, Skills} from "./constant"
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <div className="bg-slate-950">
    <Hero/>
   <Services/>
   <Skills/>
   <Projects/>
   <Testimonial/>
   <Experience/>
   <Education/>
   <Contact/>
   <Social/>
   <ToastContainer />
    </div>
  )
}

export default App