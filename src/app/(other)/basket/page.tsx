'use client'
import { BasketCard } from "@/entities/basket";
import { useBasketStore } from "@/features/basket";
import { Promocode } from "@/widgets/promocode";

export default function Basket() {
  const {basket} = useBasketStore()

  return (
    <main className="container min-h-screen w-screen">
      <div className=" my-0  max-w-[1250px]  xl:mx-auto flex justify-between">
        <div className=" max-w-[60%]">
          {basket.map((d, key)=><BasketCard {...d} key={key}/>)}
        
        </div>
        

        <Promocode />
      </div>
    </main>
  );
}


