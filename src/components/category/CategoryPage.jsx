import React from 'react'
import { ItemsContext } from '../../context/ItemContext'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Item from '../Items/Item'
const CategoryPage = () => {
  const {categoryName} = useParams()
  const {items} = useContext(ItemsContext)

  //FILTER PRODUCTS BASED ON CATEGORIES
  const filteredProducts = items.products?.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );
  console.log(filteredProducts)

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Category: {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts?.length > 0 ? (
          filteredProducts.map((product) => (
            <Item
              key={product.id}
              id={product.id}
              image={product.thumbnail}
              title={product.title}
              price={product.price}
              rating={product.rating}
              category={product.category}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-lg text-gray-600">
            No products found for this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;