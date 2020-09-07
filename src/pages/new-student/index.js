import React, { useState } from 'react';

import { useHistory } from "react-router-dom";

import StudentForm from '../../components/StudentForm';

import StudentService from '../../services/StudentService';

export default function NewStudent() {
  const initialData = {
    names: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    school: '',
    grade: ''
  };

  const history = useHistory();

  const [student, setStudent] = useState(initialData);

  const saveStudent = (studentToSave) => {
    StudentService.create(studentToSave)
      .then(response => {
        alert('Estudiante creado correctamente');
        setStudent(initialData);
        history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <StudentForm handleAdd={saveStudent} />
  );
}