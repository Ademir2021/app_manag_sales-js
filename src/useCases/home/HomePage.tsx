import { NavBar } from "../../components/navbar/Navbar";

const home = '/'
const register = '/register'
const update = '/user_update'
const login = '/login'

export function HomePage() {
    return (
        <>
            <NavBar
                home={home}
                register={register}
                update={update}
                login={login}
                person={''}
                product={''}
                sale={''}
                listPerson={''}
                listProduct={''}
            />
            <strong>Home</strong> < br />
        </>
    )
}