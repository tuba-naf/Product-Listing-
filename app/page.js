'use client';
import React, { useState, useEffect } from 'react';
import ProductGrid from './Components/ProductGrid'; 
import SearchBar from './Components/Searchbar'; 
import CategoryFilter from './Components/CategoryFilter'; 
import PriceSorter from './Components/PriceSorter'; 
import productsData from './data/products.json'
import categoriesData from './data/categories.json';

const HomePage = () => {
  const [products, setProducts] = useState(productsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const filterAndSort = () => {
    let filtered = [...productsData];

    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (sortOrder === 'lowToHigh') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'highToLow') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setProducts(filtered);
  };

  useEffect(() => {
    filterAndSort();
  }, [searchTerm, selectedCategory, sortOrder]);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchBar onSearch={setSearchTerm} />
        <CategoryFilter categories={categoriesData} onSelect={setSelectedCategory} />
        <PriceSorter onSort={setSortOrder} />
      </div>
      <ProductGrid products={products} />
    </main>
  );
};

export default HomePage;
