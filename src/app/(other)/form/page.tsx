'use client'
import { useBasketStore } from '@/features/basket'
import { PreviewCard } from '@/shared/ui/preview-card'
import { Title } from '@/shared/ui/title'
import { FormPage } from '@/widgets/form'

export default function Form() {
	const { basket } = useBasketStore()
	return (
		<main className='container min-h-screen w-screen'>
			<div className=' my-0  max-w-[1250px]  xl:mx-auto flex justify-between'>
				<div className='w-[45%]'>
					<Title name='Оформление заказа' classNameProp='mb-[10px]' />
					<FormPage />
				</div>
				<section className='rounded border-2 py-[36px] px-[41px] w-[40%] h-fit flex flex-col gap-3'>
					{basket.map((d, key) => (
						<PreviewCard
							title={d.title}
							price={d.price}
							count={d.count}
							img={d.img}
							key={key}
						/>
					))}
					<p className='text-[24px] text-left self-right'>
						<span className='font-bold'>Сумма:</span> {300}руб
					</p>
				</section>
			</div>
		</main>
	)
}
