'use client'

import { Button } from '@/shared/ui/button'
import { InputForm } from '@/shared/ui/input-form'
import { Dialog } from '@/shared/ui/modal'

export interface IForm {
	active: boolean
	setActive: React.Dispatch<React.SetStateAction<boolean>>
	setActiveOther: React.Dispatch<React.SetStateAction<boolean>>
}

const SignUpForm: React.FC<IForm> = ({ active, setActive, setActiveOther }) => {
	return (
		<Dialog title='Регистрация' open={active} onClose={setActive}>
			<InputForm title='Email' />
			<InputForm title='Пароль' />
			<InputForm title='Повторите пароль' />
			<p className='mt-2 w-full self-center text-center text-sm font-normal leading-5'>
				Нажимая на кнопку, вы даете согласие на обработку персональных данных и
				соглашаетесь с политикой конфиденциальности
			</p>
			<p className='mt-4 self-center text-base font-normal'>
				Зарегистрированы?{' '}
				<span
					onClick={() => {
						setActiveOther(true)
						setActive(false)
					}}
					className='cursor-pointer text-[#0E3A20]'
				>
					Войти
				</span>
			</p>
			<Button title='Зарегистрироваться' />
		</Dialog>
	)
}

export default SignUpForm
