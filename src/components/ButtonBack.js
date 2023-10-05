import React from 'react';
import Link from 'next/link';

const ButtonBack = ({ index }) => {
  return <Link className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg' href={`/`}>Back to Shows</Link>;
};

export default ButtonBack;

