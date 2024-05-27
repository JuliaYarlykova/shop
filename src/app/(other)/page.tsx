import card from '@/shared/data/card.json';
import { Carousel } from '@/widgets/coursel';
import { SectionCard } from '@/widgets/section-card';

export default function Home() {
  return (
    <main className="container min-h-screen w-screen">
       <div className="my-0  max-w-[1250px]  xl:mx-auto">
      <Carousel />
        <SectionCard card={card} title="Новинки" />
        <SectionCard card={card} title="Популярное" />
        </div>
    </main>
  );
}
