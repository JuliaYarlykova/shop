'use client'

import { ModalSearch } from '@/entities/modal'
import basket from '@/shared/assets/svg/basket.svg'
import logo from '@/shared/assets/svg/logo.svg'
import user from '@/shared/assets/svg/user.svg'
import { Search } from '@/widgets/search'
import { SignInForm } from '@/widgets/signin'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
	const [active, setActive] = useState(false)
	const [activeM, setActiveM] = useState(false)
	return (
		<header className='container w-full bg-white'>
			<div className='my-0 h-32 max-w-[1250px]  xl:mx-auto'>
				<div className='my-[13px] flex items-center  gap-4'>
					<div className='pt-10px pb-10px flex flex-row items-center justify-center gap-[60px] mr-[300px]'>
						<Link href={'/'}>
							<Image width={80} src={logo} alt='logo' />
						</Link>
						<Link href='/catalog' className='hover:text-[#0E3A20]'>
							Каталог
						</Link>
					</div>

					<ModalSearch setActive={setActive} />
					<div className='flex items-center gap-[45px]'>
						<Link href={'/basket'} className=''>
							<Image
								src={basket}
								width={35}
								alt='basket'
								className='hover:stroke-[#0E3A20]'
							/>
						</Link>
						<Link href='/pc/personal' className=''>
							<Image
								src={user}
								width={25}
								alt='user'
								className='hover:fill-[#0E3A20]'
							/>
						</Link>
						{/* <span
							onClick={() => setActiveM(true)}
							className='material-symbols-outlined cursor-pointer'
						>
							login
						</span> */}
					</div>
				</div>
				<div className='bottom-0 h-[1px] w-full bg-gray-300'></div>
			</div>
			<Search active={active} setActive={setActive} />
			<SignInForm active={activeM} setActive={setActiveM} />
			{/* <SignUpForm active={activeM} setActive={setActiveM} /> */}
		</header>
	)
}

export default Header
