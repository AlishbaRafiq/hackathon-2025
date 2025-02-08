import Image from "next/image";

export default function ProductCard({ product }: { product: { id: number, name: string, price: number, image: string } }) {
  return (
    <div className="border p-4 rounded-lg text-center shadow-sm hover:shadow-lg transition">
      <Image src={product.image} alt={product.name} width={200} height={200} className="mx-auto" />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">Rs. {product.price.toLocaleString()}</p>
    </div>
  );
}
