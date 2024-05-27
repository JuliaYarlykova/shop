'use client'

import { Button } from '@/shared/ui/button'
import { InputForm } from '@/shared/ui/input-form'
import { Dialog } from '@/shared/ui/modal'
import Link from 'next/link'

interface IForm {
	active: boolean
	setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const SignInForm: React.FC<IForm> = ({ active, setActive }) => {
	// const router = useRouter()
	// const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
	// 	e: React.FormEvent<HTMLFormElement>
	// ) => {
	// 	e.preventDefault()
	// 	const formData = new FormData(e.currentTarget)

	// 	const res = await signIn('credentials', {
	// 		email: formData.get('email'),
	// 		password: formData.get('password'),
	// 		redirect: false,
	// 	})

	// 	if (res && !res.error) {
	// 		router.push('/')
	// 	} else {
	// 		console.log(res?.error)
	// 	}
	// }
	return (
		<Dialog title='Авторизация' open={active} onClose={setActive}>
			<form>
				<InputForm title='email' />
				<InputForm title='password' />

				<div className='mt-4 flex w-full items-center justify-between'>
					<Link href={'/'} className='text-btn'>
						Забыли пароль?
					</Link>
				</div>

				<p className='mt-4 text-center'>
					Нет аккаунта?{' '}
					<Link href={'/'} className='text-[#2285FB]'>
						Зарегистрироваться
					</Link>
				</p>
				<Button title='Войти' />
			</form>
		</Dialog>
	)
}

export default SignInForm
