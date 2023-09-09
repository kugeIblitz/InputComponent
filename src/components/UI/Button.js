import styles from "./Css/Button.module.css";

function Button(params) {
  return (
    <button
      type={params.type || "button"}
      onClick={params.onClick}
      className={styles.button}>
      {params.value}
    </button>
  );
}
export default Button;
