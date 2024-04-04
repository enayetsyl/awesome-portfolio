// import { Label,Input,TextArea } from '../constant/index'

import { toast } from "react-toastify";
import { useState } from "react";
import { cn } from '../utils/cn';
import Label from "./ui/label";
import Input from "./ui/input";
import TextArea from "./ui/textArea";
import { useSharedContext } from "../context/SharedContext";

function ContactForm() {
  
  const { firstName, setFirstName,lastName, setLastName,email, setEmail,message, setMessage,handleContactFormSubmit } = useSharedContext()

  return (
    <div className="max-w-md w-full mx-auto  md:rounded-2xl p-4 md:p-8 shadow-input bg-[#373f77] dark:bg-black rounded-xl">
      <h2 className="font-bold text-xl text-white/90 dark:text-neutral-200 text-center">
      Drop Me a Line
      </h2>
      <p className="text-center max-w-sm mt-2 dark:text-neutral-300 text-white/80">
      Reach Out and Let's Make Something Awesome
      </p>

      <form className="my-8" onSubmit={handleContactFormSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Enayet" type="text" 
            item={firstName}
            handleChange={setFirstName}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Rahman" type="text" 
            item={lastName}
            handleChange={setLastName}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="enayetflweb@gmail.com" type="email" 
          item={email}
          handleChange={setEmail}
          />
        </LabelInputContainer>
     
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <TextArea id="message" placeholder="I want to say ...." type="text" 
          item={message}
          handleChange={setMessage}
          />
        </LabelInputContainer>
        

        <button
          className="bg-black relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        
      </form>
    </div>
  );
}

export default ContactForm

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};



const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
