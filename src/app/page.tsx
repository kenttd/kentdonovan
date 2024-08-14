import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Instagram, Twitter, Github } from "lucide-react";
import React, { ReactComponentElement } from "react";
export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-4">
        {socials.map((social: socialsStruct) => (
          <TooltipProvider key={social.tooltip}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href={social.link} rel="author" target="_blank">
                  <Button variant="default">
                    {React.createElement(social.icon)}
                  </Button>
                </a>
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
    link: "https://www.instagram.com/kent_td/",
    tooltip: "Instagram",
  },
  {
    icon: Twitter,
    link: "https://www.x.com/kent_td/",
    tooltip: "Twitter",
  },
  { icon: Github, link: "https://www.github.com/kenttd", tooltip: "Github" },
];

type socialsStruct = {
  icon: React.ElementType;
  link: string;
  tooltip: string;
};
