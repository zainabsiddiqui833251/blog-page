import React from 'react';
import Image from 'next/image';

const Blog5 = () => {
    return (
        <div className="bg-[#1F1F1F] p-5">
            <div className="parentDiv w-[70%] m-auto p-9 bg-[#2B2C28] rounded-lg shadow-lg shadow-gray-800">
                <h1 className='text-center text-[3.5vw] text-[#FFFFFF]'>Exploring Kyoto: A Journey Through Japan's Ancient Capital</h1>
                <div className="image">
                    <Image src='/images/kyoto1.avif' alt='' width={600} height={600} className='w-[100%] h-[25vw]'></Image>
                </div>
                <h2 className='capitalize mt-3 text-[2.5vw] text-[#FFFFFF]'>Introduction</h2>
                <p className='text-[1.5vw] text-[#EAEAEA]'>Kyoto, once the imperial capital of Japan, is a city that beautifully embodies the country's rich history and culture. Renowned for its stunning temples, traditional tea houses, and serene gardens, Kyoto offers visitors a glimpse into Japan's timeless charm. Whether you're wandering through ancient streets or enjoying a peaceful moment in a Zen garden, Kyoto is a destination that captivates the soul.</p>
                
                <h2 className='capitalize mt-3 text-[2.5vw] text-[#FFFFFF]'>Iconic Attractions</h2>
                <h3 className='capitalize mt-3 text-[2vw] text-[#FF7043]'>Kinkaku-ji (Golden Pavilion)</h3>
                <p className='text-[1.5vw] text-[#EAEAEA]'>Kinkaku-ji, or the Golden Pavilion, is a stunning Zen Buddhist temple covered in gold leaf. Set amidst a picturesque garden and a reflective pond, it offers one of the most iconic views in Kyoto. Visitors can stroll through the beautifully landscaped grounds and take in the serene atmosphere.</p>
                
                <h3 className='capitalize mt-3 text-[2vw] text-[#FF7043]'>Fushimi Inari Taisha</h3>
                <p className='text-[1.5vw] text-[#EAEAEA]'>Fushimi Inari Taisha is famous for its thousands of vermillion torii gates that lead up the sacred Mount Inari. A hike through the winding paths offers not only a spiritual experience but also stunning views of the city. It's a must-see for anyone visiting Kyoto.</p>
                
                <h3 className='capitalize mt-3 text-[2vw] text-[#FF7043]'>Arashiyama Bamboo Grove</h3>
                <p className='text-[1.5vw] text-[#EAEAEA]'>Step into a magical world at the Arashiyama Bamboo Grove, where towering bamboo stalks sway gently in the breeze. Walking through this enchanting forest provides a unique sensory experience, making it a photographer's paradise.</p>
                
                <h3 className='capitalize mt-3 text-[2vw] text-[#FF7043]'>Kiyomizu-dera</h3>
                <p className='text-[1.5vw] text-[#EAEAEA]'>Kiyomizu-dera is a historic temple perched on a hillside, offering breathtaking views of the cherry blossoms in spring and vibrant foliage in autumn. The wooden stage that juts out from the main hall is a stunning sight, especially during sunset.</p>
                
                <h3 className='capitalize mt-3 text-[2vw] text-[#FF7043]'>Gion District</h3>
                <p className='text-[1.5vw] text-[#EAEAEA]'>The Gion District is known for its traditional wooden machiya houses and is a hub for geisha culture. Visitors can stroll through the narrow streets, enjoy tea ceremonies, and even catch a glimpse of geiko (geisha) and maiko (apprentice geisha) as they head to appointments.</p>
                
                <h2 className='capitalize mt-3 text-[2.5vw] text-[#FFFFFF]'>Unique Experiences</h2>
                <ul className='mt-3'>
                    <li className='text-[1.5vw] text-[#EAEAEA] mt-2'><b><u>Tea Ceremony:</u></b> Experience a traditional Japanese tea ceremony and learn about the art of matcha preparation. It's a serene way to connect with Japanese culture.</li>
                    <li className='text-[1.5vw] text-[#EAEAEA] mt-2'><b><u>Kimono Rental:</u></b> Rent a kimono and stroll through the historic streets of Kyoto. It’s a fantastic way to immerse yourself in the culture while creating unforgettable memories.</li>
                    <li className='text-[1.5vw] text-[#EAEAEA] mt-2'><b><u>Cooking Class:</u></b> Join a cooking class to learn how to make traditional Japanese dishes like sushi or ramen. It's a delicious way to understand the culinary heritage of Japan.</li>
                </ul>
                
                <h2 className='capitalize mt-3 text-[2.5vw] text-[#FFFFFF]'>Conclusion</h2>
                <p className='text-[1.5vw] text-[#EAEAEA]'>Kyoto is a city that seamlessly blends the old with the new, offering a rich tapestry of experiences for travelers. From its breathtaking temples to its serene gardens, Kyoto invites you to slow down and savor each moment. Whether you're wandering through the bamboo groves or enjoying a quiet tea ceremony, Kyoto is sure to leave a lasting impression. Plan your visit and discover the enchanting beauty of Japan’s ancient capital!</p>
            </div>
        </div>
    )
}

export default Blog5;
