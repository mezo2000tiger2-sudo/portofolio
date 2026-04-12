"use client";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { setCursorMode } from "./ui/custom-cursor";

export function Footer() {
  return (
    <footer id="contact" className="bg-background pt-32 pb-8">
      <div className="container mx-auto px-6 h-full flex flex-col lg:flex-row justify-between gap-16 lg:gap-32">

        {/* Left side */}
        <div className="lg:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-white leading-[0.9] tracking-tighter uppercase mb-6">
              LET'S BUILD<br />THE FUTURE.
            </h2>
            <p className="text-[#8888aa] font-mono text-[11px] leading-[1.8] max-w-xs mb-12 border-l border-primary/30 pl-4 uppercase tracking-widest mt-8">
              Currently accepting premier mandates for 2025. Inquire for availability regarding digital systems, interface design, or technical strategy.
            </p>
            <div className="space-y-4 font-mono text-[10px] uppercase tracking-widest text-primary/70">
              <a href="#" className="flex items-center gap-3 hover:text-primary transition-colors"><span className="text-primary/40 p-1 bg-primary/10">↗</span> IN.MUSTAFA@MAIL.COM</a>
              <a href="#" className="flex items-center gap-3 hover:text-primary transition-colors"><span className="text-primary/40 p-1 bg-primary/10">↗</span> +44 (0) 7900 000 000</a>
            </div>
          </div>
        </div>

        {/* Right side form */}
        <div className="lg:w-1/2 flex flex-col gap-8 w-full">
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="w-full">
              <label className="text-[#8888aa] font-mono text-[9px] uppercase mb-3 block tracking-widest font-bold">Name</label>
              <Input className="bg-[#111] border-b border-[#333] border-x-0 border-t-0 text-white rounded-none h-12 font-mono text-sm focus-visible:ring-0 focus-visible:border-primary px-0 placeholder:text-[#333]" placeholder="John Doe" />
            </div>
            <div className="w-full">
              <label className="text-[#8888aa] font-mono text-[9px] uppercase mb-3 block tracking-widest font-bold">Email</label>
              <Input className="bg-[#111] border-b border-[#333] border-x-0 border-t-0 text-white rounded-none h-12 font-mono text-sm focus-visible:ring-0 focus-visible:border-primary px-0 placeholder:text-[#333]" placeholder="john@company.com" />
            </div>
          </div>

          <div className="w-full">
            <label className="text-[#8888aa] font-mono text-[9px] uppercase mb-3 block tracking-widest font-bold">Message</label>
            <Textarea className="bg-[#111] border-b border-[#333] border-x-0 border-t-0 text-white rounded-none min-h-[100px] font-mono text-sm focus-visible:ring-0 focus-visible:border-primary px-0 placeholder:text-[#333] resize-none" placeholder="Tell me about your idea..." />
          </div>

          <button
            onMouseEnter={() => setCursorMode("button")}
            onMouseLeave={() => setCursorMode("default")}
            className="relative w-full bg-primary hover:bg-primary/90 transition-colors duration-300 text-black rounded-none h-14 font-mono text-[10px] font-bold uppercase tracking-widest mt-4 overflow-hidden group"
          >
            <span className="relative z-10">SUBMIT PROTOCOL <span className="ml-2 font-black">→</span></span>
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-6 mt-32 flex flex-col sm:flex-row justify-between items-center border-t border-[#222] pt-8 text-[#555] font-mono text-[9px] uppercase tracking-widest font-bold">
        <div>GT MUSTAFA <span className="bg-primary/20 text-primary p-0.5 ml-2">2024</span></div>
        <div className="flex gap-8 mt-6 sm:mt-0">
          <a href="#" className="hover:text-primary transition-colors">TWITTER</a>
          <a href="#" className="hover:text-primary transition-colors">LINKEDIN</a>
          <a href="#" className="hover:text-primary transition-colors">GITHUB</a>
        </div>
      </div>
    </footer>
  );
}
