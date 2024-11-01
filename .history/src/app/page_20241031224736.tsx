import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      
      <nav>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/service">Our Services</Link>
      </nav>
    </div>
  );
};

export default Home;
