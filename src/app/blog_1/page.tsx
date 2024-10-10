import React from 'react';
import Image from 'next/image';

const Blog1 = () => {
    return (
        <div className="bg-[#1F1F1F] p-5">
            <div className="parentDiv w-[70%] m-auto p-9 bg-[#2B2C28] rounded-lg shadow-lg shadow-gray-800">
                
                <h1 className='text-center text-[3.5vw] text-[#FFFFFF]'>Discovering the Magic of Paris: A Tourist's Guide</h1>
                <div className="image">
                    <Image src='/images/paris1.webp' alt='' width={600} height={600} className='w-[100%] h-[25vw]'></Image>
                </div>
                <h2 className='capitalize mt-3 text-[2.5vw] text-[#FFFFFF]'>Introduction</h2>
                <p className='text-[1.5vw] text-[#EAEAEA]'>Paris, often dubbed "The City of Light," is a dream destination for travelers worldwide. With its stunning architecture, rich history, and vibrant culture, Paris offers a unique blend of romance and adventure. Whether you are wandering through charming streets or enjoying world-class cuisine, there's something for everyone in this iconic city.</p>
                
                <h2 className='capitalize mt-3 text-[2.5vw] text-[#FFFFFF]'>Iconic Attractions</h2>
                <h3 className='capitalize mt-3 text-[2vw] text-[#FF7043]'>Eiffel Tower</h3>
                <p className='text-[1.5vw] text-[#EAEAEA]'>No trip to Paris is complete without a visit to the Eiffel Tower. Standing tall at 1,083 feet, this iron lattice tower offers breathtaking views of the city from its observation decks. Visitors can enjoy a meal at the 58 Tour Eiffel restaurant on the first level, making for a memorable dining experience with panoramic views.</p>
                
                <h3 className='capitalize mt-3 text-[2vw] text-[#FF7043]'>Louvre Museum</h3>
                <p className='text-[1.5vw] text-[#EAEAEA]'>Home to over 38,000 artworks, including the enigmatic Mona Lisa and the Venus de Milo, the Louvre Museum is a must-visit for art lovers. This former royal palace showcases a blend of architectural styles, making it as captivating as the art it houses.</p>
                
                <h3 className='capitalize mt-3 text-[2vw] text-[#FF7043]'>Notre-Dame Cathedral</h3>
                <p className='text-[1.5vw] text-[#EAEAEA]'>Although currently undergoing restoration, Notre-Dame Cathedral remains a symbol of Parisian Gothic architecture. Its intricate façade, stunning stained glass windows, and serene gardens make it a serene spot for reflection.</p>
                
                <h3 className='capitalize mt-3 text-[2vw] text-[#FF7043]'>Montmartre</h3>
                <p className='text-[1.5vw] text-[#EAEAEA]'>This charming neighborhood is famous for its bohemian past, artistic heritage, and the stunning Basilica of the Sacré-Cœur. Stroll through the cobbled streets, explore local art studios, and enjoy the vibrant atmosphere that has inspired artists like Picasso and Van Gogh.</p>
                
                <h3 className='capitalize mt-3 text-[2vw] text-[#FF7043]'>Champs-Élysées and Arc de Triomphe</h3>
                <p className='text-[1.5vw] text-[#EAEAEA]'>Walk along the famed Champs-Élysées, known for its luxury shops, theaters, and cafés. At the western end stands the iconic Arc de Triomphe, honoring those who fought and died for France. Climb to the top for a panoramic view of the bustling avenue and the city beyond.</p>
                
                <h2 className='capitalize mt-3 text-[2.5vw] text-[#FFFFFF]'>Unique Experiences</h2>
                <ul className='mt-3'>
                    <li className='text-[1.5vw] text-[#EAEAEA] mt-2'><b><u>Seine River Cruise:</u></b> Experience the beauty of Paris from the water by taking a Seine River cruise. These scenic boat trips offer a different perspective on the city’s landmarks, especially stunning at sunset.</li>
                    <li className='text-[1.5vw] text-[#EAEAEA] mt-2'><b><u>Culinary Delights:</u></b> Paris is a gastronomic paradise. Savor traditional French cuisine at a local bistro or indulge in pastries from world-famous patisseries like Ladurée and Pierre Hermé. Don't forget to try classic dishes such as escargot, coq au vin, and crêpes!</li>
                    <li className='text-[1.5vw] text-[#EAEAEA] mt-2'><b><u>Explore the Hidden Gems:</u></b> Venture off the beaten path to discover lesser-known neighborhoods such as Le Marais and Canal Saint-Martin. These areas are filled with quirky boutiques, cozy cafés, and a more local vibe.</li>
                </ul>
                
                <h2 className='capitalize mt-3 text-[2.5vw] text-[#FFFFFF]'>Conclusion</h2>
                <p className='text-[1.5vw] text-[#EAEAEA]'>Paris is a city that captivates the heart and soul of every traveler. Its blend of history, art, and romance creates an unforgettable experience. Whether you're climbing the Eiffel Tower, sipping coffee at a sidewalk café, or exploring world-class museums, Paris will leave you with lasting memories. So pack your bags and get ready to fall in love with the magic of Paris!</p>
            </div>
        </div>
    )
}

export default Blog1;
