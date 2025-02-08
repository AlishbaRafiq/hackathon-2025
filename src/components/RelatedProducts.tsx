import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export default function RelatedProducts({ currentProductId }) {
  const relatedProducts = products.filter((p) => p.id !== currentProductId).slice(0, 4);

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {relatedProducts.map((related) => (
          <Link key={related.id} href={`/shop/${related.id}`} className="border p-4 rounded-lg">
            <Image src={related.img} alt={related.name} width={200} height={200} className="w-full rounded-md" />
            <h3 className="mt-2 text-lg">{related.name}</h3>
            <p className="text-gray-600">Rs. {related.price.toLocaleString()}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
