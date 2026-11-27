import { useState } from "react";
import styles from "./StudentForm.module.css";

const initialState = {
  firstName: "",
  lastName: "",
  age: "",
  email: "",
  sex: "",
  phone: "",
  department: "",
};

function StudentForm({ addStudent, editingStudent, updateStudent }) {
  const [student, setStudent] = useState(
    editingStudent || initialState
  );

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};

    if (!student.firstName.trim())
      tempErrors.firstName = "First name is required";

    if (!student.lastName.trim())
      tempErrors.lastName = "Last name is required";

    if (!student.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      tempErrors.email = "Invalid email";

    if (student.age < 15 || student.age > 100)
      tempErrors.age = "Age must be between 15 and 100";

    if (!student.phone.match(/^[0-9]{10}$/))
      tempErrors.phone = "Phone must be 10 digits";

    if (!student.sex)
      tempErrors.sex = "Select gender";

    if (!student.department)
      tempErrors.department =
        "Select department";

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = e => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!validate()) return;

    if (editingStudent) {
      updateStudent(student);
    } else {
      addStudent({
        ...student,
        id: Date.now(),
      });
    }

    setStudent(initialState);
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <h2>
        {editingStudent
          ? "Edit Student"
          : "Add Student"}
      </h2>

      <div>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={student.firstName}
          onChange={handleChange}
        />
        <span>{errors.firstName}</span>
      </div>

      <div>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={student.lastName}
          onChange={handleChange}
        />
        <span>{errors.lastName}</span>
      </div>

      <div>
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={student.age}
          onChange={handleChange}
        />
        <span>{errors.age}</span>
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
        />
        <span>{errors.email}</span>
      </div>

      <div>
        <select
          name="sex"
          value={student.sex}
          onChange={handleChange}
        >
          <option value="">
            Select Gender
          </option>
          <option value="Male">
            Male
          </option>
          <option value="Female">
            Female
          </option>
        </select>
        <span>{errors.sex}</span>
      </div>

      <div>
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={student.phone}
          onChange={handleChange}
        />
        <span>{errors.phone}</span>
      </div>

      <div>
        <select
          name="department"
          value={student.department}
          onChange={handleChange}
        >
          <option value="">
            Select Department
          </option>

          <option value="Computer Science">
            Computer Science
          </option>

          <option value="Software Engineering">
            Software Engineering
          </option>

          <option value="Information Systems">
            Information Systems
          </option>

          <option value="Electrical Engineering">
            Electrical Engineering
          </option>

          <option value="Business">
            Business
          </option>
        </select>

        <span>
          {errors.department}
        </span>
      </div>

      <button type="submit">
        {editingStudent
          ? "Update Student"
          : "Add Student"}
      </button>
    </form>
  );
}

export default StudentForm;