export default function Hero() {
  return (
    <section className="py-20 lg:max-w-[1440px] lg:max-h-[604px] max-w-[430px] max-h-[680px]">
      <div className="container lg:mx-[120px] mx-[20px] flex flex-col lg:flex-row items-center lg:justify-between text-gray-800">
        <div className="lg:mb-40 lg:max-w-[500px]">
          <h2 className="lg:text-[51px] text-[24px] font-bold">Your Partner at Disability</h2>
          <p className="mt-4 lg:text-[20px] text-[16px]">
            Impact care seeks to provide good quality services for people with disabilities, ensuring that their individual<br /> requirements are met.
          </p>
          <button className="mt-6 px-6 py-2 bg-[#3D3D4E] text-white rounded-md">
            Book an Appointment
          </button>
        </div>

        {/* Right Image Grid */}
        <div className="flex justify-center lg:justify-start items-center lg:mt-10 mt-10">
          <div className="relative lg:w-[554px] lg:h-[554px] w-[340px] h-[340px]">
            {/* Create a circular image layout */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2">
              <img
                src="/k.jpg"
                alt="Person in wheelchair"
                className="w-full h-full object-cover rounded-tl-full"
              />
              
              <div className="relative w-full h-full object-cover rounded-tr-full bg-[#3970AF]">
                {/* The smaller shape positioned on top of the blue background */}
                <div className="absolute lg:top-0.5 lg:right-26 top-9 transform translate-y-1/2 lg:w-36 lg:h-36 w-[80px] h-[80px] bg-[#FCC97A] rounded-tr-full">
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
          </div>
        </div>
      </div>
    </section>
  );
}
