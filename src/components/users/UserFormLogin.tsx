import { Button } from './button/Button';
import { BackHome } from '../utils/backHome/BackHome';
import { Header } from './UserHeader';
import { UserLink } from './UserLink';

import '../global-module.css';
import './index.css';

type PropsUserFormLogin = {
    children: string | number | readonly string[] | undefined | any;
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
    message: string;
    alert: string;
}

export function UserFormLogin({ 
    children, 
    handleChange,
    handleSubmit,
    message, 
    alert }: PropsUserFormLogin) {
    return (
        <>
            <div className='container-user_'>
                <img className='login-secure' src='./img/secure.png'></img>
                <BackHome/>
                <fieldset className='main_'>
                    <Header name="Login Usuário" />
                    <form className="form_" onSubmit={handleSubmit}>
                        <label className='email-label'>Email</label>
                        <input className='email-input'
                            type="email"
                            name="username"
                            placeholder='Email'
                            value={children.username || ""}
                            onChange={handleChange}
                        />
                        <label className='pass-label'>Senha</label>
                        <input className='pass-input'
                            type="password"
                            name="password"
                            placeholder='Senha'
                            value={children.password || ""}
                            onChange={handleChange}
                        />
                        <Button onSubmit='submit'
                        children='Logar_se'
                        />
                        <UserLink
                            title="Não tem login"
                            link={<a href='/register'>Registre-se</a>}
                            company={""}
                            message={message}
                            alert={alert}
                        />
                    </form>
                </fieldset>
            </div>
        </>
    )
}