'use client'

import { PreviewCard } from '@/shared/ui/preview-card'
import { useState } from 'react'

const OrderCard = ({ page }: { page: 'order' | 'delivery' }) => {
	const [active, setActive] = useState(false)
	const data = [
		'Способ оплаты: карта',
		'Способ доставки: курьер',
		'Адрес получения:г.Томск ул. Нахимова 15',
	]
	return (
		<>
			<li className='text-[18px] list-none flex justify-between p-5 bg-[#EFF9F3]'>
				<div className='flex flex-col'>
					<div className='flex gap-12'>
						<p className=''>{'Ролик для факса 210*12'}</p>
						<p>{'3'}шт</p>
						<p>Сумма: {'300'}</p>
					</div>
					<div className={page === 'delivery' ? 'block' : 'hidden'}>
						<h3 className='font-bold'>Информация о заказе:</h3>
						{data.map((d, key) => (
							<p key={key} className='text-sm'>
								{d}
							</p>
						))}
					</div>
				</div>
				<button
					onClick={() => setActive(!active)}
					className='flex items-center'
				>
					Развернуть
					<span
						className={
							active
								? 'rotate-180 material-symbols-outlined'
								: 'material-symbols-outlined'
						}
					>
						arrow_downward
					</span>
				</button>
			</li>
			{active && (
				<ul>
					<PreviewCard className='bg-[#EFF9F3] mt-3 py-1 px-3' />
					<PreviewCard className='bg-[#EFF9F3] mt-3 py-1 px-3' />
					<PreviewCard className='bg-[#EFF9F3] mt-3 py-1 px-3' />
				</ul>
			)}
		</>
	)
}

export default OrderCard
