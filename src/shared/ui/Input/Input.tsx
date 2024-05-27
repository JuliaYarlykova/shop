const Input = () => {
	return (
		<label className='w-full h-[60px] p-[20px] border rounded relative flex justify-end'>
			<input
				type='text'
				className='outline-none absolute w-fit top-0 h-full left-[20px] z-0'
			/>
			<span className='material-symbols-outlined z-10'>arrow_forward</span>
		</label>
	)
}
export default Input
