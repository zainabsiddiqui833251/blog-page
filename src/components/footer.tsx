import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-[#f0f0f0] py-4">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} BlogPage. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <a href="/blog_1" className="hover:text-[#ff7043] mb-2 md:mb-0">Paris, France</a>
            <a href="/blog_2" className="hover:text-[#ff7043] mb-2 md:mb-0">Rome, Italy</a>
            <a href="/blog_3" className="hover:text-[#ff7043] mb-2 md:mb-0">Bali, Indonesia</a>
            <a href="/blog_4" className="hover:text-[#ff7043] mb-2 md:mb-0">New York City, USA</a>
            <a href="/blog_5" className="hover:text-[#ff7043] mb-2 md:mb-0">Kyoto, Japan</a>
            <a href="/blog_6" className="hover:text-[#ff7043] mb-2 md:mb-0">Cape Town, South Africa</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

