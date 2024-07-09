"use client"
import React from 'react';
import { Button } from '@/components/ui/moving-border';


const Body = () => {
  return (
    <div className="py-64 px-4 mx-auto max-w-fit text-center">
      <div className='mb-4 leading-none md:text-5xl lg:text-6xl'>
        <span className="text-9xl text-red-500 font-bold">X </span>
        <span className="text-9xl font-bold">online Users</span>
         <div className="text-[25px] py-3 tracking-normal leading-8 font-normal max-w-4xl text-second-text">
          A community like no other with never seen before features, such as
          verification, trustfactor, report- and ban-function and much more.
        </div>
        <div>
      <Button
        borderRadius="1rem"
        className="bg-transparent text-white  border-connect-red "
      >
        JOIN NOW
      </Button>
    </div>
      </div>
      </div>
  );
};

export default Body;
