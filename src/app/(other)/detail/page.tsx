'use client'

import { CardProduct } from '@/entities/product'
import card from '@/shared/data/card.json'
import { Title } from '@/shared/ui/title'
import { Description } from '@/widgets/desctiption'
import { Photo } from '@/widgets/photo'
import { useSearchParams } from 'next/navigation'

export default function Details() {
	const search = useSearchParams()
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<main className='container min-h-screen w-screen'>
				<div className='mx-[4px] my-0  flex w-full max-w-[1250px] justify-between gap-[44px]'>
					<Photo
						title={search.get('title') as string}
						img={search.get('img') as string}
						price={search.get('price') as any}
					/>
					<Description
						title={search.get('product') as string}
						price={search.get('price') as string}
					/>
				</div>
				<section className='mx-[4px] mb-[90px] mt-[27px]'>
					<Title
						name='Описание'
						classNameProp='text-left mt-[10px] mb-[10px]'
					/>
					<p className='pl-[40px] text-[20px] font-normal'>
						Электрическая варочная поверхность DEXP 4M2CTYL/B отличается от
						прочих подобных устройств компактными размерами и наличием 2
						конфорок для приготовления пищи. Это позволяет разместить ее даже на
						самой маленькой кухне. Устройство устанавливается автономно от
						духового шкафа.
					</p>
				</section>
				<section className='mx-[4px]'>
					<Title
						name='Похожие товары'
						classNameProp='text-left mt-[10px] mb-[35px]'
					/>
					<ul className='flex  gap-4 items-center justify-center'>
						{card.slice(0, 5).map((c, key) => (
							<CardProduct {...c} key={key} />
						))}
					</ul>
				</section>
			</main>
		</Suspense>
	)
}
