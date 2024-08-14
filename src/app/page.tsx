import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { ReactComponentElement } from "react";
export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-4">
        {socials.map((social: socialsStruct) => (
          <TooltipProvider key={social.tooltip}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={social.link}>
                  <Button variant="default">
                    {React.createElement(social.icon)}
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{social.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
}

const socials: socialsStruct[] = [
  {
    icon: Instagram,
    link: "https://www.instagram.com/in/kentdonovan/",
    tooltip: "Instagram",
  },
  {
    icon: Twitter,
    link: "https://www.x.com/in/kentdonovan/",
    tooltip: "Twitter",
  },
];

type socialsStruct = {
  icon: React.ElementType;
  link: string;
  tooltip: string;
};
