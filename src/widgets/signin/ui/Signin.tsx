'use client'

import { Button } from '@/shared/ui/button'
import { InputForm } from '@/shared/ui/input-form'
import { Dialog } from '@/shared/ui/modal'

interface IForm {
	active: boolean
	setActive: React.Dispatch<React.SetStateAction<boolean>>
	setActiveOther: React.Dispatch<React.SetStateAction<boolean>>
	setActiveForget: React.Dispatch<React.SetStateAction<boolean>>
}

const SignInForm: React.FC<IForm> = ({
	active,
	setActive,
	setActiveOther,
	setActiveForget,
}) => {
	return (
		<Dialog title='Авторизация' open={active} onClose={setActive}>
			<form className='flex flex-col gap-2'>
				<InputForm title='Email' />
				<InputForm title='Пароль' />

				<div className='mt-4 flex w-full items-center justify-between'>
					<span
						className='cursor-pointer text-[#0E3A20]'
						onClick={() => {
							setActiveForget(true)
							setActive(false)
						}}
					>
						Забыли пароль?
					</span>
				</div>
				<Button title='Войти' />
				<p className='mt-4 text-center'>
					Нет аккаунта?{' '}
					<span
						onClick={() => {
							setActiveOther(true)
							setActive(false)
						}}
						className='cursor-pointer text-[#0E3A20]'
					>
						Зарегистрироваться
					</span>
				</p>
			</form>
		</Dialog>
	)
}

export default SignInForm
