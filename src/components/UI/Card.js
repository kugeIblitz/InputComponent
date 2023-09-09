import styles from "./Css/Card.module.css";

function Card(params) {
  return (
    <div className={`${styles.card} ${params.className}`}>
      {params.children}
    </div>
  );
}
export default Card;
