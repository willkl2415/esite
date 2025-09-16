"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

type Props = {
  id: string;
  name: string;
  image: string;
  price: number | string;
  href?: string; // default /products/[id]
};

const gbp = (n: number) => `£${n.toFixed(2)}`;

export default function ProductCard({ id, name, image, price, href }: Props) {
  const { addToCart } = useCart();
  const numericPrice = typeof price === "number" ? price : Number(price) || 0;
  const link = href ?? `/products/${id}`;

  const add = () => {
    addToCart({ id, name, price: numericPrice, image, quantity: 1 });
    alert("Added to cart");
  };

  return (
    <div className="product-card">
      <Link href={link}>
        <Image src={image} alt={name} width={220} height={220} className="mx-auto object-contain" />
      </Link>
      <h3>{name}</h3>
      <p>{typeof price === "number" ? gbp(price) : price}</p>
      <div className="flex gap-2">
        <button className="primary w-1/2" onClick={add}>Add to Cart</button>
        <Link className="secondary w-1/2 text-center" href={link}>View</Link>
      </div>
    </div>
  );
}
