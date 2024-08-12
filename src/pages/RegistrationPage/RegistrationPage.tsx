import { Link } from "react-router-dom";
import { Input, Button, Heading, RegistrationInfo  } from "../../components/Index";
import './RegistrationPage.scss'

export const RegistrationPage = () => {
    return (
        <div className="RegistrationPage">
            <Heading variant={'h1'} text={'Регистрация'}/>
            <form action="#">
                <Input type={'name'} placeholder={'Введите имя'}/>
                <Input type={'surname'} placeholder={'Введите фамилию'}/>
                <Input type={'tel'} placeholder={'Номер телефона'}/>
                <Input type={'email'} placeholder={'Введите почту'}/>
                <Input type={'password'} placeholder={'Придумайте пароль'}/>
                <Link to='/main'>
                <Button text={'Зарегестрироваться'}/>
                </Link>
                <RegistrationInfo 
                authWithText={'Войти с помощью'}/>
            </form>
            
            

        </div>
    );
};

export default RegistrationPage;