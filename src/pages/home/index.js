import React, { useState, useEffect } from 'react';

import Table from '../../components/Table';

import StudentService from '../../services/StudentService';

export default function Home() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    StudentService.getAll()
      .then(response => {
        setStudents(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteStudent = id => {
    StudentService.remove(id)
      .then(response => {
        setStudents(students.filter(student => student._id !== id));
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <>
      <div className="seven columns">
        <h2>Estudiantes</h2>
      </div>
      <Table data={students} handleDelete={deleteStudent} />
    </>
  );
}