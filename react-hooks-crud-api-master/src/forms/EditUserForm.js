import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { usuário, value } = event.target

    setUser({ ...user, [usuário]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Usuário</label>
			<input type="text" name="usuário" value={user.usuário} onChange={handleInputChange} />
			<label>Titulo</label>
			<input type="boolean" name="titulo" value={user.titulo} onChange={handleInputChange} />
			<label>Data</label>
			<input type="boolean" name="data" value={user.data} onChange={handleInputChange} />
			<label>Valor</label>
			<input type="text" name="data" value={user.valor} onChange={handleInputChange} />
			<label>Pago</label>
			<input type="text" name="data" value={user.pago} onChange={handleInputChange} />
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm
