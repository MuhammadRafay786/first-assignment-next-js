import React from 'react';
import Link from 'next/link';

const AppDevelopment = () => {
  return (
    <div>
      <h1>App Development</h1>
      <p>Details about App Development services.</p>
      <Link href="/service">Back to Services</Link>
      <Link href="/">Home</Link>
    </div>
  );
};

export default AppDevelopment;
    