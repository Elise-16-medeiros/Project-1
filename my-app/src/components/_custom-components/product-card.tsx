import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Plus } from "lucide-react";


type ProductsCardsProps = {
  title: string;
  description: string;
  imageProduct: string;
  imageStars: string;
  price: string;
};

export default function ProductCard({
  title,
  description,
  imageProduct,
  imageStars,
  price,
}: ProductsCardsProps) {
  return (
    <div className="flex flex-col gap-y-4 h-[250px]">
      <div className="size-48 mb-12">
        <Image
          src={imageProduct}
          alt="product image"
          width={200}
          height={200}
        />
      </div>
      <Card className="h-[10rem]">
        <CardHeader className="flex flex-col">
          <CardTitle className="text-xs capitalize text-muted-foreground">
            {title}
          </CardTitle>
          <CardDescription className="text-base font-bold capitalize text-[#0D1B39]">
            {description}
          </CardDescription>
          <CardDescription>
            <Image src={imageStars} alt="stars" width={80} height={80} />
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <p className="font-bold text-[#0D1B39]">{price}</p>
          <span className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-[#0D1B39]">
            <Plus size={16} className="cursor-pointer text-white" />
          </span>
        </CardFooter>
      </Card>
    </div>
  );
}




