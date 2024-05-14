import styles from "../src/app/index.module.css";
export default function Home() {
  return (
    <>
    <section className={styles.sec}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h1>Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aut voluptas obcaecati illum voluptate quia, assumenda accusamus velit, eaque nostrum, inventore debitis in ut. Sit quidem deleniti soluta repellendus unde?</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
