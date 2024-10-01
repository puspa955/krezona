"use client";

export default function AppointmentSection() {
  return (
    <section className="bg-white py-12 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side: Appointment Steps */}
        <div className="md:w-1/2">
        <h2 className="text-[20px] font-bold text-[#2E4D70] flex items-center gap-1">
          <img
                src="/service.svg"
                alt="Person in wheelchair"
                className=" object-cover rounded-tl-full"
              />APPOINTMENT</h2>
          <h2 className="text-4xl font-bold text-gray-800 mb-4 pt-6">Wanna Book An Appointment</h2>
          <p className="text-gray-600 mb-6">
            At Impact Disability Support Service, we're here to help you every step of the way. 
            Making an appointment is simple and easy.
          </p>

          {/* Steps for Appointment */}
          <div className="mb-6">
            <div className="flex items-start mb-4">
              <div className="bg-[#2E4D70] text-white rounded-full h-8 w-8 flex items-center justify-center">
                1
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">Initial Contact</h3>
                <p className="text-gray-500">Reach out via phone or our website's contact form.</p>
              </div>
            </div>

            <div className="flex items-start mb-4">
              <div className="bg-[#2E4D70] text-white rounded-full h-8 w-8 flex items-center justify-center">
                2
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">Appointment Schedule</h3>
                <p className="text-gray-500">We'll coordinate your availability and schedule the appointment.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-[#2E4D70] text-white rounded-full h-8 w-8 flex items-center justify-center">
                3
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">Service Delivery</h3>
                <p className="text-gray-500">Our team will provide the service as per the appointment schedule.</p>
              </div>
            </div>
          </div>

          <button className="bg-[#3D3D4E] text-white px-6 py-3 rounded-md text-lg hover:bg-gray-800 transition duration-300">
            Book an Appointment
          </button>
        </div>

        {/* Right Side: Doctor Image */}
        <div className="md:w-1/2 pl-56">
          <img
            src="/appoin.svg" // Replace with your image path
            alt="Doctor"
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
