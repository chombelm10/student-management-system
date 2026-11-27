import styles from "./StudentCard.module.css";

function StudentCard({
  student,
  onEdit,
  onDelete,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>
          {student.firstName}{" "}
          {student.lastName}
        </h3>

        <span className={styles.department}>
          {student.department}
        </span>
      </div>

      <div className={styles.content}>
        <p>
          <strong>Age:</strong>{" "}
          {student.age}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {student.email}
        </p>

        <p>
          <strong>Gender:</strong>{" "}
          {student.sex}
        </p>

        <p>
          <strong>Phone:</strong>{" "}
          {student.phone}
        </p>
      </div>

      <div className={styles.actions}>
        <button
          className={styles.editBtn}
          onClick={() => onEdit(student)}
        >
          Edit
        </button>

        <button
          className={styles.deleteBtn}
          onClick={() =>
            onDelete(student.id)
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default StudentCard;