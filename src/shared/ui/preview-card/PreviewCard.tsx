import Image from 'next/image'

interface IPreview {
	title?: string
	className?: string
	price?: number
	count?: number
	img?: string
}
const PreviewCard: React.FC<IPreview> = ({
	className,
	title = 'Ролик для факса 210*12',
	price = 100,
	count = 1,
	img = 'https://img.freepik.com/free-vector/3d-paper-roll-mockup_1017-9213.jpg?t=st=1716792137~exp=1716795737~hmac=3c89f94387da6f401f534284346e79c5cc51c8362f6427f8c01056178ce8518a&w=740',
}) => {
	return (
		<li
			className={`text-[18px] font-bold flex  items-center list-none ${className}`}
		>
			<Image src={img} alt={'preview'} width={80} height={80} />
			<h3 className=' font-semibold text-sm ml-1 max-w-[200px] mr-auto'>
				{title}
			</h3>
			<div className=' flex gap-1 items-center '>
				<p className='mr-5'>{count} шт</p>
				<p className=''>{price * count} руб</p>
			</div>
		</li>
	)
}

export default PreviewCard
