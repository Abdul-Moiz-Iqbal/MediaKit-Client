import React from 'react';
import { MediaCard } from './MediaCard';
import CreateMediaKitCard from './CreateMediaKitCard';

const mediaCardsData = [
  { name: 'Alice', followers: 1234 },
  { name: 'Bob', followers: 5678 },
//   { name: 'Charlie', followers: 9101 },

  // Add more media card data as needed
];

const MediaKits = () => {
  return (
    <div className='flex'>
      <div className='flex-[0.69] mx-auto mt-14'>
        <div className='text-[20px] font-[600] text-center md:text-start'>My MediaKits</div>
        <div className='mt-10 flex flex-wrap justify-center md:justify-start gap-8'>
          {mediaCardsData.map((card, index) => (
            <MediaCard key={index} name={card.name} followers={card.followers} />
          ))}
          {mediaCardsData.length >=3? '':<CreateMediaKitCard />}
          
        </div>
      </div>
    </div>
  );
};

export default MediaKits;
