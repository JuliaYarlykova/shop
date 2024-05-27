'use client'
import { CardFavourite } from "@/entities/card-favourite";
import { UseFavourite } from "@/features/favourite";
import { Title } from "@/shared/ui/title";
import Nav from "@/widgets/nav";


export default function Favorite() {
    const {favorite} = UseFavourite()
    console.log(favorite)
    return (
        <main className="container min-h-screen w-screen">
        
        <div className="my-0  max-w-[1250px]  xl:mx-auto">
        <Title name="Личный кабинет"/>
        <div className="flex justify-between items-start mt-8">
        <Nav />
        <div className="w-[75%] rounded border-2 py-5 px-7">
        
        {favorite.map((d, key)=><CardFavourite {...d} key={key}/>)}
        </div>
        
        </div>
        
        </div>
        </main>
        
        
        
        
    );
  }