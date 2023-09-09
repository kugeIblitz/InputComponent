import styles from "./Css/UsersList.module.css";
import Card from "../UI/Card";
function UsersList(params) {
  return (
    <Card className={styles.users}>
      <ul>
        {params.users.map((user) => (
          <li key={user.id}>
            {user.name}({user.age} year)
          </li>
        ))}
      </ul>
    </Card>
  );
}
export default UsersList;
