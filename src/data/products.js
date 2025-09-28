export const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    category: "Electronics",
    featured: true,
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    description: "Advanced smartwatch with health monitoring, GPS, and water resistance.",
    category: "Electronics",
    featured: true,
    rating: 4.8,
    reviews: 89
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    description: "Durable laptop backpack with multiple compartments and USB charging port.",
    category: "Accessories",
    featured: false,
    rating: 4.3,
    reviews: 67
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    description: "Portable Bluetooth speaker with 360-degree sound and 12-hour battery.",
    category: "Electronics",
    featured: true,
    rating: 4.6,
    reviews: 156
  },
  {
    id: 5,
    name: "Coffee Maker",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
    description: "Programmable coffee maker with built-in grinder and thermal carafe.",
    category: "Home",
    featured: false,
    rating: 4.4,
    reviews: 92
  },
  {
    id: 6,
    name: "Fitness Tracker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=400",
    description: "Advanced fitness tracker with heart rate monitoring and sleep tracking.",
    category: "Electronics",
    featured: false,
    rating: 4.2,
    reviews: 203
  },
  {
    id: 7,
    name: "Wireless Mouse",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    description: "Ergonomic wireless mouse with precision tracking and long battery life.",
    category: "Accessories",
    featured: false,
    rating: 4.7,
    reviews: 145
  },
  {
    id: 8,
    name: "Desk Lamp",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    description: "LED desk lamp with adjustable brightness and color temperature.",
    category: "Home",
    featured: false,
    rating: 4.1,
    reviews: 78
  },
  {
    id: 9,
    name: "Desk Lamp",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    description: "LED desk lamp with adjustable brightness and color temperature.",
    category: "Home",
    featured: false,
    rating: 4.1,
    reviews: 78
  }
];

export const featuredProducts = products.filter(product => product.featured);
