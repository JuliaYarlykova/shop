'use client'

import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/button'
import Link from 'next/link'

import { useBasketStore } from '@/features/basket'
import { useEffect, useState } from 'react'

const Promocode = () => {
	const [count, setCount] = useState(0)
	const [price, setPrice] = useState(0)

	const { basket } = useBasketStore()

	useEffect(() => {
		const Count = () => {
			let cnt = 0
			let prc = 0
			for (let i of basket) {
				if (i.count) cnt += i.count
				if (i.price && i.count) prc += i.count * i.price
			}
			setCount(cnt)
			setPrice(prc)
		}
		Count()
	}, [basket])

	return (
		<>
			{basket.length !== 0 && (
				<section className='flex flex-col items-start justify-between rounded border-2 py-5 px-4 min-w-[30%] max-h-64'>
					<h2 className='text-[20px] font-normal'>Введите промокод: </h2>
					<Input />
					<h2 className='text-[24px] font-bold'>Итого: </h2>
					<div className=' flex justify-between w-full'>
						<p className='text-[24px] font-normal'>{count} товара</p>
						<p className='text-[24px] font-medium'>{price}</p>
					</div>

					<Link href={'/form'}>
						<Button title='Оформить заказ' />
					</Link>
				</section>
			)}
			{basket.length === 0 && (
				<h1 className='text-center  text-[40px] flex justify-self-center'>
					В корзине пусто
				</h1>
			)}
		</>
	)
}

export default Promocode
