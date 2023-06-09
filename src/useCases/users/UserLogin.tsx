import React, { useState, useContext } from 'react'
import { UserFormLogin } from '../../components/users/UserFormLogin'
import { AuthContext } from '../../context/auth'

export type TUserLogin = {
  username: string;
  password: string;
}

export function UserLogin() {

  const { login, message }: any  = useContext(AuthContext);
  
  const [alert, setAlert] = useState<string>('')
  const [user, setUsers] = useState<TUserLogin>(
    {
      username: "",
      password: ""
    })

  
  const handleChange = (e:any) => {
    const name = e.target.name;
    const value = e.target.value;
    setUsers(values => ({ ...values, [name]: value }))
  }

  function valFields(user: TUserLogin) {
    let msg = ""
    if (user.username === "") { msg += "Digite um email válido !" };
    if (user.password === "") { msg += "Digite uma senha válida !" };
    if (msg !== "") {
      setAlert(msg);
      return false;
    };
    return true;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (valFields(user)) {
      login(user.username, user.password)
    }
  }

  return (
    <>
      <UserFormLogin
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        message={String(message)}
        alert={alert}
      >
        {user}
      </UserFormLogin>
    </>
  )
}