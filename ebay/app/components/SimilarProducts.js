"use client"

import { BiLoader } from "react-icons/bi";
import Products from "./Products"

export default function SimilarProducts() {
    const products = [
        {
          id: 1,
          title: "Brown Leather Bag",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
          url: "https://picsum.photos/id/7/",
          price: 2500 // EG: 25.00
        },
        {
          id: 2,
          title: "School Books",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
          url: "https://picsum.photos/id/20/",
          price: 1999
        }
      ];
  return (
   <>
        <div>
            <div className="border-b py-1 max-w-[1200px] mx-auto" />

            <div className="max-w-[1200px] mx-auto">
                <div className="font-bold text-2xl py-2 mt-4">Similar sponsored items</div>

                {products.length > 0 ?
                  <div className="grid grid-cols-5 gap-4">
                    {products.map(product => (
                        <Products key={product.id} product={product} />
                    ))}
                  </div>
                : <div className="flex items-center justify-center">
                      <div className="flex items-center justify-center gap-4 font-semibold">
                          <BiLoader size={30} className="text-blue-400 animate-spin"/>
                          Loading Products...
                      </div>
                  </div>}
            </div>
        </div>

   </>
  )
}
