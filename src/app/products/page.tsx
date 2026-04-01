import Card from "@/components/Card/Card";
import ProductInfo from "@/utils/productInfo";

const Products = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const products: ProductInfo[] = data.products.slice(0, 8);
 return (
    <main className="min-h-screen bg-black px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-medium text-white">Products</h1>
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Products;