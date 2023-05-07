import React, { useEffect, useState } from 'react'
import bcrypt from "bcryptjs-react"
import { UserFormLogin } from '../../components/users/UserFormLogin'

import { IUserLogin } from './IUser'
import api from '../../services/api/api'

export function UserLogin() {

  const [user, setUsers] = useState<IUserLogin>(
    {
      username: "",
      password: ""
    })

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setUsers(values => ({ ...values, [name]: value }))
  }

  function valFields(user: IUserLogin) {
    let msg = ''
    if (user.username == '') { msg += '- Digite um email válido !! -\n' };
    if (user.password == '') { msg += "- Digite sua Senha !! -\n" };
    if (msg != '') {
      alert(msg);
      return false;
    };
    return true;
  };

  function compare(pass: string) {
    if (bcrypt.compareSync(user.password, pass) == true) {
      console.log("conectado com sucesso")
      window.location.replace("/sale");
    } else {
      alert("Usuário ou senha Inválida !");
    }
  }

  async function getOneUser() {
    await api.get<IUserLogin[]>(`/login/${user.username}`)
      .then(response => {
        const data = response.data
        if (data[0] != undefined) {
          compare(data[0].password)
          localStorage.setItem('u', JSON.stringify(data))
        } else {
          alert("user não localizado")
        }
      })
  }

  useEffect(() => {
    getOneUser()
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (valFields(user)) {
      getOneUser()
    }
  }

  return (
    <>
      <UserFormLogin
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      >
        {user}
      </UserFormLogin>
    </>
  )
}