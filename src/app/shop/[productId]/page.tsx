"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import ProductTabs from "@/components/ProductTabs";
import RelatedProducts from "@/components/RelatedProducts";

import useCart from "@/hooks/useCart";
import { products } from "@/data/products";

export default function ProductPage() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <p className="text-center text-gray-500">Product not found.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* Breadcrumbs */}
      <nav className="text-gray-500 mb-4">
        <a href="/">Home</a> &gt; <a href="/shop">Shop</a> &gt; {product.name}
      </nav>

      {/* Product Details */}
      <ProductDetail product={product} quantity={quantity} setQuantity={setQuantity} addToCart={addToCart} />

      {/* Product Tabs */}
      <ProductTabs product={product} />

      {/* Related Products */}
      <RelatedProducts currentProductId={product.id} />
    </div>
  );
}
