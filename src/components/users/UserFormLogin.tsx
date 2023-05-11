import { Button } from './UserButton';
import { Header } from './UserHeader';
import { UserLink } from './UserLink';

 import './styles.css';

type userFormLogin = {
    children: any;
    handleChange: any;
    handleSubmit: any;
    message: string;
    alert: string;
}

export function UserFormLogin({ children, handleChange, handleSubmit, message, alert }: userFormLogin) {
    return (
        <>
            <div className='container'>
                <img src='./img/secure.png'></img>
                < a style={{textDecoration:'none'}} href="/">Menu Principal</a>
                <fieldset className='main'>
                    <Header name="Login Usuário" />
                    <form className="f-form" onSubmit={handleSubmit}>
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
                        <Button>Logar_se</Button>
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