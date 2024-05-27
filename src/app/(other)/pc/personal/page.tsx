import { Title } from "@/shared/ui/title";
import Nav from "@/widgets/nav";
import { PersonalInf } from "@/widgets/personal-inf";


export default function Personal() {
    return (
        <main className="container min-h-screen w-screen">
        
        <div className="my-0  max-w-[1250px]  xl:mx-auto">
        <Title name="Личный кабинет"/>
        <div className="flex justify-between items-start mt-8">
        <Nav />
        <div className="w-[75%] rounded border-2 py-5 px-7">
        
        <PersonalInf />
        </div>
        
        </div>
        
        </div>
        </main>
        
      
    );
  }