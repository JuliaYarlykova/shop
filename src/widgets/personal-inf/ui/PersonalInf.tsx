'use client'
import { Button } from '@/shared/ui/button'
import { InputForm } from '@/shared/ui/input-form'
import { useState } from 'react'

const PersonalInf = () => {
	const [active, setActive] = useState(false)
	return (
		<div className='flex flex-col justify-start gap-2 '>
			<InputForm disabled={!active} title='Фамилия' />
			<InputForm disabled={!active} title='Имя' />
			<InputForm disabled={!active} title='Отчество' />
			<InputForm disabled={!active} title='Телефон' />
			<InputForm disabled={!active} title='E-mail' />
			{!active && (
				<div onClick={() => setActive(true)}>
					<Button title='Изменить данные' className='self-start' />
				</div>
			)}
			{active && (
				<div className='flex gap-2'>
					<div onClick={() => setActive(false)}>
						<Button title='Применить' />
					</div>
					<div onClick={() => setActive(false)}>
						<Button title='Отмена' />
					</div>
				</div>
			)}
		</div>
	)
}

export default PersonalInf
