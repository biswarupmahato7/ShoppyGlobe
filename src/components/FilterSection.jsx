import React, { useState } from 'react';
import FilterItem from './FilterItem';
import { ItemsContext } from '../context/ItemContext';
import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
const FilterSection = () => {
  const [filterdItems, setFilteredItems] = useState([])
  const navigate = useNavigate();


  const {items} = useContext(ItemsContext)
  console.log(items.products?.[0].category)
  //access all category
  const category = items.products?.map((product)=> product.category)
  console.log(category)
  
// remove duplicate
  function removeDuplicate(array){
    return [...new Set(array)]
  }
  const singleCategories = removeDuplicate(category)
  console.log(singleCategories)

  // category Data
  const categoryData = [
    {
      title: 'Fragrances',
      image: 'https://hauteliving.com/wp-content/uploads/2022/04/frag-4.jpg'
    },
    {
      title: 'Furniture',
      image: 'https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e7947cc0cc4a6b7c.jpg?q=100'
    },

    {
      title: 'Electronics',
      image: 'https://rukminim2.flixcart.com/fk-p-flap/64/64/image/4a5fb0c8e0461335.jpg?q=100'
    },

    {
      title: 'Beauty',
      image: 'https://rukminim2.flixcart.com/fk-p-flap/64/64/image/800e00a6322c6985.jpg?q=100'
    },
    {
      title: 'Groceries',
      image: 'https://rukminim1.flixcart.com/fk-p-flap/64/64/image/1400d6186b839cde.jpg?q=100'
    }
  ]


  return (
    <div className="h-28 w-5/6 mt-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg shadow-md mx-auto flex items-center justify-evenly">
      {
        categoryData.map((item,index)=>
          <NavLink key={index} to={`/category/${item.title}`}>

            <FilterItem  imgSrc={item.image} title={item.title}/>
          </NavLink>
        )
      }
      
    </div>
  );
};

export default FilterSection;
