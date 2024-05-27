import { IBasketCard } from '@/entities/basket/ui/BasketCard'

import { create } from 'zustand'



interface IBasketStore {
    basket: IBasketCard[]
    addToBasket: (state:IBasketCard)=>void
    deleteBasketCard: (state:IBasketCard)=>void
    updateBasketCard: (title:string, count:number)=>void

}

const useBasketStore = create<IBasketStore>((set)=>({
    basket:[],
    addToBasket: (data)=>{
        useBasketStore.getState().basket.push(data)
    },
    deleteBasketCard: (data) =>{
        const index = useBasketStore.getState().basket.indexOf(data)
        useBasketStore.getState().basket.splice(index)
        const dataBasket = useBasketStore.getState().basket
        set({basket: dataBasket})
    },
    updateBasketCard:(title, count)=>{
        const data = useBasketStore.getState().basket
        if (count!==0){
            for (let i of data){
                
                if(i.title == title) i.count = count
            }
            
        }
        set({basket:data})
        
    }

    }))

export default useBasketStore
