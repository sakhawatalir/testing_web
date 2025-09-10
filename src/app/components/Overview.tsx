// src/app/components/Overview.tsx
export default function Overview() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto text-center relative">
      {/* Center Vertical Line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-300 -translate-x-1/2" />

      {/* Logo Box */}
      <div className="flex justify-center mb-10 relative z-10">
        <div className="bg-white px-4">
          <img
            src="/Logo-lightU.png"
            alt="Logo"
            className="h-10 w-10 mx-auto"
          />
        </div>
      </div>

      <div className="flex justify-center gap-[250px] items-start">
        {/* Quote */}
        <p className="text-lg text-start text-gray-400 max-w-2xl">
          “Designing Spaces, <br /> Shaping Experiences <br /> & Building Trust
          Across the <span className="font-semibold italic">UAE & Beyond.</span>
          ”
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 text-sm text-gray-700">
          <div>
            <p className="font-semibold">2018</p>
          </div>
          <div>
            <p className="inline-block border-dashed border-b border-gray-400 mb-1">
              Branches
            </p>
            <p className="font-semibold">Dubai · Bangalore · London</p>
          </div>
          <div>
            <p className="inline-block border-dashed border-b border-gray-400 mb-1">
              Team
            </p>
            <p className="font-semibold">120+</p>
          </div>
          <div>
            <p className="inline-block border-dashed border-b border-gray-400 mb-1">
              Projects Completed
            </p>
            <p className="font-semibold">200+</p>
          </div>
          <div>
            <p className="inline-block border-dashed border-b border-gray-400 mb-1">
              Active Clients
            </p>
            <p className="font-semibold">15+</p>
          </div>
          <div>
            <p className="inline-block border-dashed border-b border-gray-400 mb-1">
              Active Projects
            </p>
            <p className="font-semibold">20+</p>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-between">
        
        <p className="text-lg text-start mx-auto  text-gray-400 max-w-2xl mb-10">
          “Designing Spaces, <br /> Shaping Experiences <br /> & Building Trust
          Across the <span className="font-semibold italic">UAE & Beyond.</span>
          ”
        </p>
        
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 text-sm text-gray-700 mb-12">
            <div>
              <p className="font-semibold">2018</p>
            </div>
            <div>
              <p className="border-b-[1px]">Branches</p>
              <p className="font-semibold">Dubai · Bangalore · London</p>
            </div>
            <div>
              <p className="border-dashed border-b-[1px]">Team</p>
              <p className="font-semibold">120+</p>
            </div>
            <div>
              <p className="border-b-[1px]">Projects Completed</p>
              <p className="font-semibold">200+</p>
            </div>
            <div>
              <p className="border-b-[1px]">Active Clients</p>
              <p className="font-semibold">15+</p>
            </div>
            <div>
              <p className="border-b-[1px]">Active Projects</p>
              <p className="font-semibold">20+</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Interior vs Architecture */}
      <div className="flex items-center justify-center mt-[50px] gap-0 relative font-bold text-2xl z-10">
        <button className="px-6 py-2 border border-gray-400 rounded-full  bg-white">
          INTERIOR DESIGN
        </button>
        {/* Horizontal Divider */}
        <span className="flex-grow max-w-[400px] border-t border-gray-300" />
        <button className="px-6 py-2 border border-gray-400 rounded-full font-semibold bg-white">
          ARCHITECTURE DESIGN
        </button>
      </div>
    </section>
  );
}
