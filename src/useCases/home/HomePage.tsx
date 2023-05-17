import { NavBar } from "../../components/navbar/Navbar";

const register = './register'
const home = './'
const user_update = './user_update'
const login = './login'

export function HomePage() {
    return (
        <>
            <NavBar
            register={register}
            home={home}
            user_update={user_update}
            login={login}
            />
            <strong>Home</strong> < br />
        </>
    )
}