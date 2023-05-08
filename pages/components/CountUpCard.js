import React from 'react';
import CountUp from './CountUp';
import Image from 'next/image';

const CountUpCard = ({ title, end, duration, thumbnail }) => {
  return (
    <div
      className="card text-center bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-colors duration-500"
      style={{ borderWidth: '0' }}
    >
      <div className="relative w-full h-64">
        <Image
          src={thumbnail}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>
      <div className="card-body p-6">
        <h3 className="card-title text-2xl font-bold mb-4 text-gray-900 dark:text-gray-800 transition-colors duration-500">
          {title}
        </h3>
        <h4 className="card-text text-xl font-semibold text-gray-700 dark:text-gray-700 transition-colors duration-500">
          <CountUp end={end} duration={duration} />
        </h4>
      </div>
    </div>
  );
};

export default CountUpCard;
