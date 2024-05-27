'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav = () => {
	const pathname = usePathname()
	const arr = ['Личная информация', 'История заказов', 'Избранное', 'Доставка']
	return (
		<section className='flex flex-col justify-start gap-9 rounded w-fit h-fit py-4 px-9 border-2 '>
			<Link
				href={'/pc/personal'}
				className={
					pathname === '/pc/personal' ? 'text-green-700' : 'text-black'
				}
			>
				{arr[0]}
			</Link>
			<Link
				href={'/pc/order'}
				className={pathname === '/pc/order' ? 'text-green-700' : 'text-black'}
			>
				{arr[1]}
			</Link>
			<Link
				href={'/pc/delivery'}
				className={
					pathname === '/pc/delivery' ? 'text-green-700' : 'text-black'
				}
			>
				{arr[3]}
			</Link>
			<Link
				href={'/pc/favourite'}
				className={
					pathname === '/pc/favourite' ? 'text-green-700' : 'text-black'
				}
			>
				{arr[2]}
			</Link>
		</section>
	)
}
export default Nav
