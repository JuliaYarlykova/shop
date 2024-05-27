const Variant = ({ value, active }: { value: string; active: boolean }) => {
	return (
		<div
			className={`w-full p-1 border-2 rounded mb-2 cursor-pointer ${
				active ? 'bg-[#92B5A0]' : 'bg-transparent'
			}`}
		>
			<p className=''>{value}</p>
		</div>
	)
}

export default Variant
