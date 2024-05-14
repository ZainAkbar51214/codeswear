import styles from "../src/app/page.module.css";
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h1>Products</h1>
          </div>
        </div>
      </div>
    </>
  );
}
