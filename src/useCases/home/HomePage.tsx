import { NavBar } from "../../components/navbar/Navbar";
import AppModal from "../modal/AppModal";

const home = '/#'
const register = '/register#'
const update = '/user_update#'
const login = '/login#'
const sales = '/sale#'

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
                sale={sales}
                listPerson={''}
                listProduct={''}
            />
            <strong>Home</strong> < br />
           
        </>
    )
}