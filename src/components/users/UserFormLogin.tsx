import { Button } from './UserButton';
import { Header } from './UserHeader';
import { UserLink } from './UserLink';

import './styles.css';

export function UserFormLogin({ children, handleChange, handleSubmit, message, alert }: any) {
    return (
        <>  <div className='main'>
            <main className='container'>
                <div>< a href="/">Home</a></div>
                {/* <img src="img/secure.jpg" alt='Logo' /> */}
                <fieldset className='fieldset'>
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
                        <label className='pass-label' >Senha</label>
                        <input className='pass-input'
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
            </main>
        </div>
        </>
    )
}