import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      
      <nav className=''>
        <Link href="/about">About Us</Link>
        <Link href="/contact"className='right-5'>Contact Us</Link>
        <Link href="/service">Our Services</Link>
      </nav>
      <h1>Welcome to Our Website</h1>
    </div>
  );
};

export default Home;
