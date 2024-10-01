import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow z-50 sticky top-0">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-[40px] text-[#3D3D4E] font-extrabold">LOGO</h1>
        <nav>
          <ul className="flex space-x-8 text-[#3D3D4E] items-center">
            <li className='min-w-[100px]'> {/* Set a min-width */}
              <Link href="/" className="transition-all duration-300 hover:font-bold">Home</Link>
            </li>
            <li className='min-w-[100px]'>
              <Link href="/services" className="transition-all duration-300 hover:font-bold ">Services</Link>
            </li>
            <li className='min-w-[100px]'>
              <Link href="/about" className="transition-all duration-300 hover:font-bold ">About</Link>
            </li>
            <li className='min-w-[100px]'>
              <Link href="/referral" className="transition-all duration-300 hover:font-bold ">Referral</Link>
            </li>
            <li>
              <button className="px-6 py-2 bg-[#3D3D4E] text-white rounded-md">
                Book an Appointment
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
