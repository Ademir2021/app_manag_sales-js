import { useState, useEffect } from "react"
import { ListUSers } from "../../components/users/UserList"
import { FormatDate } from "../../components/utils/formatDate";

import { IUsers } from './IUser'
import api from '../../services/api/api'

export function ListUsers() {

  const [users, setUsers] = useState<IUsers[]>([])

  async function getUSers() {
    await api.get<IUsers[]>('/users')
      .then(response => {
        setUsers(response.data)
      })
  }

  useEffect(() => {
    getUSers()
  }, []);

  return (
    <>
      <div style={{ padding: '12px' }}>Lista de Users</div>
      {users.length === 0 ? <p>Carregando...</p> : (
        users.map((user) => (
          <ListUSers
            key={user.id}
            id={user.id}
            created_at={FormatDate(user.created_at)}
            name={user.name}
            username={user.username}
          // password={user.password}
          link={<a href="http://localhost:3001/user_update">Update{user.id}</a>}
          />
        )))}
    </>
  )
}
