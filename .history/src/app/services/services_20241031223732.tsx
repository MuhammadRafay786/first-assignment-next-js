import React from 'react';
import Link from 'next/link';

const Service = () => {
  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        <li><Link href="/service/app-development">App Development</Link></li>
        <li><Link href="/service/website-development">Website Development</Link></li>
      </ul>
      <Link href="/">Home</Link>
    </div>
  );
};

export default Service;
