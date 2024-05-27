import search from '@/shared/assets/svg/search.svg'
import Image from 'next/image'

const ModalSearch = ({
	setActive,
}: {
	setActive: React.Dispatch<React.SetStateAction<boolean>>
}) => {
	return (
		<div
			onClick={() => setActive(true)}
			className='bg-white border rounded-lg mr-auto cursor-pointer hover:shadow-md transition-all duration-200'
		>
			<div className='flex pt-[2px] pb-[2px] pl-[5px] pr-[5px] w-[300px] h-[44px]  align-middle'>
				<Image src={search} width={35} alt='search'></Image>
			</div>
		</div>
	)
}

export default ModalSearch
