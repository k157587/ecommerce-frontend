import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-w-1 aspect-h-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
        </div>

        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors mb-2">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary-600">
            ${product.price}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors text-sm font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
