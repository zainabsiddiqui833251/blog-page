import React from 'react';
import Image from 'next/image';

const Blog2 = () => {
    return (
        <div className="bg-[#1F1F1F] p-5">
            <div className="parentDiv w-[70%] m-auto p-9 bg-[#2B2C28] rounded-lg shadow-lg shadow-gray-800">
                <h1 className='text-center text-[3.5vw] text-[#FFFFFF]'>Exploring the Eternal City: A Tourist's Guide to Rome</h1>
                <div className="image">
                    <Image src='/images/rome1.avif' alt='' width={600} height={600} className='w-[100%] h-[25vw]'></Image>
                </div>
                <h2 className='capitalize mt-3 text-[2.5vw] text-[#FFFFFF]'>Introduction</h2>
                <p className='text-[1.5vw] text-[#EAEAEA]'>Rome, known as the "Eternal City," is a captivating destination that seamlessly blends ancient history with modern charm. With its iconic landmarks, vibrant culture, and delectable cuisine, Rome offers an unforgettable experience for travelers. From the Colosseum to the Vatican, every corner of the city tells a story, making it a must-visit for history buffs and food lovers alike.</p>
                
                <h2 className='capitalize mt-3 text-[2.5vw] text-[#FFFFFF]'>Iconic Attractions</h2>
                <h3 className='capitalize mt-3 text-[2vw] text-[#FF7043]'>Colosseum</h3>
                <p className='text-[1.5vw] text-[#EAEAEA]'>The Colosseum is one of the most recognizable landmarks in Rome and a symbol of the city's rich history. This ancient amphitheater, built in 70-80 AD, could hold up to 80,000 spectators who gathered to watch gladiatorial contests and public spectacles. A visit here is a journey back in time.</p>
                
                <h3 className='capitalize mt-3 text-[2vw] text-[#FF7043]'>Vatican City</h3>
                <p className='text-[1.5vw] text-[#EAEAEA]'>Home to the Pope and a treasure trove of art, Vatican City is a must-see when in Rome. The breathtaking St. Peter's Basilica, the Vatican Museums, and the Sistine Chapel, with Michelangelo's stunning ceiling, offer a glimpse into the city's religious and artistic heritage.</p>
                
                <h3 className='capitalize mt-3 text-[2vw] text-[#FF7043]'>Roman Forum</h3>
                <p className='text-[1.5vw] text-[#EAEAEA]'>The Roman Forum was once the heart of ancient Rome, bustling with markets, temples, and public spaces. Today, visitors can explore the ruins and imagine what life was like during the Roman Empire. The stunning architecture and rich history make it a highlight of any visit.</p>
                
                <h3 className='capitalize mt-3 text-[2vw] text-[#FF7043]'>Trevi Fountain</h3>
                <p className='text-[1.5vw] text-[#EAEAEA]'>The Trevi Fountain is one of the most famous fountains in the world. Legend has it that throwing a coin into the fountain ensures your return to Rome. With its intricate sculptures and stunning Baroque design, it's a picturesque spot to relax and soak in the atmosphere.</p>
                
                <h3 className='capitalize mt-3 text-[2vw] text-[#FF7043]'>Piazza Navona</h3>
                <p className='text-[1.5vw] text-[#EAEAEA]'>Piazza Navona is a lively square that showcases the beauty of Baroque architecture. Once a stadium for athletic competitions, it is now filled with street artists, musicians, and cafes. The stunning Fountain of the Four Rivers at its center is a masterpiece worth admiring.</p>
                
                <h2 className='capitalize mt-3 text-[2.5vw] text-[#FFFFFF]'>Unique Experiences</h2>
                <ul className='mt-3'>
                    <li className='text-[1.5vw] text-[#EAEAEA] mt-2'><b><u>Culinary Tours:</u></b> Discover the flavors of Rome on a culinary tour. From traditional pasta dishes to gelato tasting, explore the local food scene and learn about Italian cuisine from local chefs.</li>
                    <li className='text-[1.5vw] text-[#EAEAEA] mt-2'><b><u>Trastevere Neighborhood:</u></b> Wander through the charming streets of Trastevere, known for its vibrant nightlife, artisanal shops, and local trattorias. This area offers a more authentic Roman experience, away from the typical tourist spots.</li>
                    <li className='text-[1.5vw] text-[#EAEAEA] mt-2'><b><u>Explore Ancient Ostia:</u></b> Just a short train ride from Rome, Ostia Antica is a well-preserved ancient Roman port city. Explore the ruins and get a glimpse of daily life in ancient Rome.</li>
                </ul>
                
                <h2 className='capitalize mt-3 text-[2.5vw] text-[#FFFFFF]'>Conclusion</h2>
                <p className='text-[1.5vw] text-[#EAEAEA]'>Rome is a city that enchants visitors with its blend of history, art, and culture. Whether you are marveling at the Colosseum, savoring authentic Roman pizza, or strolling through its charming streets, the Eternal City offers a unique travel experience that will leave you with cherished memories. Pack your bags and immerse yourself in the wonders of Rome!</p>
            </div>
        </div>
    )
}

export default Blog2;
