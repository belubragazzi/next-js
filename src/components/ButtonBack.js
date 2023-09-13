import React from 'react';
import Link from 'next/link';

const ButtonBack = ({ index }) => {
  return <Link className=' bg-blue-700 max-w-[120px] border border-slate-300 border-solid py-2 px-3 rounded-3xl hover:bg-blue-400' href={`/index.js`}>Back</Link>;
};

export default ButtonBack;
