import React, { useState, useEffect } from 'react';

export default function StudentForm({ currentStudent, editiing, handleEdit, handleAdd }) {
  const initialData = {
    names: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    school: '',
    grade: ''
  };

  const [student, setStudent] = useState(initialData);

  useEffect(() => {
    if (currentStudent) {
      setStudent(currentStudent);
    }
  }, [currentStudent])

  const handleInputChange = event => {
    const { name, value } = event.target;
    setStudent({ ...student, [name]: value });
    console.log(student);
  };

  return (
    <div className="submit-form">

      <div>
        <div className="form-group">
          <label htmlFor="names">Nombres</label>
          <input
            type="text"
            className="form-control"
            id="names"
            required
            value={student.names}
            onChange={handleInputChange}
            name="names"
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Apellidos</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            required
            value={student.lastname}
            onChange={handleInputChange}
            name="lastname"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electronico</label>
          <input
            type="text"
            className="form-control"
            id="email"
            required
            value={student.email}
            onChange={handleInputChange}
            name="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Telefono</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            required
            value={student.phone}
            onChange={handleInputChange}
            name="phone"
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Direccion</label>
          <input
            type="text"
            className="form-control"
            id="address"
            required
            value={student.address}
            onChange={handleInputChange}
            name="address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="school">Colegio</label>
          <input
            type="text"
            className="form-control"
            id="school"
            required
            value={student.school}
            onChange={handleInputChange}
            name="school"
          />
        </div>

        <div className="form-group">
          <label htmlFor="grade">Grado</label>
          <input
            type="number"
            max="11"
            min="1"
            className="form-control"
            id="grade"
            required
            value={student.grade}
            onChange={handleInputChange}
            name="grade"
          />
        </div>
        {
          editiing ? (
            <button onClick={() => handleEdit(student)} className="btn btn-success">
              Editar
            </button>
          ) : (
              <button onClick={() => handleAdd(student)} className="btn btn-success">
                Agregar
              </button>
            )
        }
      </div>
    </div>
  );
}