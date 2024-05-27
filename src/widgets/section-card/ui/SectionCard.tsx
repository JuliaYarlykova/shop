import { CardProduct } from '@/entities/product'
import { ICard } from '@/entities/product/ui/ProductCard'
import Link from 'next/link'
interface ISection {
	card: ICard[]
	title: string
}

const SectionCard: React.FC<ISection> = ({ card, title }) => {
	return (
		<section className='mt-[70px] flex flex-col items-center'>
			<h3 className='mb-[23px] text-[45px] font-normal'>{title}</h3>
			<ul className='flex flex-wrap gap-4 '>
				{card.slice(0, 5).map((c, key) => (
					<CardProduct {...c} key={key} />
				))}
			</ul>
			<div className='mt-[10px] self-end'>
				<Link
					href={{
						pathname: '/cards',
						query: { category: title },
					}}
					className='flex flex-row items-center gap-[10px] text-[20px] font-medium text-[#ACADB9]'
				>
					Показать больше{' '}
					<span className='material-symbols-outlined text-[22px]'>
						arrow_forward
					</span>
				</Link>
			</div>
		</section>
	)
}

export default SectionCard
