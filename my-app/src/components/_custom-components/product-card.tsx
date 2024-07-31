import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";

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
    <div className="flex justify-center items-center">
      <Card className="w-[250px]">
        <CardHeader>
          <CardTitle className="flex items-center justify-center">
            <Image
              src={imageProduct}
              alt="product image"
              width={100}
              height={0}
              className="object-cover"
            />
          </CardTitle>
          <CardDescription className="text-xs capitalize">
            chair
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-base font-bold capitalize text-[#0D1B39]">
            {description}
          </p>
          <Image src={imageStars} alt="stars" width={80} height={80} />
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="font-bold text-[#0D1B39]">{price}</p>
          <Button variant={"custom"} size={"custom"} className="flex justify-center items-center">
            <Plus size={16} />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}




