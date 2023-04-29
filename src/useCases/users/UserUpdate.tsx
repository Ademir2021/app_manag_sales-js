import { useState, useEffect } from 'react';
import { UserFormUptdate } from "../../components/users/UserFormUpdate";
import { UpIUsers } from './IUser'
import api from '../../services/api/api'

export function UserUpdate() {

    const [user, setUser] = useState<UpIUsers>({
        id: 0,
        name: "",
        username: ""
    })

    const [counter, updateCounter] = useState(0)

    function handleDecrement (e:any) {
        e.preventDefault();
        updateCounter(counter - 1)
      
    }

    function handleIncrement (e:any) {
        e.preventDefault();
        updateCounter(counter + 1)
        
    }
   
     

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser(values => ({ ...values, [name]: value }))
    }

    async function handleUser() {
        await api.post<any>('/users', user)
            .then(response => {
                alert(response.data)
            }).catch(error => console.log(error))
    }

    async function setUsers() {
        await api.get<UpIUsers[]>(`/users`)
            .then(response => {
                 const res:any = response.data
                 user.name = res[counter].name
                 user.username = res[counter].username
                 console.log(res) 
            })

        }

        useEffect(() => {
            setUsers()
        }, []);

   

    async function handleSubmit(e: any) { /**Register*/
        e.preventDefault();
        if(user.id !=0 ){
        handleUser()
        }else{
            alert("digite um usuario")
        }
    }

    async function handleUpdate(e: any) {
        e.preventDefault();
        alert("update")
    }

    async function handleDelete(e: any) {
        e.preventDefault();
        alert("delete")
    }

    return (
        <>
            <UserFormUptdate
                handleSubmit={handleSubmit}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                handleChange={handleChange}
            >
                {user}
            </UserFormUptdate>
        </>
    )
}