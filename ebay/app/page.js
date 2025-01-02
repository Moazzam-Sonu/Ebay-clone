"use client"
import Carosel from "./components/Carosel";
import Mainlayout from "./layout/Mainlayout";
import Products from "./components/Products";
export default function Home() {
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
  <Mainlayout>
    <Carosel />
    <div className="max-w-[1200px] mx-auto">
      <div  className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>
       <div className="grid grid-cols-5 gap-4">
        {products.map((p)=>{
         return (<Products key={p.id} product={p} />)
        })}
        </div> 
    </div>
  </Mainlayout>
  );
}
