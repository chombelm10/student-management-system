import StudentCard from "../StudentCard/StudentCard";
import styles from "./StudentList.module.css";

function StudentList({
  students,
  onEdit,
  onDelete,
}) {
  if (students.length === 0) {
    return (
      <div className={styles.emptyState}>
        <h2>No Students Found</h2>
        <p>
          Add a student using the form
          above.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default StudentList;