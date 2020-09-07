import React from 'react';

import { Link } from 'react-router-dom';

const Table = ({ data, handleDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Correo Electronico</th>
          <th>Telefono</th>
          <th>Direccion</th>
          <th>Colegio</th>
          <th>Grado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map(item => {
            const { _id, names, lastname, email, phone, address, school, grade } = item;
            return (
              <tr key={_id}>
                <td>{_id}</td>
                <td>{names}</td>
                <td>{lastname}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{address}</td>
                <td>{school}</td>
                <td>{grade}</td>
                <td>
                  <button onClick={() => handleDelete(_id)}>Eliminar</button>
                  <Link to={`/student/${_id}`}>
                    <button>
                      Editar
                    </button>
                  </Link>
                </td>
              </tr>
            )
          })
        ) : (
            <tr>
              <td colSpan={4}>Sin Datos</td>
            </tr>
          )
        }
      </tbody>
    </table>
  );
};

export default Table;