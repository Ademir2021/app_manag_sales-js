import { Button } from './UserButton';
import { Header } from './UserHeader';
import { UserLink } from './UserLink';

import './UserForm.css';

export function UserFormRegister({ children, handleChange, handleSubmit }: any) {

    return (
        <>
            <img src="img/secure.jpg" alt='Logo' />
            <main>
                <fieldset>
                    <Header name="Registrar Usuário" />
                    <form onSubmit={handleSubmit}>
                        <label>Nome completo</label>
                        <input
                            type="text"
                            name="name"
                            placeholder='Usuário'
                            value={children.name || ""}
                            onChange={handleChange}
                        />
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
                        <label>Repita senha</label>
                        <input
                            type="password"
                            name="psw_repeat"
                            placeholder='Repita senha'
                            value={children.psw_repeat || ""}
                            onChange={handleChange}
                        />
                        <Button>Registrar</Button>
                        <UserLink
                            title="Já tem login"
                            link={<a href='/login'>Logar-se</a>}
                        />
                    </form>
                </fieldset>
            </main>
        </>
    )
}