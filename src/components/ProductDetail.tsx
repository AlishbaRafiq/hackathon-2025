import Image from "next/image";

export default function ProductDetail({ product, quantity, setQuantity, addToCart }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left - Images */}
      <div>
        <Image src={product.img} alt={product.name} width={500} height={500} className="rounded-lg w-full" />
        <div className="flex gap-2 mt-4">
          {[product.img, product.img, product.img].map((img, index) => (
            <Image key={index} src={img} alt="Preview" width={100} height={100} className="rounded-lg cursor-pointer" />
          ))}
        </div>
      </div>

      {/* Right - Product Info */}
      <div>
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="text-2xl text-gray-700 mt-2">Rs. {product.price.toLocaleString()}</p>
        <div className="mt-2 flex items-center">
          ⭐⭐⭐⭐⭐ <span className="text-gray-500 ml-2">(5 Customer Reviews)</span>
        </div>

        <p className="mt-4 text-gray-600">{product.description}</p>

        {/* Quantity & Add to Cart */}
        <div className="mt-6 flex items-center">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="border px-3 py-1">-</button>
          <span className="mx-3">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)} className="border px-3 py-1">+</button>
        </div>

        <button
          className="mt-6 bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800"
          onClick={() => addToCart(product, quantity)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
