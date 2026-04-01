import ProductInfo from "@/utils/productInfo";
import Link from "next/link";

const Card = ({ product }: { product: ProductInfo }) => {
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-gray-200 cursor-pointer">
      
      
      <div className="relative overflow-hidden h-48 bg-gray-50">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-50 h-50 m-auto  object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.stock > 0 ? (
          <span className="absolute top-3 right-3 bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
            In Stock
          </span>
        ) : (
          <span className="absolute top-3 right-3 bg-red-50 text-red-600 text-xs font-medium px-3 py-1 rounded-full">
            Out of Stock
          </span>
        )}
      </div>


      <div className="p-5">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
          {product.category}
        </p>
        <h2 className="text-base font-medium text-gray-900 mb-2 line-clamp-1">
          {product.title}
        </h2>
        <Link href={`/products/${product.id}`} className="block">
                <p className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
          Read more
        </p>

        </Link>
       
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xl font-medium text-gray-900">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <button className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;