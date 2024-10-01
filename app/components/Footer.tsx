import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
      <footer className="bg-white text-black py-6 mt-16">
         <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pl-5">
        {/* Navigation */}
        <div>
          <h5 className="font-bold mb-4">NAVIGATION</h5>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Referral</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
          </ul>
        </div>
        {/* What We Do */}
        <div>
          <h5 className="font-bold mb-4">WHAT WE DO</h5>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Household Task</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Assist-Travel/Transport</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Group/Centre Activity</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Participate Community</a></li>
          </ul>
        </div>
        {/* Legal */}
        <div>
          <h5 className="font-bold mb-4">LEGAL</h5>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">General Info</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
          </ul>
        </div>
        {/* Talk to Us */}
        <div>
          <h5 className="font-bold mb-4">TALK TO US</h5>
          <ul className="space-y-2">
            <li><a href="mailto:logo.support@logo.com" className="text-gray-600 hover:text-gray-900">logo.support@logo.com</a></li>
            <li><span className="text-gray-600">+66 2399 1145</span></li>
          </ul>
        </div>
      </div>

      {/* Logo and Social Icons */}
      <div className="container mx-auto mt-8 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
      </div>
      <div className="border mx-40"/>

      {/* Footer Bottom */}
      
      <div className="text-center mt-8 text-gray-600 grid grid-cols-3 gap-36 items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          LOGO
        </div>
        <div>
        <span>© 2024 Krezona pvt. ltd. All Rights Reserved.</span>
        </div>
        {/* Social Icons */}
        <div className="flex gap-6  ">
              <FaInstagram className="text-xl cursor-pointer" />
              <FaTwitter className="text-xl cursor-pointer" />
              <FaLinkedin className="text-xl cursor-pointer" />
              <FaFacebook className="text-xl cursor-pointer" />
            </div>
      </div>
      </footer>
    );
  }
  