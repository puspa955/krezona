export default function Services() {
    return (
      <section className=" pt-28 mt-20">
        <div className="container mx-auto text-center">
          <h2 className="text-[20px] font-bold text-[#2E4D70] flex items-center gap-1 justify-center">
          <img
                src="/service.svg"
                alt="Person in wheelchair"
                className=" object-cover rounded-tl-full"
              />OUR BLOGS</h2>
              <h1 className="text-gray-800 font-bold text-[48px]">Latest Blogs & Articles</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-10">
          <div className="pb-8 bg-white shadow rounded-lg flex flex-col items-center justify-center text-center">
          <img
            src="/blog.svg"
            alt="Person in wheelchair"
            className="object-cover mb-4 w-full"
          />
          <h3 className="text-xl font-bold text-gray-800">Household Task</h3>
          <p className="mt-2 text-gray-600">Learn more about our range of cleaning and housekeeping services.</p>
        </div>

        <div className="pb-8 bg-white shadow rounded-lg flex flex-col items-center justify-center text-center">
        <img
            src="/blog.svg"
            alt="Person in wheelchair"
            className="object-cover mb-4 w-full"
          />
          <h3 className="text-xl font-bold text-gray-800">Assist-Travel/Transport</h3>
          <p className="mt-2 text-gray-600">Learn more about our range of cleaning and housekeeping services.</p>
        </div>
        <div className="pb-8 bg-white shadow rounded-lg flex flex-col items-center justify-center text-center">
        <img
            src="/blog.svg"
            alt="Person in wheelchair"
            className="object-cover mb-4 w-full"
          />
          <h3 className="text-xl font-bold text-gray-800">Group/Centre Activity</h3>
          <p className="mt-2 text-gray-600">Learn more about our range of cleaning and housekeeping services.</p>
        </div>
     
            {/* Repeat for other services */}
          </div>
          <button className="mt-6 px-6 py-2 bg-[#3D3D4E] text-white rounded-md">
            View all
          </button>
        </div>
      </section>
    );
  }
  