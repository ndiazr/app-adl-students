import React, { useState, useEffect } from 'react';

import { useParams, useHistory } from 'react-router-dom';

import StudentForm from '../../components/StudentForm';

import StudentService from '../../services/StudentService';

export default function EditStudent() {
  const initialData = {
    names: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    school: '',
    grade: ''
  };

  const { id } = useParams();
  const history = useHistory();

  const [student, setStudent] = useState(initialData);

  useEffect(() => {
    findStudent();
  }, []);

  const findStudent = () => {
    StudentService.get(id)
      .then(response => {
        setStudent(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateStudent = (studentToEdit) => {
    StudentService.update(studentToEdit._id, studentToEdit)
      .then(response => {
        alert('Estudiante actualizado correctamente');
        history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <StudentForm editiing currentStudent={student} handleEdit={updateStudent}/>
  );
}