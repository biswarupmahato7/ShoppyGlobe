// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const Advertise = () => {
  const images = [
    "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/2ee48b23a7140acb.jpeg?q=20",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1737136688_Wsite.jpg?im=Resize=(2368,400)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1737098351_Slim-Banner--2368-x-400.jpg?im=Resize=(2368,400)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1737021601_Trending_Brands_2368x400.jpg?im=Resize=(2368,400)"

  ]
  const [currentIdx, setCurrentIdx] = useState(0);

const  goToNext = ()=> {
   setCurrentIdx((previousIdx)=>(previousIdx+1)% images.length)
  }

  
  const goToPrev = () => {
    setCurrentIdx((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  useEffect(()=>{
    const interval = setInterval(goToNext, 3000);
    return ()=>clearInterval(interval)
  },[])

  return (
    <div className="h-52 w-5/6 border bg-purple-200 rounded-lg shadow-md mx-auto flex items-center mt-7 relative overflow-hidden">
      {/* Left Button */}
      <button
        className="absolute left-2 text-3xl text-purple-700
         bg-white p-2 rounded-xl hover:text-purple-900 transition-transform transform hover:scale-110 z-10"
        aria-label="Previous"
        onClick={goToNext}

      >
        <CiCircleChevLeft />
      </button>
      
      {/* Image */}
      <img
        className="w-full h-full object-fit"
        src={images[currentIdx]}
        alt="Advertised product"
      />

      {/* Right Button */}
      <button
        className="absolute right-2 text-3xl text-purple-700 
        bg-white p-2 rounded-xl hover:text-purple-900 transition-transform transform hover:scale-110 z-10"
        aria-label="Next"
        onClick={goToPrev}
      >
        <CiCircleChevRight />
      </button>
    </div>
  );
};

export default Advertise;
