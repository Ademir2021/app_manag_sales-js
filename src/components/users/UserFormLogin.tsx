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
            <div className='login'>
                <img src='./img/secure.png'></img>
                <h1>< a href="/">Menu Principal</a></h1>
                <fieldset className='fieldset'>
                    <Header name="Login Usuário" />
                    <form className="f-form" onSubmit={handleSubmit}>
                        <label style={{
                            position: 'absolute',
                            left: '0.1rem',
                            top: '0px'
                        }}>Email</label>
                        <input style={{
                            position: 'absolute',
                            left: '0.1rem',
                            top: '1.6rem'
                        }}
                            type="email"
                            name="username"
                            placeholder='Email'
                            value={children.username || ""}
                            onChange={handleChange}
                        />
                        <label style={{
                            position: 'absolute',
                            left: '0rem',
                            top: '6rem'
                        }}>Senha</label>
                        <input style={{
                            position: 'absolute',
                            left: '0.1rem',
                            top: '7.5rem'
                        }}
                            type="password"
                            name="password"
                            placeholder='Senha'
                            value={children.password || ""}
                            onChange={handleChange}
                        />
                        <Button>Login</Button>
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