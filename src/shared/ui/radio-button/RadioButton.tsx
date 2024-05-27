'use client'

import { useState } from 'react'
interface IRadioButton {
	title1: string
	title2: string
	check?: React.Dispatch<React.SetStateAction<string>>
}

const RadioButton: React.FC<IRadioButton> = ({ title1, title2, check }) => {
	const [active, setActive] = useState(true)
	return (
		<div className='flex justify-between'>
			<label
				className={`${
					active ? 'bg-[#92B5A0]' : 'bg-[#D9D9D9]'
				} relative rounded text-center   w-[260px]  py-3 cursor-pointer `}
			>
				<input
					onChange={() => {
						setActive(!active)
						check && check('myself')
					}}
					type='radio'
					className='opacity-0 absolute'
					value='1'
					name='radio'
				/>
				<span className='text-[16px] w-fit'>{title1}</span>
			</label>
			<label
				className={`${
					active ? 'bg-[#D9D9D9]' : ' bg-[#92B5A0]'
				} relative rounded text-center   w-[260px]  py-3  cursor-pointer `}
			>
				<input
					onChange={() => {
						setActive(!active)
						check && check('delivery')
					}}
					type='radio'
					className='opacity-0 absolute'
					value='2'
					name='radio'
				/>
				<span className='text-[16px] w-fit'>{title2}</span>
			</label>
		</div>
	)
}

export default RadioButton
