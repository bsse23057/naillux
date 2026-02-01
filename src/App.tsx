import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { ProductDetail } from './components/ProductDetail';

function App() {
  const products = [
    {
      id: 1,
      name: "Flower French",
      description:
        "Press on nails instantly showcase perfect nail shapes. Lightweight and comfortable, with a natural beauty",
      image:
        "https://m.media-amazon.com/images/I/61LgB1uDK9L._SX466_.jpg?auto=compress&cs=tinysrgb&w=800",
      route: "https://amzn.to/4qgZFbn",
    },
    {
      id: 2,
      name: "Gel Nail Strips",
      description:
        "Easy to use: Cured 60% in advance, our uv nail gel stickers are made with real liquid gel and fit all types of nail sizes and shapes. You can get new look for nails in just a few minutes.",
      image:
        "https://m.media-amazon.com/images/I/719ZemZz39L._SL1500_.jpg?auto=compress&cs=tinysrgb&w=800",
      route: "https://amzn.to/3NOk3mJ",
    },
    {
      id: 3,
      name: "French Tip Nails",
      description:
        "High-Quality Press-On Nail Kit: All Glamnetic Press-On Nail Sets offer high-quality salon style and feature protective UV coating, to ensure your nails will never break or split!",
      image:
        "https://m.media-amazon.com/images/I/712mp7mjEwL._SL1500_.jpg?auto=compress&cs=tinysrgb&w=800",
      route: "https://amzn.to/3M8feE9",
    },
    {
      id: 4,
      name: "French Gel Nail Tips",
      description:
        "Salon-Grade Classic French Mani: Ready-to-apply salon classic french style nails—just add builder gel & top coat then cure. Enjoy flawless results at home",
      image:
        "https://m.media-amazon.com/images/I/71ZBFhVcadL._SL1500_.jpg?auto=compress&cs=tinysrgb&w=800",
      route: "https://amzn.to/4rrCBHX",
    },
    {
      id: 5,
      name: "Press On Short Almond Fake Nails",
      description:
        "In just 3 minutes, you can enjoy salon-quality manicures without the need for nail polish, UV lamps, or long drying times. Let beauty come in easily achieve fashionable freedom for your fingertips.",
      image:
        "https://m.media-amazon.com/images/I/711HxQsAkaL._SL1500_.jpg?auto=compress&cs=tinysrgb&w=800",
      route: "https://amzn.to/4tcTO9B",
    },
    {
      id: 6,
      name: "Nailboo Press On Nails",
      description:
        "Salon-Look Nails in Minutes: Get an elegant manicure at home as quickly as 5 minutes with these nail press ons. These pre-shaped, trendy press ons offer a clean, timeless finish; no gel polish, dry time, or nail UV light needed",
      image:
        "https://m.media-amazon.com/images/I/71aBhlY-lLL._SX466_.jpg?auto=compress&cs=tinysrgb&w=800",
      route: "https://amzn.to/3Z7amlP",
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<Home products={products} />} />
      <Route path="/product/:productSlug" element={<ProductDetail products={products} />} />
    </Routes>
  );
}

export default App;
