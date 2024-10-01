"use client";

export default function ReferSection() {
  return (
    <section className="bg-white mt-16">
      {/* Top Referral Banner */}
      <div className="bg-[#90AAB2] h-44 pl-40 relative flex justify-between items-center">
        {/* Left Side: Text Content */}
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-2">Have to refer someone to our Services?</h2>
          <p className="text-lg">
            <a href="/referral-form" className="underline hover:no-underline">
              Fill in a form and we&apos;ll do the rest
            </a>
          </p>
        </div>
        
        <div className="md:w-1/2">
          <img
            src="/refer.svg" // Replace with your image path
            alt="Doctor"
            className=" object-cover h-full mb-20 pl-96"
          />
        </div>
      </div>

      {/* Bottom Call to Action */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-[#3D3D4E] mb-4">
          Overcome Ignorance and <br /> Fight for Equality
        </h2>
        <div className="flex justify-center gap-4">
          <button className="bg-[#3D3D4E] text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300">
            Book an Appointment
          </button>
          <button className="border-2 border-[#3D3D4E] text-[#3D3D4E] px-6 py-3 rounded-md hover:bg-gray-100 transition duration-300">
            Refer Someone
          </button>
        </div>
      </div>
    </section>
  );
}
