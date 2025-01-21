import React from 'react';
import FilterItem from './FilterItem';

const FilterSection = () => {
  return (
    <div className="h-28 w-5/6 mt-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg shadow-md mx-auto flex items-center justify-evenly">
      <FilterItem imgSrc="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/6a99be02898b225d.jpg?q=100" title="Best Offer"/>
      <FilterItem imgSrc="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e7947cc0cc4a6b7c.jpg?q=100" title="Furniture"/>
      <FilterItem imgSrc="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/4a5fb0c8e0461335.jpg?q=100" title="Electronics"/>
      <FilterItem imgSrc="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/800e00a6322c6985.jpg?q=100" title="Beauty"/>
      <FilterItem imgSrc="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/1400d6186b839cde.jpg?q=100" title="Grocery"/>
    </div>
  );
};

export default FilterSection;
