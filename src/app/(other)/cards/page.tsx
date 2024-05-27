'use client'

import { CardProduct } from '@/entities/product'

import card from '@/shared/data/card.json'
import Button from '@/shared/ui/button/Button'
import { Title } from '@/shared/ui/title'
import { Other } from '@/widgets/other'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function Cards() {
	const search = useSearchParams()
	const [num, setNum] = useState(12)
	return (
		<main className='container min-h-screen w-screen'>
			<div className='my-0  max-w-[1250px]  xl:mx-auto'>
				<div className='my-0  max-w-[1250px]  xl:mx-auto '>
					<Title
						name={search.get('category') as string}
						classNameProp='self-start'
					/>
					<div className='flex items-start'>
						<div className=''>
							<Link
								href={'/catalog'}
								className='mt-[16px] flex items-center text-[20px]'
							>
								<span className='material-symbols-outlined'>arrow_back</span>
								Вернуться назад
							</Link>
							<Other />
						</div>

						<div className=' flex flex-col justify-center'>
							<ul className='mb-[77px] mt-[25px] flex flex-wrap justify-center gap-4'>
								{card.slice(0, num).map((c, key) => (
									<CardProduct {...c} key={key} />
								))}
							</ul>
							<div className='self-center' onClick={() => setNum(num + 12)}>
								<Button title='Показать еще' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
