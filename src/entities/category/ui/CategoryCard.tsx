'use client'
import card2 from '@/shared/assets/img/card2.png'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const datap = ['ножницы', 'тетради', 'ручки', 'карандаши', 'карандаши']

interface ICategoryCard {
	name: string
	data?: string[]
}

const CategoryCard: React.FC<ICategoryCard> = ({ name, data }) => {
	const [active, setActive] = useState(false)
	return (
		<AnimatePresence>
			<motion.li
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.3, ease: 'easeInOut' }}
				className={
					active
						? 'min-w-[400px] list-none p-2 shadow-md transition-all mb-5 '
						: 'min-w-[400px] list-none p-2 transition-all mb-5'
				}
				onMouseEnter={() => {
					setActive(true)
				}}
				onMouseLeave={() => setActive(false)}
			>
				<div
					className={
						active
							? 'hidden'
							: 'flex h-[180px]  items-center justify-center border'
					}
				>
					<Image src={card2} alt={'category'} width={90} />
				</div>
				<h2 className='text-left text-2xl font-semibold text-black'>{name}</h2>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.5 }}
					transition={{ duration: 0.7, ease: 'easeInOut' }}
					className={
						active
							? 'flex flex-col items-start justify-between opacity-none'
							: 'hidden'
					}
				>
					{datap.map((d, key) => (
						<Link
							href={{
								pathname: '/cards',
								query: { category: d },
							}}
							key={key}
						>
							<p>{d}</p>
						</Link>
					))}
				</motion.div>
			</motion.li>
		</AnimatePresence>
	)
}

export default CategoryCard
