// src/app/components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="py-16 px-6 text-center relative">
        {/* Center Vertical Line (desktop only) */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gray-300 -translate-x-1/2" />

        {/* Action Buttons with Line */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-4 md:gap-6 relative font-bold text-base md:text-xl z-40">
          <Link
            href="#services"
            className="w-full md:w-auto px-5 py-2 border rounded-full text-sm font-medium bg-white hover:bg-black hover:text-white transition relative z-10"
          >
            View Services
          </Link>

          {/* Horizontal Divider (desktop only) */}
          <span className="hidden md:block flex-grow max-w-[200px] border-t border-gray-300" />

          <Link
            href="#projects"
            className="w-full md:w-auto px-5 py-2 border rounded-full text-sm font-medium bg-white hover:bg-black hover:text-white transition relative z-10"
          >
            Our Projects
          </Link>
        </div>

        {/* Logo */}
        <div className="flex justify-center my-8">
          <Image
            src="/logo.png"
            alt="Top Concept"
            width={140}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Branches */}
        <p className="font-semibold tracking-wide mb-4 text-sm md:text-base">
          DUBAI · BANGLORE · LONDON
        </p>

        {/* Contact Info */}
        <div className="text-xs md:text-sm text-gray-600 space-y-1">
          <p>612 Al Fattan Plaza - Al Garhoud - Deira Dubai UAE</p>
          <p>+971 4 255 5559 | info@topconcept.ae</p>
        </div>
      </footer>
    </>
  );
}
