import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./PeopleList.module.css";
const PeopleLists = () => {
  const usersList = useSelector((state) => state.list.dummyList);

  return (
    <div>
      <ul className={styles.itemWrapper}>
        {usersList.map((user) => {
          return (
            <li className={styles.item} key={user.id}>
              <span className={styles.badge}>
                {user.isSeen ? "seen" : "unseen"}
              </span>
              <p className={styles.text}>
                name :{user.firstName} family:{user.lastName}
              </p>
              <Link className={styles.link} to={`${user.id}`}>
                {user.id} view
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PeopleLists;
