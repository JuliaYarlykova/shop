import { Button } from '@/shared/ui/button'

interface IDetail {
	title: string
	price: string
}

const Description: React.FC<IDetail> = ({ title, price }) => {
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
	return (
		<section className=' items-left flex w-full max-w-[60%] flex-col justify-start rounded border-2 px-[22px] py-[11px]'>
			<h1 className='text-[20px] font-bold'>{title}</h1>
			<h2 className='text-[18px] font-bold text-red-600'>Скидка 10%</h2>

			<div className=' flex items-center  gap-[45px]'>
				<div className=' flex flex-col gap-[10px] '>
					<p className='text-[40px] font-medium'>{price}руб</p>
					<p
						className="relative pl-[10px] text-[12px] font-light
        before:absolute before:left-[2px] before:top-[6px] before:block before:size-1 before:rounded before:bg-[#29493E] before:content-['']"
					>
						Много
					</p>
					<Button title='В корзину' />
				</div>

				<div className=''>
					<h3 className='text-[20px] font-medium'>Характеристики</h3>
					<dl className='mt-[18px]'>
						{data.map((d, key) => (
							<div className='mb-[12px] text-[16px] font-normal' key={key}>
								<dt className=' float-left clear-left w-full max-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap text-left  font-normal'>
									{d.dt}
								</dt>
								<dd className='ml-[250px]'>{d.dl}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</section>
	)
}

export default Description
