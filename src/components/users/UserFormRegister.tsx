import { Button } from '../button/Button';
import { BackHome } from '../utils/backHome/BackHome';
import { Header } from './UserHeader';
import { UserLink } from './UserLink';

import './styles.css';

type PropsUserFormRegister = {
    children: string | number | readonly string[] | undefined | any;
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
    message:string;
    alert:string;
}

export function UserFormRegister({
    children,
    handleChange,
    handleSubmit,
    message,
    alert
     }: PropsUserFormRegister) {

    return (
        <div className='container' >
            <img style={{ width: "60px", height: "60px" }} src='./img/secure.png'></img>
            <BackHome />
            <fieldset className='main'>
                <Header name="Registrar Usuário" />
                <form className='f-form' onSubmit={handleSubmit}>
                    <label className='reg-name-label' >Nome completo</label>
                    <input className='reg-name-input'
                        type="text"
                        name="name"
                        placeholder='Usuário'
                        value={children.name || ""}
                        onChange={handleChange}
                    />
                    <label className='reg-email-label'>Email</label>
                    < input className='reg-email-input'
                        type="email"
                        name="username"
                        placeholder='Email'
                        value={children.username || ""}
                        onChange={handleChange}
                    />
                    <label className='reg-pass-label' >Senha</label>
                    <input className='reg-pass-input'
                        type="password"
                        name="password"
                        placeholder='Senha'
                        value={children.password || ""}
                        onChange={handleChange}
                    />
                    <label className='reg-pass-repeat-label'>Repita senha</label>
                    <input className='reg-pass-repeat-input'
                        type="password"
                        name="psw_repeat"
                        placeholder='Repita senha'
                        value={children.psw_repeat || ""}
                        onChange={handleChange}
                    />
                    <Button onSubmit='submit' children='Registre_se'/>
                    <UserLink
                        title="Já tem login"
                        link={<a href='/login'>Logar-se</a>}
                        company={""}
                        message={message}
                        alert={alert}
                    />
                </form>
            </fieldset>
        </div>
    )
}