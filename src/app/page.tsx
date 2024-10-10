import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-[100%] min-h-screen overflow-auto bg-[#1A1A1D] p-4">
      <h1 className="text-center text-[5vw] font-bold font-serif text-[#F0E68C]">BEST BLOGS</h1>
      <div className="parentDiv flex justify-center gap-5 items-center flex-wrap mt-8">
        <div className='blog_card transform hover:scale-105 transition-transform duration-300 w-[330px] bg-[#333333] border-solid border-[#FFD700] border-[2px] rounded-xl p-4'>
          <div className="imageContainer mb-4">
            <Image src='/images/paris.jpeg' alt='paris' width={600} height={600} className="rounded-md w-[100%] h-[150px]" />
          </div>
          <div className="title uppercase mb-2">
            <h1 className="text-xl font-bold text-[#F0E68C]">paris , france</h1>
          </div>
          <div className="description mb-4">
            <p className="text-gray-300">Known as the "City of Love," Paris offers iconic landmarks like the Eiffel Tower, world-class art at the Louvre, and exquisite cuisine, making it a romantic and cultural hub.</p>
          </div>
          <div className="button">
            <button className="bg-[#FF4500] text-white py-2 px-4 rounded-lg"><Link href='/blog_1'>Read More</Link></button>
          </div>
        </div>
        <div className='blog_card transform hover:scale-105 transition-transform duration-300 w-[330px] bg-[#333333] border-solid border-[#FFD700] border-[2px] rounded-xl p-4'>
          <div className="imageContainer mb-4">
            <Image src='/images/rome.jpeg' alt='rome' width={600} height={600} className="rounded-md w-[100%] h-[150px]" />
          </div>
          <div className="title uppercase mb-2">
            <h1 className="text-xl font-bold text-[#F0E68C]">rome , italy</h1>
          </div>
          <div className="description mb-4">
            <p className="text-gray-300">With ancient marvels like the Colosseum and Vatican City, Rome is a living museum where history, art, and Italian culture blend to create a timeless travel experience.</p>
          </div>
          <div className="button">
            <button className="bg-[#FF4500] text-white py-2 px-4 rounded-lg"><Link href='/blog_2'>Read More</Link></button>
          </div>
        </div>
        <div className='blog_card transform hover:scale-105 transition-transform duration-300 w-[330px] bg-[#333333] border-solid border-[#FFD700] border-[2px] rounded-xl p-4'>
          <div className="imageContainer mb-4">
            <Image src='/images/bali.jpeg' alt='bali' width={600} height={600} className="rounded-md w-[100%] h-[150px]" />
          </div>
          <div className="title uppercase mb-2">
            <h1 className="text-xl font-bold text-[#F0E68C]">bali , indonesia</h1>
          </div>
          <div className="description mb-4">
            <p className="text-gray-300">Bali’s stunning landscapes, from rice terraces to pristine beaches, along with its vibrant culture and spiritual retreats, make it a paradise for adventure and relaxation.</p>
          </div>
          <div className="button">
            <button className="bg-[#FF4500] text-white py-2 px-4 rounded-lg"><Link href='/blog_3'>Read More</Link></button>
          </div>
        </div>
        <div className='blog_card transform hover:scale-105 transition-transform duration-300 w-[330px] bg-[#333333] border-solid border-[#FFD700] border-[2px] rounded-xl p-4'>
          <div className="imageContainer mb-4">
            <Image src='/images/newyork.jpeg' alt='newyork' width={600} height={600} className="rounded-md w-[100%] h-[150px]" />
          </div>
          <div className="title uppercase mb-2">
            <h1 className="text-xl font-bold text-[#F0E68C]">newyork city , usa</h1>
          </div>
          <div className="description mb-4">
            <p className="text-gray-300">The energy of New York is unmatched, with landmarks like Times Square, Central Park, and the Statue of Liberty defining this iconic metropolis known for its culture, shopping, and theater.</p>
          </div>
          <div className="button">
            <button className="bg-[#FF4500] text-white py-2 px-4 rounded-lg"><Link href='/blog_4'>Read More</Link></button>
          </div>
        </div>
        <div className='blog_card transform hover:scale-105 transition-transform duration-300 w-[330px] bg-[#333333] border-solid border-[#FFD700] border-[2px] rounded-xl p-4'>
          <div className="imageContainer mb-4">
            <Image src='/images/kyoto.jpeg' alt='kyoto' width={600} height={600} className="rounded-md w-[100%] h-[150px]" />
          </div>
          <div className="title uppercase mb-2">
            <h1 className="text-xl font-bold text-[#F0E68C]">kyoto , japan</h1>
          </div>
          <div className="description mb-4">
            <p className="text-gray-300">Kyoto captures the essence of traditional Japan with its ancient temples, tranquil gardens, and seasonal beauty, offering a peaceful escape steeped in history and spirituality.</p>
          </div>
          <div className="button">
            <button className="bg-[#FF4500] text-white py-2 px-4 rounded-lg"><Link href='/blog_5'>Read More</Link></button>
          </div>
        </div>
        <div className='blog_card transform hover:scale-105 transition-transform duration-300 w-[330px] bg-[#333333] border-solid border-[#FFD700] border-[2px] rounded-xl p-4'>
          <div className="imageContainer mb-4">
            <Image src='/images/capetown.jpeg' alt='capetown' width={600} height={600} className="rounded-md w-[100%] h-[150px]" />
          </div>
          <div className="title uppercase mb-2">
            <h1 className="text-xl font-bold text-[#F0E68C]">cape town,southafrica</h1>
          </div>
          <div className="description mb-4">
            <p className="text-gray-300">Cape Town dazzles with its stunning natural beauty, from Table Mountain to beaches, along with its rich cultural heritage and vibrant atmosphere, perfect for nature and history enthusiasts.</p>
          </div>
          <div className="button">
            <button className="bg-[#FF4500] text-white py-2 px-4 rounded-lg"><Link href='/blog_6'>Read More</Link></button>
          </div>
        </div>

      </div>
    </div>
  );
}
