'use client'

import { useBasketStore } from '@/features/basket'
import { UseFavourite } from '@/features/favourite'
import { Button } from '@/shared/ui/button'
import { ButtonCount } from '@/shared/ui/button-count'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export interface ICard {
	title: string
	price: number
	img: string
}

const CardProduct: React.FC<ICard> = ({ title, price, img }) => {
	const { addToBasket, deleteBasketCard, updateBasketCard } = useBasketStore()
	const [active, setActive] = useState(false)
	const [activeFav, setActiveFav] = useState(false)
	const [count, setCount] = useState(0)
	const { addCard, deleteCard, favorite } = UseFavourite()
	const [color, setColor] = useState('text-gray-400')

	useEffect(() => {
		updateBasketCard(title, count)
	}, [count])
	const addCardB = () => {
		addToBasket({ title: title, price: price, count: count, img: img })
		setActive(true)
		setCount(1)
	}

	const clickMinus = () => {
		if (count === 1) {
			setActive(false)
		} else {
			setCount(() => {
				let data = count
				return (data -= 1)
			})
		}
	}
	const clickPlus = () => {
		setCount(() => {
			let data = count
			return (data += 1)
		})
	}
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
		<li className='list-none'>
			<div className='px-[24px] py-[13px] flex flex-col gap-[19px] items-start rounded-[10px] max-w-[220px] pb-[40px] hover:shadow-lg hover:transition-all hover:duration-200 '>
				<div className='w-[170px] h-[180px] border relative'>
					<Image
						src={img}
						alt='card'
						width={170}
						height={180}
						className='w-full h-full'
					/>
					<span
						className={`material-symbols-outlined absolute right-2 top-2 ${color} cursor-pointer`}
						onClick={() => setActiveFav(!activeFav)}
					>
						favorite
					</span>
				</div>
				<Link
					href={{
						pathname: '/detail',
						query: { product: title, price: price, img: img },
					}}
					className='flex flex-col gap-[19px]'
				>
					<p className='text-[12px] font-normal h-[60px] overflow-hidden text-ellipsis max-w-[220px]'>
						{title}
					</p>
					<p className='text-[18px] font-semibold self-center'>
						{price} руб./шт
					</p>
				</Link>
				{active && (
					<ButtonCount
						count={count}
						clickMinus={clickMinus}
						clickPlus={clickPlus}
					/>
				)}
				{!active && (
					<Button
						title='В корзину'
						onClick={addCardB}
						className='z-100 hover:bg-[#18703C] transition-all duration-200'
					/>
				)}
			</div>
		</li>
	)
}

export default CardProduct
