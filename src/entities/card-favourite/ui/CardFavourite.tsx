'use client'

import Image from 'next/image'

import { UseFavourite } from '@/features/favourite'
import { Button } from '@/shared/ui/button'

export interface IFavouriteCard {
	title?: string
	price?: number
	img: string
}

const CardFavourite: React.FC<IFavouriteCard> = ({
	title = 'title',
	price = 100,
	img,
}) => {
	const { deleteCard } = UseFavourite()

	const deleteCardF = () => {
		deleteCard({ title: title, price: price, img: img })
	}
	return (
		<li
			className={`relative text-[18px] font-bold flex items-center list-none py-1 px-3 bg-[#EFF9F3] rounded mb-2`}
		>
			<div className='flex gap-2 items-center mr-2'>
				<Image src={img} alt={'preview'} width={80} height={80} />

				<h3 className=' font-semibold text-sm max-w-[390px]'>{title}</h3>
			</div>
			<div className='flex gap-3 items-center mr-[70px]'>
				<Button title='В корзину' />
				<p>{price}руб/шт</p>
			</div>
			<span
				className='material-symbols-outlined absolute top-1 right-1 text-gray-400 cursor-pointer'
				onClick={deleteCardF}
			>
				cancel
			</span>
		</li>
	)
}

export default CardFavourite
