import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      
     <nav className=''></button>
     <button><Link href="/about">About Us</Link>
       <button><Link href="/contact">Contact Us</Link></button> 
       <button><Link href="/service">Our Services</Link>
      </nav>
      <h1>Welcome to Our Website</h1>
    </div>
  );
};

export default Home;
