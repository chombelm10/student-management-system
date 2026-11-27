import { useState } from "react";

import StudentForm from "./components/StudentForm/StudentForm";
import StudentList from "./components/StudentList/StudentList";
import SearchBar from "./components/SearchBar/SearchBar";

import useLocalStorage from "./hooks/useLocalStorage";

import styles from "./App.module.css";

function App() {
  const [students, setStudents] = useLocalStorage(
    "students",
    []
  );

  const [searchTerm, setSearchTerm] =
    useState("");

  const [editingStudent, setEditingStudent] =
    useState(null);

  // Add Student
  const addStudent = (student) => {
    setStudents((prevStudents) => [
      ...prevStudents,
      student,
    ]);
  };

  // Delete Student
  const deleteStudent = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmed) return;

    setStudents((prevStudents) =>
      prevStudents.filter(
        (student) => student.id !== id
      )
    );
  };

  // Edit Student
  const editStudent = (student) => {
    setEditingStudent(student);
  };

  // Update Student
  const updateStudent = (updatedStudent) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === updatedStudent.id
          ? updatedStudent
          : student
      )
    );

    setEditingStudent(null);
  };

  // Search Students
  const filteredStudents =
    students.filter((student) => {
      const search =
        searchTerm.toLowerCase();

      return (
        student.firstName
          .toLowerCase()
          .includes(search) ||
        student.lastName
          .toLowerCase()
          .includes(search) ||
        student.email
          .toLowerCase()
          .includes(search) ||
        student.department
          .toLowerCase()
          .includes(search) ||
        student.phone.includes(search)
      );
    });

  // Statistics
  const totalStudents =
    students.length;

  const maleStudents =
    students.filter(
      (student) =>
        student.sex === "Male"
    ).length;

  const femaleStudents =
    students.filter(
      (student) =>
        student.sex === "Female"
    ).length;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          Student Management System
        </h1>
        <p>
          Manage student records
          efficiently
        </p>
      </header>

      {/* Statistics */}

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h3>
            {totalStudents}
          </h3>
          <p>Total Students</p>
        </div>

        <div className={styles.statCard}>
          <h3>{maleStudents}</h3>
          <p>Male Students</p>
        </div>

        <div className={styles.statCard}>
          <h3>
            {femaleStudents}
          </h3>
          <p>Female Students</p>
        </div>
      </div>

      {/* Form */}

      <StudentForm
        addStudent={addStudent}
        editingStudent={
          editingStudent
        }
        updateStudent={
          updateStudent
        }
      />

      {/* Search */}

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={
          setSearchTerm
        }
      />

      {/* Student List */}

      <StudentList
        students={
          filteredStudents
        }
        onEdit={editStudent}
        onDelete={deleteStudent}
      />
    </div>
  );
}

export default App;