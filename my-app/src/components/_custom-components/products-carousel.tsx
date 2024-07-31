import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
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
    imageProduct: "/_chair/1.png",
    title: "chair",
    description: "Sakarias Armchair",
    imageStars: "/_star/5.png",
    price: "$392",
  },

  {
    imageProduct: "/_chair/2.png",
    title: "chair",
    description: "Baltsar Chair",
    imageStars: "/_star/5.png",
    price: "$299",
  },
  {
    imageProduct: "/_chair/3.png",
    title: "chair",
    description: "anjay chair",
    imageStars: "/_star/5.png",
    price: "$519",
  },
  {
    imageProduct: "/_chair/4.png",
    title: "chair",
    description: "nyantuy chair",
    imageStars: "/_star/5.png",
    price: "$921",
  },
];

export default function ProductsCarousel() {
  return (
    <Carousel className="w-full max-w-xs mt-4">
      <CarouselContent>
        {chair.map((product, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <ProductCard
                imageProduct={product.imageProduct}
                title={product.title}
                description={product.description}
                imageStars={product.imageStars}
                price={product.price}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

const bed: Product[] = [
  {
    imageProduct: "/_bed/1.png",
    title: "bed",
    description: "Sakarias Armchair",
    imageStars: "/_star/5.png",
    price: "$392",
  },

  {
    imageProduct: "/_bed/2.png",
    title: "bed",
    description: "Baltsar Chair",
    imageStars: "/_star/5.png",
    price: "$299",
  },
  {
    imageProduct: "/_bed/3.png",
    title: "bed",
    description: "anjay chair",
    imageStars: "/_star/5.png",
    price: "$519",
  },
  {
    imageProduct: "/_bed/4.png",
    title: "bed",
    description: "nyantuy chair",
    imageStars: "/_star/5.png",
    price: "$921",
  },
];


export function BedsCarousel() { 
  return (
    <Carousel className="mt-4 w-full max-w-xs">
      <CarouselContent>
        {bed.map((product, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <ProductCard
                imageProduct={product.imageProduct}
                title={product.title}
                description={product.description}
                imageStars={product.imageStars}
                price={product.price}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}


const sofa: Product[] = [
  {
    imageProduct: "/_sofa/1.png",
    title: "sofa",
    description: "Sakarias Armchair",
    imageStars: "/_star/5.png",
    price: "$392",
  },

  {
    imageProduct: "/_sofa/2.png",
    title: "sofa",
    description: "Baltsar Chair",
    imageStars: "/_star/5.png",
    price: "$299",
  },
  {
    imageProduct: "/_sofa/3.png",
    title: "sofa",
    description: "anjay chair",
    imageStars: "/_star/5.png",
    price: "$519",
  },
  {
    imageProduct: "/_sofa/4.png",
    title: "sofa",
    description: "nyantuy chair",
    imageStars: "/_star/5.png",
    price: "$921",
  },
];


export function SofaCarousel() {
  return (
    <Carousel className="mt-4 w-full max-w-xs">
      <CarouselContent>
        {sofa.map((product, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <ProductCard
                imageProduct={product.imageProduct}
                title={product.title}
                description={product.description}
                imageStars={product.imageStars}
                price={product.price}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
