import React from "react";
import { Button } from "@/components/ui/button";
import { DoubleArrowDownIcon, PaperPlaneIcon } from "@radix-ui/react-icons";



const Hero = () => {
  return (
      <section className="flex flex-col items-center md:items-start">
        <div className="pb-4 text-center md:text-left ">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ">
          Hi, I'm Mohammed Alom 👋
          </h1>
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-4">
            A full-stack developer based in London, UK
          </h2>
        </div>
        <div className="flex flex-row space-x-4">
          <Button className="">
            See my work 
            <DoubleArrowDownIcon className="ml-2 h-4 w-4" />  
          </Button>
          <Button variant={"secondary"}>
            Contact me
            <PaperPlaneIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    );
};

export default Hero;
 