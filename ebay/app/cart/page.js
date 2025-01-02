import CartItem from "../components/CartItem"
import Mainlayout from "../layout/Mainlayout"
import SimilarProducts from "../components/SimilarProducts"
export default function page() {
    const product =        [ {
          id: 1,
          title: "Brown Leather Bag",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
          url: "https://picsum.photos/id/7/",
          price: 2500 // EG: 25.00
        }]
  return (

    <Mainlayout>
    <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
      <div className="text-2xl font-bold my-4">Shopping cart</div>
      <div className="relative flex items-baseline justify-between gap-2"> 
          <div className="w-[65%]">
            {product.map(product => (
              <CartItem key={product.id} product={product}/>
            ))}
          </div>


          <div id="GoToCheckout" className="md:w-[33%] absolute top-0 right-0 m-2">
              
                      <div className="bg-white p-4 border">
                          
                          <button 
                          
                            className="flex items-center justify-center bg-blue-600 w-full text-white font-semibold p-3 rounded-full mt-4"
                          >
                              Go to checkout
                          </button>

                          <div className="flex items-center justify-between mt-4 text-sm mb-1">
                              <div>Items 1 </div>
                              <div>£ 12</div>
                          </div>
                          <div className="flex items-center justify-between mb-4 text-sm">
                              <div>Shipping:</div>
                              <div>Free</div>
                          </div>

                          <div className="border-b border-gray-300"/>

                          <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold">
                              <div>Subtotal</div>
                              <div>£12</div>
                          </div>
                      </div>
                 
              </div>




        </div>
        </div>

        

    <SimilarProducts />

</Mainlayout>

  )
}
