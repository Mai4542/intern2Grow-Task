import ProductInfo from "@/utils/productInfo";
import Link from "next/link";

const Product = async (props: any) => {
    const { id } =await props.params;
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data: ProductInfo = await res.json();

    return (
        <>
    <div className="flex items-center justify-start max-w-xl  p-6 gap-1 mt-3 ml-2  rounded-lg">
    <Link href="/" className="inline-block text-xl text-white font-bold py-2 px-4 hover:bg-gray-700  transition duration-300">
        Home
    </Link>
    
    <h1 className="text-xl font-bold text-white">
       / {data.title}
    </h1>
</div>
        <div className="   flex items-center justify-center  from-gray-900 to-black p-6">
            <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 max-w-lg w-full text-center ">
                
                <h1 className="text-3xl font-bold text-white mb-4">
                    {data.title}
                </h1>

                <img
                    src={data.thumbnail}
                    alt={data.title}
                    className="w-50  h-50 object-cover rounded-xl  mb-4 m-auto"
                />

                <p className="text-gray-300 mb-4 leading-relaxed">
                    {data.description}
                </p>

                <p className="text-2xl font-bold text-green-400 mb-6">
                    ${data.price}
                </p>

                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition duration-300">
                    Buy Now
                </button>
            </div>
        </div>
        </>
    );
};

export default Product;