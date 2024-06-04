import Navbar from '@/components/navbar';
import savart_logo from '@/assets/images/savart_logo.png';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-hero bg-cover bg-center h-[100vh]">
        <div>
          <Image src={savart_logo} alt="savart logo" className="pt-24 ms-16 w-24 z-10" />
          <h1 className="ms-16 mt-28 tracking-wide leading-relaxed lg:max-w-[40vw] tracking-2 text-4xl text-white font-extralight">
            Skuter Masa Depan yang Melampaui Batas dan Ekspektasi
          </h1>
        </div>
      </main>
      <main className="bg-hero bg-cover h-[100vh]"></main>
    </>
  );
}
