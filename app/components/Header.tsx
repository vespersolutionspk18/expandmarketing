import Image from "next/image";
import React, { memo } from "react";
import dynamic from "next/dynamic";
import Button from "./Button";

// Lazy load MegaMenu since it's complex and not immediately visible
const MegaMenu = dynamic(() => import("./MegaMenu"), {
  loading: () => <div className="w-96" />, // Placeholder to prevent layout shift
  ssr: true
});

const Header = memo(() => {
  return (
    <header className="p-3 relative z-50">
      <div className="w-full rounded-full py-2.5 px-3 bg-white/50 backdrop-blur-md flex flex-row items-center justify-between">
        <Image 
          src="/logos/logo-b.svg" 
          alt="expand" 
          width={130} 
          height={120}
          priority // Logo should load immediately
          unoptimized // SVG files don't need optimization
        />
        
        <MegaMenu />

        <Button size="md">Get In Touch</Button>
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
