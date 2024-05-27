import { AnimatePresence, motion } from 'framer-motion'

const Search = ({
	active,
	setActive,
}: {
	active: boolean
	setActive: React.Dispatch<React.SetStateAction<boolean>>
}) => {
	const card = (
		<div
			className={`flex justify-between items-center w-full bg-gray-200 mt-2 py-2 px-3`}
		>
			<p>{'карандаш белый'}</p>
			<span className='material-symbols-outlined cursor-pointer'>close</span>
		</div>
	)
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.3, ease: 'easeInOut' }}
				onClick={() => setActive(false)}
				className={`${
					active ? 'flex ' : 'hidden '
				} opacity-1 w-screen h-screen  bg-black/80 z-10 fixed left-0 top-0 visible items-center justify-center `}
			>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.5 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
					onClick={e => e.stopPropagation()}
					className='rounded w-full  gap-4 text-black max-w-[500px] py-[17px] px-[50px]    bg-white'
				>
					<div className='relative'>
						<span className='material-symbols-outlined absolute top-0 left-1 text-[48px]'>
							search
						</span>
						<input
							type='text '
							placeholder='Поиск'
							className='outline-none w-full  h-[50px]  border-2  rounded p-[17px] pl-[50px]'
						/>
					</div>
					{card}
					{card}
				</motion.div>
			</motion.div>
		</AnimatePresence>
	)
}

export default Search
