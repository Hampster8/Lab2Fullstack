
import React from 'react'

// deconstructed props
function Registration({registration:{id, name, email, phone} }) {

  return (
        <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td><button>Edit</button></td>
        </tr>
  )
}
export default Customer