export default function Hero() {
  return (
    <section className="relative py-20 max-w-[1440px]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-gray-800">
        <div className="w-full mb-60">
          <h2 className="text-6xl font-bold">Your Partner at <br/> Disability</h2>
          <p className="mt-4 text-xl">
            Impact care seeks to provide good quality services for <br/> people with disabilities, ensuring that their individual<br/> requirements are met.
          </p>
          <button className="mt-6 px-6 py-2 bg-[#3D3D4E] text-white rounded-md">
            Book an Appointment
          </button>
        </div>

        {/* Right Image Grid */}
        <div className="lg:w-1/2 relative">
          <div className="relative w-[660px] h-[660px]">
            {/* Create a circular image layout */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2">
              <img
                src="/k.jpg"
                alt="Person in wheelchair"
                className="w-full h-full object-cover rounded-tl-full"
              />
              
              <div className="relative w-full h-full object-cover rounded-tr-full bg-[#3970AF]">
                {/* The smaller shape positioned on top of the blue background */}
                <div className="absolute top-11 right-26 transform translate-y-1/2 w-36 h-36 bg-[#FCC97A] rounded-tr-full">
                {/* Optionally add content inside the smaller shape */}
                </div>
              </div>
              
              <img
                src="/l.jpg"
                alt="Person in wheelchair"
                className="w-full h-full object-cover rounded-bl-full"
              />
              <img
                src="/m.jpg"
                alt="Person in wheelchair"
                className="w-full h-full object-cover rounded-br-full"
              />
            </div>

            {/* Green circle in the center */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-14 h-14 bg-[#0CAF7F] rounded-full border-8 border-white">
                {/* Optionally, add inner content */}
              </div>
            </div>

            {/* The circular border */}
          </div>
        </div>
      </div>
    </section>
  );
}
