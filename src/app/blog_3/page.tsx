import React from 'react';
import Image from 'next/image';

const Blog3 = () => {
    return (
        <div className="bg-[#1F1F1F] p-5">
            <div className="parentDiv w-[70%] m-auto p-9 bg-[#2B2C28] rounded-lg shadow-lg shadow-gray-800">
                <h1 className='text-center text-[3.5vw] text-[#FFFFFF]'>Bali Bliss: A Comprehensive Guide for Travelers</h1>
                <div className="image">
                    <Image src='/images/bali.jpeg' alt='bali' width={600} height={600} className='w-[100%] h-[25vw]'></Image>
                </div>
                <h2 className='capitalize mt-3 text-[2.5vw] text-[#FFFFFF]'>Introduction</h2>
                <p className='text-[1.5vw] text-[#EAEAEA]'>Bali, often referred to as the "Island of the Gods," is a tropical paradise known for its stunning landscapes, rich culture, and vibrant spirituality. With its lush rice terraces, beautiful beaches, and unique traditions, Bali offers an unforgettable experience for travelers seeking relaxation, adventure, or a mix of both. Whether you're exploring ancient temples or lounging on pristine shores, Bali has something for everyone.</p>
                
                <h2 className='capitalize mt-3 text-[2.5vw] text-[#FFFFFF]'>Iconic Attractions</h2>
                <h3 className='capitalize mt-3 text-[2vw] text-[#FF7043]'>Uluwatu Temple</h3>
                <p className='text-[1.5vw] text-[#EAEAEA]'>Perched on a cliff overlooking the Indian Ocean, Uluwatu Temple is one of Bali's most famous sea temples. The breathtaking sunset views from this vantage point are mesmerizing. Be sure to catch the traditional Kecak dance performance held here as the sun sets.</p>
                
                <h3 className='capitalize mt-3 text-[2vw] text-[#FF7043]'>Tegallalang Rice Terraces</h3>
                <p className='text-[1.5vw] text-[#EAEAEA]'>The Tegallalang Rice Terraces, located north of Ubud, are a stunning example of Bali's traditional Subak (irrigation) system. The cascading rice paddies provide a picturesque backdrop for photography and offer opportunities for trekking and exploring local villages.</p>
                
                <h3 className='capitalize mt-3 text-[2vw] text-[#FF7043]'>Sacred Monkey Forest Sanctuary</h3>
                <p className='text-[1.5vw] text-[#EAEAEA]'>Home to hundreds of playful long-tailed macaques, the Sacred Monkey Forest Sanctuary is a must-visit for animal lovers. Wander through lush jungles, ancient temples, and stone sculptures while observing these curious creatures in their natural habitat.</p>
                
                <h3 className='capitalize mt-3 text-[2vw] text-[#FF7043]'>Tanah Lot Temple</h3>
                <p className='text-[1.5vw] text-[#EAEAEA]'>Tanah Lot Temple is renowned for its stunning ocean views and dramatic sunsets. This iconic sea temple is perched on a rocky outcrop, making it one of the most photographed spots in Bali. Visit during low tide to walk around the temple and enjoy the surrounding scenery.</p>
                
                <h3 className='capitalize mt-3 text-[2vw] text-[#FF7043]'>Kuta Beach</h3>
                <p className='text-[1.5vw] text-[#EAEAEA]'>Famous for its lively atmosphere, Kuta Beach is perfect for sunbathing, surfing, and enjoying vibrant nightlife. The beach offers a range of water sports, beach clubs, and restaurants, making it a popular destination for both locals and tourists.</p>
                
                <h2 className='capitalize mt-3 text-[2.5vw] text-[#FFFFFF]'>Unique Experiences</h2>
                <ul className='mt-3'>
                    <li className='text-[1.5vw] text-[#EAEAEA] mt-2'><b><u>Traditional Balinese Cooking Class:</u></b> Immerse yourself in Balinese culture by participating in a cooking class. Learn to prepare traditional dishes using fresh local ingredients and enjoy your creations afterward!</li>
                    <li className='text-[1.5vw] text-[#EAEAEA] mt-2'><b><u>Surfing Lessons:</u></b> With its perfect waves, Bali is a surfer's paradise. Whether you're a beginner or an experienced surfer, you can find lessons and rentals along the coast.</li>
                    <li className='text-[1.5vw] text-[#EAEAEA] mt-2'><b><u>Spa and Wellness Retreats:</u></b> Indulge in Bali's renowned spa treatments. From traditional massages to holistic wellness programs, there are plenty of options to relax and rejuvenate.</li>
                </ul>
                
                <h2 className='capitalize mt-3 text-[2.5vw] text-[#FFFFFF]'>Conclusion</h2>
                <p className='text-[1.5vw] text-[#EAEAEA]'>Bali is more than just a beautiful destination; it's a place where culture, nature, and spirituality intertwine. Whether you're seeking adventure, relaxation, or a cultural experience, Bali has something to offer everyone. So pack your bags and get ready to explore the magic of the Island of the Gods!</p>
            </div>
        </div>
    )
}

export default Blog3;
