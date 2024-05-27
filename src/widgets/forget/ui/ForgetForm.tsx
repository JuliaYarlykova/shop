import { Button } from '@/shared/ui/button'
import { InputForm } from '@/shared/ui/input-form'
import { Dialog } from '@/shared/ui/modal'
interface IForm {
	active: boolean
	setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const ForgetForm: React.FC<IForm> = ({ active, setActive }) => {
	return (
		<Dialog title='Восстановление пароля' open={active} onClose={setActive}>
			<InputForm title='Email' />
			<Button title='Отправить сообщение' className='mt-4' />
		</Dialog>
	)
}

export default ForgetForm
