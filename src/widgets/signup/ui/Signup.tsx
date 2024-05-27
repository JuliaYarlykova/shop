'use client'

import { Button } from '@/shared/ui/button'
import { InputForm } from '@/shared/ui/input-form'
import { Dialog } from '@/shared/ui/modal'

import Link from 'next/link'

interface IForm {
	active: boolean
	setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const SignUpForm: React.FC<IForm> = ({ active, setActive }) => {
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
				<Link href={'/'} className='text-[#2285FB]'>
					Войти
				</Link>
			</p>
			<Button title='Зарегистрироваться' />
		</Dialog>
	)
}

export default SignUpForm
