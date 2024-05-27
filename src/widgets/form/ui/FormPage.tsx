import { Button } from '@/shared/ui/button'
import { InputForm } from '@/shared/ui/input-form'
import { RadioButton } from '@/shared/ui/radio-button'
import { Variant } from '@/shared/ui/variant'
import { useState } from 'react'

const FormPage = () => {
	const [check, setCheck] = useState('myself')
	const [active1, setActive1] = useState(false)
	const [active2, setActive2] = useState(false)
	const [active3, setActive3] = useState(false)
	return (
		<form action='' className='flex flex-col gap-2'>
			<h2 className='text-[20px] font-bold'>Контактные данные</h2>
			<InputForm title='ФИО' />
			<InputForm title='E-mail' />
			<InputForm title='Телефон' />
			<h2 className='text-[20px] font-bold'>Способ получения</h2>
			<RadioButton title1='Самовывоз' title2='Доставка' check={setCheck} />
			<div className={check === 'myself' ? 'block' : 'hidden'}>
				<div
					className=''
					onClick={() => !active2 && !active3 && setActive1(!active1)}
				>
					<Variant active={active1} value='ул. Иркутский тр.-т 10, г. Томск' />
				</div>
				<div
					className=''
					onClick={() => !active1 && !active3 && setActive2(!active2)}
				>
					<Variant active={active2} value='ул. Иркутский тр.-т 10, г. Томск' />
				</div>
				<div
					className=''
					onClick={() => !active2 && !active1 && setActive3(!active3)}
				>
					<Variant active={active3} value='ул. Иркутский тр.-т 10, г. Томск' />
				</div>
			</div>
			<div className={check === 'delivery' ? 'block' : 'hidden'}>
				<InputForm title='Адрес' />
				<div className='flex justify-between'>
					<InputForm title='Подъезд' />
					<InputForm title='Номер квартиры' />
				</div>
			</div>

			<h2 className='text-[20px] font-bold'>Способ оплаты</h2>
			<RadioButton
				title1='Оплата картой при получении'
				title2='Наличные курьеру'
			/>
			<Button title='Оформить заказ' className='mt-[40px]' />
		</form>
	)
}

export default FormPage
