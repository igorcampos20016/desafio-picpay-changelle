import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, userusuário: '', usertitulo: '',  userdata: '', userpago: '',  }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { usuário, value } = event.target

		setUser({ ...user, [usuário]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.usuário || !user.titulo || !user.data || !user.valor || !user.pago) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Usuário</label>
			<input type="text" name="usuário" value={user.usuário} onChange={handleInputChange} />
			<label>Titulo</label>
			<input type="text" name="titulo" value={user.titulo} onChange={handleInputChange} />
			<label>Data</label>
			<input type="text" name="data" value={user.data} onChange={handleInputChange} />
			<label>Valor</label>
			<input type="text" name="valor" value={user.valor} onChange={handleInputChange} />
			<label>Pago</label>
			<input type="text" name="pago" value={user.pago} onChange={handleInputChange} />
			<button type="button" onclick="loadDoc()">Change Content</button>
		    <button>Add new user</button>
		</form>
	)
}

export default AddUserForm
