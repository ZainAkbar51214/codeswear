import styles from "../src/app/page.module.css";
export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1 className="mx-4">Hunting Project</h1>
          <p className="bg-slate-500 p-3">A coding for hunting by a hunting project</p>
        </div>
      </main>
    </>
  );
}
