import React from "react";
import ProductCard from "../cards/product";
import bigComputer from "../../public/images/bg-computer.png";
import bigIpad from "../../public/images/bg-ipad.png";
import phones from "../../public/images/ipad&phone.png";

export default function Products() {
  return (
    <div className=" max-w-6xl mx-auto px-5">
      <ProductCard
        background={"bg-green-300"}
        title={"Corrily: Optimize prices  to maximize revenue"}
        image={bigComputer}
        description={
          "Corrily tailors your prices and discounts to the needs of different user segments in order to increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily and incorporating a fresh, and stunning website redesign."
        }
      />
      <ProductCard
      background={"bg-indigo"}
        title={"Fiona: Engage &  Decide"}
        image={bigIpad}
        description={
          "Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations."
        }
      />
      <ProductCard
      background={"bg-primary-yellow"}
        title={"Ukulele: The largest ukulele tabs archive"}
        image={phones}
        description={
          "Ukulele is the number one ukulele community, where players of any level can find the most complete tabs and chords. Cinnamon offered a complete platform redesign including expansions and new features, focusing on keeping the user longer on the website."
        }
      />
    </div>
  );
}
