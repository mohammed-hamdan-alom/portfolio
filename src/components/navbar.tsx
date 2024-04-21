"use client";

import React, { useState, useEffect } from "react";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"



const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <nav className="flex flex-row items-center w-full">
      <div className="flex w-1/2 justify-start">
        M.H. Alom
      </div>
      <div className="flex w-1/2 justify-end">
        { isClient && 
          <TooltipProvider>
            <Tooltip delayDuration={100}>
              <TooltipTrigger >
                <Button variant="outline" size="icon" onClick={toggleTheme} >
                  <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only" >Toggle theme</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-secondary" >
                <p className="text-foreground" >Toggle Theme</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        }
      </div>
    </nav>
  );
};


export default Navbar;
