import React from 'react';
import Image from 'next/image';

const Blog4 = () => {
    return (
        <div className="bg-[#1F1F1F] p-5">
            <div className="parentDiv w-[70%] m-auto p-9 bg-[#2B2C28] rounded-lg shadow-lg shadow-gray-800">
                <h1 className='text-center text-[3.5vw] text-[#FFFFFF]'>New York City: The Ultimate Tourist Guide</h1>
                <div className="image">
                    <Image src='/images/newyork1.jpeg' alt='' width={600} height={600} className='w-[100%] h-[25vw]'></Image>
                </div>
                <h2 className='capitalize mt-3 text-[2.5vw] text-[#FFFFFF]'>Introduction</h2>
                <p className='text-[1.5vw] text-[#EAEAEA]'>New York City, often referred to as "The Big Apple," is a vibrant metropolis renowned for its iconic skyline, cultural diversity, and endless attractions. From world-class museums to bustling streets filled with energy, New York offers a unique blend of art, history, and entertainment that captivates millions of visitors each year. Whether you're visiting for the first time or returning for another adventure, NYC has something for everyone.</p>
                
                <h2 className='capitalize mt-3 text-[2.5vw] text-[#FFFFFF]'>Iconic Attractions</h2>
                <h3 className='capitalize mt-3 text-[2vw] text-[#FF7043]'>Statue of Liberty</h3>
                <p className='text-[1.5vw] text-[#EAEAEA]'>A symbol of freedom and democracy, the Statue of Liberty stands tall on Liberty Island. Visitors can take a ferry to explore the statue and enjoy stunning views of the Manhattan skyline. Don't miss the chance to visit the museum inside the pedestal for a deeper understanding of this iconic landmark.</p>
                
                <h3 className='capitalize mt-3 text-[2vw] text-[#FF7043]'>Central Park</h3>
                <p className='text-[1.5vw] text-[#EAEAEA]'>Central Park is an oasis in the heart of Manhattan, offering a serene escape from the bustling city. With picturesque landscapes, walking paths, and recreational activities, it’s the perfect place for a leisurely stroll, a picnic, or even a rowboat ride on the lake.</p>
                
                <h3 className='capitalize mt-3 text-[2vw] text-[#FF7043]'>The Metropolitan Museum of Art</h3>
                <p className='text-[1.5vw] text-[#EAEAEA]'>Home to over two million works of art, The Metropolitan Museum of Art is one of the largest and most prestigious art museums in the world. From ancient artifacts to contemporary masterpieces, art enthusiasts will find endless inspiration within its walls.</p>
                
                <h3 className='capitalize mt-3 text-[2vw] text-[#FF7043]'>Times Square</h3>
                <p className='text-[1.5vw] text-[#EAEAEA]'>Known as "The Crossroads of the World," Times Square is famous for its bright lights, Broadway theaters, and vibrant atmosphere. Visitors can enjoy street performances, shopping, and dining while soaking in the electric energy of this iconic location.</p>
                
                <h3 className='capitalize mt-3 text-[2vw] text-[#FF7043]'>Empire State Building</h3>
                <p className='text-[1.5vw] text-[#EAEAEA]'>A visit to New York isn't complete without seeing the Empire State Building. Ascend to the observation decks on the 86th and 102nd floors for breathtaking views of the city and beyond. It's especially magical at sunset when the city lights begin to twinkle.</p>
                
                <h2 className='capitalize mt-3 text-[2.5vw] text-[#FFFFFF]'>Unique Experiences</h2>
                <ul className='mt-3'>
                    <li className='text-[1.5vw] text-[#EAEAEA] mt-2'><b><u>Broadway Show:</u></b> Experience the magic of live theater by attending a Broadway show. From musicals to dramas, there’s a performance for every taste, making it a must-do in NYC.</li>
                    <li className='text-[1.5vw] text-[#EAEAEA] mt-2'><b><u>Food Tours:</u></b> Explore New York’s diverse culinary scene through guided food tours. Sample local favorites, including pizza, bagels, and international cuisine in neighborhoods like Chinatown and Little Italy.</li>
                    <li className='text-[1.5vw] text-[#EAEAEA] mt-2'><b><u>Brooklyn Bridge Walk:</u></b> Take a scenic walk across the iconic Brooklyn Bridge. Enjoy panoramic views of the skyline and East River while experiencing the architectural beauty of this historic landmark.</li>
                </ul>
                
                <h2 className='capitalize mt-3 text-[2.5vw] text-[#FFFFFF]'>Conclusion</h2>
                <p className='text-[1.5vw] text-[#EAEAEA]'>New York City is a destination that never ceases to amaze. With its rich history, diverse culture, and endless attractions, it promises an unforgettable experience for every traveler. Whether you're exploring iconic landmarks, indulging in culinary delights, or taking in a Broadway show, NYC is sure to leave you with cherished memories. So get ready to embark on an adventure in the concrete jungle where dreams are made!</p>
            </div>
        </div>
    )
}

export default Blog4;
