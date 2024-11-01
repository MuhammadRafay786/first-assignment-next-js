import React from 'react';
import Link from 'next/link';

const WebsiteDevelopment = () => {
  return (
    <div>
      <h1>Website  Development</h1>
      <p>Details about Website Development services.</p>
      <Link href="/service">Back to Services</Link>
      <Link href="/">Home</Link>
    </div>
  );
};

export default WebsiteDevelopment;
