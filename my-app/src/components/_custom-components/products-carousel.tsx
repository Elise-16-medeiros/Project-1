import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import ProductCard from "./product-card";

type Product = {
  title: string;
  description: string;
  imageProduct: string;
  imageStars: string;
  price: string;
};

const chair: Product[] = [
  {
    imageProduct: "/cadeira/1.png",
    title: "chair",
    description: "Sakarias Armchair",
    imageStars: "/estrelas/2.png",
    price: "$392",
  },

  {
    imageProduct: "/cadeira/2.png",
    title: "chair",
    description: "Baltsar Chair",
    imageStars: "/estrelas/2.png",
    price: "$299",
  },
  {
    imageProduct: "/cadeira/3.png",
    title: "chair",
    description: "anjay chair",
    imageStars: "/estrelas/2.png",
    price: "$519",
  },
  {
    imageProduct: "/cadeira/4.png",
    title: "chair",
    description: "nyantuy chair",
    imageStars: "/estrelas/2.png",
    price: "$921",
  },
];


export default function ProductsCarousel() {
    return (
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent className="flex flex-row items-center justify-center">
          {chair.map((product, index) => (
            <ProductCard
              key={index}
              imageProduct={product.imageProduct}
              title={product.title}
              description={product.description}
              imageStars={product.imageStars}
              price={product.price}
              
            />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
}
