import Card from "./Card";
import Button from "./Button";
import styles from "./Css/ErrorModal.module.css";

function ErrorModel(params) {
  return (
    <div>
      <div className={styles.backdrop} />

      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2> {params.title} </h2>
        </header>
        <div className={styles.content}>
          <p> {params.message} </p>
        </div>

        <footer className={styles.actions}>
          <Button value='Okay' onClick={params.onConfirm} />
        </footer>
      </Card>
    </div>
  );
}
export default ErrorModel;
