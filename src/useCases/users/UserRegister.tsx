import { useState } from 'react';
import bcrypt from "bcryptjs-react";
import { UserFormRegister } from '../../components/users/UserFormRegister';

import { IUser } from './IUser'
import api from '../../services/api/api'

export function UserRegister() {

  const [user, setUsers] = useState<IUser>({
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

  const [msg, setMsg] = useState<String>("Preencha todos os campos")

  function valFields(user: IUser) {
    let msg = ''
    if (user.name == '') { msg += '- Digite o seu Nome Completo !! -\n' };
    if (user.username == '') { msg += '- Digite um Email válido !! -\n' };
    if (user.password == '') { msg += "- Digite sua Senha !! -\n" };
    if (user.psw_repeat != user.password) { msg += "- Senha digitada errado !! -\n" };
    if (msg != '') {
      setMsg(msg)
      alert(msg)
      return false;
    };
    return true;
  };

  async function handleUser() {
      await api.post<IUser>('/users', user)
        .then(response => {
          alert(response.data)
        }).catch(error => console.log(error))
  }

  function crypt() {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);
    return hash
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (valFields(user)) {
      user.password = crypt()
      handleUser()
    }
  }

  return (
    <>
      {/* <p style={{ color: "blue" }}>{msg}</p> */}

      <UserFormRegister
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      >
        {user}
      </UserFormRegister>
    </>
  );
};