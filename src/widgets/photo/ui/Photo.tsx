'use client'

import { UseFavourite } from '@/features/favourite'
import card2 from '@/shared/assets/img/card2.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { IBasketCard } from '@/entities/basket/ui/BasketCard'
const Photo: React.FC<IBasketCard> = ({ title, price, img }) => {
	const arr = [card2, card2, card2, card2]
	const [activeFav, setActiveFav] = useState(false)
	const [color, setColor] = useState('text-gray-400')
	const { addCard, deleteCard, favorite } = UseFavourite()

	useEffect(() => {
		const addCardF = () => {
			setColor('text-red-400')
			addCard({ title: title, price: price, img: img })
		}
		const delCardF = () => {
			setColor('text-gray-400')
			deleteCard({ title: title, price: price, img: img })
		}
		if (activeFav) addCardF()
		else delCardF()
	}, [activeFav])
	return (
		<section className='pl-[40px]'>
			<div className=' flex gap-[10px]'>
				<div className='flex flex-col gap-[24px] '>
					{arr.map((d, key) => (
						<Image src={img} alt='card' key={key} width={70} height={70} />
					))}
				</div>
				<div className='relative'>
					<Image src={img} alt={'card'} width={400} height={400} />
					<span
						className={`material-symbols-outlined absolute right-2 top-2 ${color} cursor-pointer`}
						onClick={() => setActiveFav(!activeFav)}
					>
						favorite
					</span>
				</div>
			</div>
		</section>
	)
}

export default Photo
