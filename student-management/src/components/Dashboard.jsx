import styles from "../styles/Dashboard.module.css";

function Dashboard({ students }) {
  return (
    <div className={styles.dashboard}>
      <div className={styles.card}>
        <h2>{students.length}</h2>
        <p>Total Students</p>
      </div>
    </div>
  );
}

export default Dashboard;