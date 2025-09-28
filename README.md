# E-Commerce Frontend

A modern React e-commerce application with routing, cart functionality, and responsive design.

## Features

- **Home Page**: Displays featured products with hero section
- **Product Listing**: Grid view of all products with filtering and sorting
- **Product Details**: Detailed product information with image gallery
- **Shopping Cart**: Add/remove items, quantity management, and order summary
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **React Router**: Client-side routing between pages
- **Context API**: Global cart state management

## Tech Stack

- React 18
- React Router DOM
- Tailwind CSS
- Context API for state management

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd ecommerce-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.js       # Navigation bar
│   ├── Footer.js       # Footer component
│   └── ProductCard.js   # Product card component
├── pages/              # Page components
│   ├── Home.js         # Home page
│   ├── ProductListing.js # Products page
│   ├── ProductDetails.js # Product details page
│   └── Cart.js         # Shopping cart page
├── context/            # Context providers
│   └── CartContext.js  # Cart state management
├── data/               # Static data
│   └── products.js     # Product data
├── App.js              # Main app component
├── index.js            # App entry point
└── index.css           # Global styles
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Features Overview

### Navigation
- Responsive navbar with cart counter
- Breadcrumb navigation on product pages
- Mobile-friendly menu

### Product Management
- Featured products on homepage
- Product filtering by category
- Sorting by price, rating, and name
- Detailed product pages with images

### Shopping Cart
- Add/remove products
- Quantity adjustment
- Real-time total calculation
- Free shipping threshold
- Order summary with tax calculation

### Responsive Design
- Mobile-first approach
- Grid layouts that adapt to screen size
- Touch-friendly interface
- Optimized images and loading

## Customization

### Adding New Products
Edit `src/data/products.js` to add new products:

```javascript
{
  id: 9,
  name: "New Product",
  price: 99.99,
  image: "https://example.com/image.jpg",
  description: "Product description",
  category: "Electronics",
  featured: false,
  rating: 4.5,
  reviews: 50
}
```

### Styling
The app uses Tailwind CSS for styling. Customize colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
      }
    }
  }
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).
