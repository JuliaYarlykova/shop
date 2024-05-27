import inst from '@/shared/assets/svg/insta.svg'
import vk from '@/shared/assets/svg/vk.svg'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='bg-green-50 w-full h-[160px] mt-[100px]'>
			<div className='py-[19px] px-[65px] flex flex-row justify-between items-center'>
				<Link
					href={'/catalog'}
					className='"text-stone-950 text-xl font-normal hover:text-[#0E3A20]'
				>
					КАТАЛОГ
				</Link>
				<p className='"text-stone-950 text-xl font-normal'>+7 9524657896</p>
				<p className='"text-stone-950 text-xl font-normal'>disain@store.com</p>
				<div className='flex flex-col justify-center gap-[32px]'>
					<h2 className='text-black text-2xl font-normal'>Связаться с нами</h2>
					<div className='flex flex-row justify-center gap-[44px]'>
						<div className='rounded-[100px] cursor-pointer bg-black p-[17px] w-fit'>
							<Image width={24} src={vk} alt='vk' />
						</div>
						<div className='rounded-[100px] cursor-pointer bg-black p-[17px] w-fit'>
							<Image width={24} src={inst} alt='inst' />
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
