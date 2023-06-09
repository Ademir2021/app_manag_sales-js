import { useState } from 'react';
import { crypt, UsersValFields } from '../../components/utils/crypt/Crypt'
import { UserFormRegister } from '../../components/users/UserFormRegister';

import api from '../../services/api/api'

type TUserRegister = {
  name: string;
  username: string;
  password: string;
  psw_repeat: string;
}

export function UserRegister() {
  const [user, setUsers] = useState<TUserRegister>({
    name: "",
    username: "",
    password: "",
    psw_repeat: ""
  })

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setUsers(values => ({ ...values, [name]: value }))
  }

  // const [msg, setAlert] = useState<String>("")
  const [message, setMessage] = useState<any>("")

  async function handleUser() {
    await api.post<TUserRegister>('/users', user)
      .then(response => {
        setMessage(response.data)
      }).catch(error => console.log(error))
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (UsersValFields(user)) {
      user.password = crypt(user.password)
      handleUser()
      setUsers({
        name: "",
        username: "",
        password: "",
        psw_repeat: ""})
      setMessage("")
    }
  }

  return (
    <>
      <UserFormRegister
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        message={message}
        alert={""}/**Aguardando Ajustes */
      >
        {user}
      </UserFormRegister>
    </>
  );
};