import { NextPage } from 'next';
import Head from 'next/head';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Test from './components/Test';
import Appointment from './components/Appointment';
import Blogs from './components/Blogs';
import Refer from './components/Refer';
import Footer from './components/Footer';
import Introduction from './components/Introduction';


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | Disability Services</title>
      </Head>
      <Header />
      <main className='bg-[#FFFFFF]'>
       <section id="">
        <Hero />
       </section> 

       <section id="intro">
        <Introduction />
       </section>

        <section id="services">
        <Services />
       </section>

        <section id="test">
        <Test />
       </section>

        <section id="appoin">
        <Appointment />
       </section>

        <section id="blogs">
        <Blogs />
       </section>

        <section id="refer">
        <Refer />
       </section>

        <section id="footer">
        <Footer />
       </section>

      </main>
    </div>
  );
}

export default Home;
