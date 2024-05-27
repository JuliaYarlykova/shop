import { IFavouriteCard } from '@/entities/card-favourite/ui/CardFavourite'

import { create } from 'zustand'


interface IFavourite {
    favorite:IFavouriteCard[]
    deleteCard:(card:IFavouriteCard)=>void
    addCard:(card:IFavouriteCard)=>void
}

const UseFavourite = create<IFavourite>((set)=>({
    favorite:[],
    deleteCard:(card)=>{
        const index = UseFavourite.getState().favorite.indexOf(card)
        UseFavourite.getState().favorite.splice(index)
        const dataBasket = UseFavourite.getState().favorite
        set({favorite: dataBasket})
    },
    addCard:(card)=>{
        
        const data = UseFavourite.getState().favorite
        data.push(card)
        set({favorite:data})
    }

}))

export default UseFavourite