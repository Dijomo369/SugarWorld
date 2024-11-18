import { ProductCard } from './product-card';

const products = [
  {
    name: "Number Cake",
    price: 105.00,
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80",
    description: "Customizable number-shaped cake with fresh berries and cream"
  },
  {
    name: "Matcha Dream",
    price: 32.00,
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80",
    description: "Japanese-inspired matcha cake with delicate layers"
  },
  {
    name: "Berry Pavlova",
    price: 28.00,
    image: "https://images.unsplash.com/photo-1464195244916-405fa0a82545?auto=format&fit=crop&q=80",
    description: "Light meringue dessert topped with fresh seasonal berries"
  },
  {
    name: "Chocolate Symphony",
    price: 36.00,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80",
    description: "Decadent chocolate layers with gold-dusted decorations"
  },
  {
    name: "Tropical Paradise",
    price: 30.00,
    image: "https://images.unsplash.com/photo-1551404973-761c83cd8339?auto=format&fit=crop&q=80",
    description: "Exotic fruit tart with mango, passion fruit, and coconut"
  },
  {
    name: "Rose Macaron Tower",
    price: 95.00,
    image: "https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&q=80",
    description: "Elegant tower of rose-flavored French macarons"
  },
  {
    name: "Citrus Delight",
    price: 28.00,
    image: "https://images.unsplash.com/photo-1534432182912-63863115e106?auto=format&fit=crop&q=80",
    description: "Refreshing lemon tart with Italian meringue"
  },
  {
    name: "Black Forest Dream",
    price: 42.00,
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80",
    description: "Classic German cake with cherries and chocolate shavings"
  },
  {
    name: "Golden Cruffin",
    price: 26.00,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80",
    description: "Croissant-muffin hybrid with caramelized sugar"
  }
];

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.name}
          {...product}
        />
      ))}
    </div>
  );
}