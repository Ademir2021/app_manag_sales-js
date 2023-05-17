import { NavBar } from "../../components/navbar/Navbar";

const register = './register'
const home = './'
const update = './user_update'
const login = './login'

export function HomePage() {
    return (
        <>
            <NavBar
            register={register}
            home={home}
            update={update}
            login={login}
            />
            <strong>Home</strong> < br />
        </>
    )
}