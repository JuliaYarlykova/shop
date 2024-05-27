'use client'

import { CategoryCard } from '@/entities/category';
import { Title } from '@/shared/ui/title';


const data = [
  'бумага и материалы',
  'офисные пренадлежности',
  'Упаковочные материалы',
  'Письменный принадлежности',
  'Папки, портфели',
  'Папки, портфели',
]

export default function Catalog() {
  return (
    <main className="container w-full bg-white min-h-screen">
      <div className="my-0  max-w-[1250px]  xl:mx-auto">
        <Title name="Каталог" classNameProp="self-start" />
        <ul className="mt-[26px] flex flex-wrap  justify-center ">
          {data.map((d, key) => (
            <CategoryCard name={d} key={key} />
          ))}
        </ul>
        </div>
      
    </main>
  );
}
