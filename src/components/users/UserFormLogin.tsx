import { Button } from './UserButton';
import { Header } from './UserHeader';
import { UserLink } from './UserLink';

import './UserForm.css';

export function UserFormLogin({ children, handleChange, handleSubmit }: any) {
    return (
        <>
            <img src="img/secure.jpg" alt='Logo' />
            <main>
                <fieldset>
                    <Header name="Login Usuário" />
                    <form onSubmit={handleSubmit}>
                        <label>Email</label>
                        <input
                            type="email"
                            name="username"
                            placeholder='Email'
                            value={children.username || ""}
                            onChange={handleChange}
                        />
                        <label>Senha</label>
                        <input
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
                        />
                    </form>
                </fieldset>
            </main>
        </>
    )
}