const datap = ['ножницы', 'тетради', 'ручки', 'карандаши', 'карандаши']
import Link from 'next/link'
const Other = () => {
	return (
		<section>
			<div className='mt-[22px] flex h-auto w-[250px] flex-col rounded border p-[8px]'>
				<h2 className='mb-[15px] font-medium'>Другие категории раздела</h2>
				{datap.map((d, key) => (
					<Link
						href={{
							pathname: '/cards',
							query: { category: d },
						}}
					>
						{' '}
						<p key={key} className='mt-[10px]'>
							{d}
						</p>
					</Link>
				))}
			</div>
		</section>
	)
}

export default Other
