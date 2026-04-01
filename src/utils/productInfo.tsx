type ProductInfo = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;

  thumbnail: string;
  images: string[];

  brand: string;
  category: string;

  availabilityStatus: string;
};

export default ProductInfo;