import React from 'react'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Usuário</th>
        <th>Titulo</th>
        <th>Data</th>
        <th>Valor</th>
        <th>Pago</th>
        <th>Actions</th>
        </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.usuário}</td>
            <td>{user.titulo}</td>
            <td>{user.data}</td>
            <td>{user.valor}</td>
            <td>{user.pago}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable
