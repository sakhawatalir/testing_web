// src/app/components/HeroSection.tsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full z-30">
      {/* Background Image */}
      <Image
        src="/hero.jpeg"
        alt="Signature Project"
        fill
        priority
        className="object-cover"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full text-white px-6 py-10">
        {/* Top Right Label */}
        <div className="w-full flex items-center justify-between gap-4">
          {/* Left Logo */}
          <img src="/Logo-lightU.png" className="h-12 w-12" alt="Logo" />

          {/* Middle Line */}
          <span className="flex-grow border-t border-1 border-white" />

          {/* Right Text */}
          <span className="text-xs md:text-xl tracking-wide uppercase">
            Signature Projects
          </span>
        </div>

        {/* Scroll Icon Bottom Center */}
        <div className="flex justify-center mb-6">
          <div className="w-8 h-16 border-2 border-white rounded-full flex items-center justify-center">
            {/* Arrow Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 text-white animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Scroll Icon Bottom Center */}
        {/* <div className="flex justify-center mb-6">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>
        </div> */}
      </div>
    </section>
  );
}
