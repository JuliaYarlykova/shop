'use client'

import Image from 'next/image'

import { useBasketStore } from '@/features/basket'
import { UseFavourite } from '@/features/favourite'
import { ButtonCount } from '@/shared/ui/button-count'
import { useEffect, useState } from 'react'

export interface IBasketCard {
	id?: string
	title: string
	img: string
	description?: {
		dt: string
		dl: string
	}[]
	price?: number
	count?: number
}

const BasketCard: React.FC<IBasketCard> = ({
	id,
	title,
	description,
	price,
	count = 0,
	img,
}) => {
	const { addToBasket, deleteBasketCard, updateBasketCard } = useBasketStore()
	const [countCard, setCount] = useState(count)
	const [activeFav, setActiveFav] = useState(false)
	const [color, setColor] = useState('text-gray-400')
	const { addCard, deleteCard, favorite } = UseFavourite()
	const data = [
		{
			dt: 'Базовая единица',
			dl: 'шт',
		},
		{
			dt: 'Производитель',
			dl: '"KOH-I-NOOR a.s" Чехия',
		},
		{
			dt: 'Твердость грифеля',
			dl: 'HB',
		},
		{
			dt: 'Диаметр внутренней втулки, мм',
			dl: '1',
		},
		{
			dt: 'Количество в наборе шт',
			dl: '1',
		},
	]
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

	useEffect(() => {
		updateBasketCard(title, countCard)
	}, [countCard])

	const clickMinus = () => {
		if (countCard === 1) {
			deleteBasketCard({ title: title, count: count, price: price, img: img })
		} else {
			setCount(() => {
				let data = countCard
				return (data -= 1)
			})
		}
	}
	const clickPlus = () => {
		setCount(() => {
			let data = countCard
			return (data += 1)
		})
	}
	const deleteCardB = () => {
		deleteBasketCard({ title: title, price: price, count: count, img: img })
	}
	return (
		<li className='flex border-2 rounded list-none py-[23px] px-[19px] items-center hover:shadow-md mb-[16px] relative'>
			<div className='relative border'>
				<Image src={img} alt='card' height={128} width={128} />
				<span
					className={`material-symbols-outlined absolute right-2 top-2 ${color} cursor-pointer`}
					onClick={() => setActiveFav(!activeFav)}
				>
					favorite
				</span>
			</div>
			<div className='ml-[20px]'>
				<h3 className='text-[16px] font-medium'>{title}</h3>
				{data.map((d, key) => (
					<div className=' text-[10px] font-normal' key={key}>
						<dt className=' float-left clear-left w-full max-w-[200px] overflow-hidden text-ellipsis  text-left  font-normal'>
							{d.dt}:
						</dt>
						<dd className='ml-[200px]'>{d.dl}</dd>
					</div>
				))}
			</div>
			<div className=' flex flex-col gap-2 items-center ml-12'>
				<p>{price}руб/шт</p>
				<ButtonCount
					count={count || 0}
					clickMinus={clickMinus}
					clickPlus={clickPlus}
				/>
				<p>ИТОГО: {price && count && price * count}руб</p>
			</div>
			<span
				className='material-symbols-outlined absolute top-2 right-2 text-gray-400 cursor-pointer'
				onClick={deleteCardB}
			>
				cancel
			</span>
		</li>
	)
}

export default BasketCard
