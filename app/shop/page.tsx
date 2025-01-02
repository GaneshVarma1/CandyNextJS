"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { FooterMinimal } from "@/components/FooterMinimal";
import { ProductCard } from "@/components/product/product-card";
import { Filters } from "@/components/shop/filters";
import { allCandies } from "@/lib/data";
import { FILTER_ALL } from "@/lib/constants";

const categories = Array.from(new Set(allCandies.map(candy => candy.category)));

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(FILTER_ALL);

  const filteredCandies = allCandies.filter(candy => {
    const matchesSearch = candy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candy.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === FILTER_ALL || candy.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Sweet Collection</h1>
        
        <Filters 
          categories={categories}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          onSearchChange={setSearchTerm}
          onCategoryChange={setSelectedCategory}
          onClearFilters={() => {
            setSearchTerm("");
            setSelectedCategory(FILTER_ALL);
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCandies.map((candy) => (
            <ProductCard key={candy.id} product={candy} />
          ))}
        </div>

        {filteredCandies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No candies found matching your criteria.</p>
          </div>
        )}
      </main>
      <FooterMinimal/>
    </div>
  );
}
