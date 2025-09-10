// src/app/components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 px-6 text-center border-t border-gray-200 relative">
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-300 -translate-x-1/2" />
      {/* Action Buttons with Lines */}
      <div className="flex items-center justify-center gap-16 mb-10 relative">
        {/* Horizontal Line */}
        <span className="absolute top-1/2 left-0 right-0 w-[100px] border-t border-gray-300 -z-10" />

        {/* Vertical Line (center) */}
        <span className="absolute top-0 bottom-0 left-1/2 border-l border-dashed border-gray-300 -translate-x-1/2 -z-10" />

        {/* Buttons */}
        <Link
          href="#services"
          className="px-5 py-2 border rounded-full text-sm font-medium bg-white hover:bg-black hover:text-white transition relative z-10"
        >
          View Services
        </Link>
        <Link
          href="#projects"
          className="px-5 py-2 border rounded-full text-sm font-medium bg-white hover:bg-black hover:text-white transition relative z-10"
        >
          Our Projects
        </Link>
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Image
          src="/logo.png" // apna logo rakhein public/logo.png me
          alt="Top Concept"
          width={140}
          height={60}
        />
      </div>

      {/* Branches */}
      <p className="font-semibold tracking-wide mb-4">
        DUBAI · BANGLORE · LONDON
      </p>

      {/* Contact Info */}
      <div className="text-sm text-gray-600 space-y-1">
        <p>612 Al Fattan Plaza - Al Garhoud - Deira Dubai UAE</p>
        <p>+971 4 255 5559 | info@topconcept.ae</p>
      </div>
    </footer>
  );
}
