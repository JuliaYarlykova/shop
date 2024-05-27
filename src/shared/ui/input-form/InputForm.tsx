interface IInput {
	title: string
	disabled?: boolean
}

const InputForm: React.FC<IInput> = ({ title, disabled }) => {
	return (
		<div className=''>
			<h2>{title}</h2>
			<input
				disabled={disabled}
				type='text'
				className='outline-none w-full  h-[50px]  border-2 border-[#29493E] rounded p-[17px]'
			/>
		</div>
	)
}

export default InputForm
