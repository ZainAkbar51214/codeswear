import styles from "../src/app/page.module.css";
// import Blogs from "./blogs";
export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1 className="mx-4 bg">Hunting Project</h1>
          <p>A coding for hunting by a hunting project</p>
        </div>

        <div className={styles.blogs}>
            {/* <Blogs /> */}
        </div>

      </main>
    </>
  );
}
