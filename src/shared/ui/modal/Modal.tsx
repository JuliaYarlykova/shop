'use client'

import {
	DialogPanel,
	DialogTitle,
	Dialog as HDialog,
	Transition,
	TransitionChild,
	type DialogProps as HDialogProps,
} from '@headlessui/react'

type DialogProps = HDialogProps & {
	title?: string
}

export const Dialog: React.FC<DialogProps> = ({
	title,
	open,
	onClose,
	...props
}) => {
	return (
		<Transition
			appear
			show={open}
			enter='ease-out duration-300'
			enterFrom='opacity-0'
			enterTo='opacity-100'
			leave='ease-in duration-300'
			leaveFrom='opacity-100'
			leaveTo='opacity-0'
		>
			<HDialog
				as='div'
				className='relative z-10 focus:outline-none'
				onClose={onClose}
				{...props}
			>
				<div className='fixed inset-0 z-10 grid size-full place-items-center overflow-y-auto bg-black/80  p-8'>
					<TransitionChild
						enter='ease-out duration-200'
						enterFrom='opacity-0 scale-95'
						enterTo='opacity-100 scale-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100 scale-100'
						leaveTo='opacity-0 scale-95'
					>
						<DialogPanel
							as='dialog'
							className='flex max-w-[596px] flex-col items-stretch rounded-[8px] bg-white px-8 py-10 md:w-1/2'
						>
							<DialogTitle as='h3' className='mb-6 text-[32px] font-bold'>
								{title}
							</DialogTitle>
							{props.children as React.ReactNode}
						</DialogPanel>
					</TransitionChild>
				</div>
			</HDialog>
		</Transition>
	)
}
