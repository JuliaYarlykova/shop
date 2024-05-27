import { OrderCard } from "@/entities/OrderCard";
import { Title } from "@/shared/ui/title";
import Nav from "@/widgets/nav";


export default function Order() {
    return (
        <main className="container min-h-screen w-screen">
        
        <div className="my-0  max-w-[1250px]  xl:mx-auto">
        <Title name="Личный кабинет"/>
        <div className="flex justify-between items-start mt-8">
        <Nav />
        <div className="w-[75%] rounded border-2 py-5 px-7">
        
        <OrderCard page="order"/>
        
        </div>
        
        </div>
        
        </div>
        </main>
        
    );
  }