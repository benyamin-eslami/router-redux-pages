import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const PeopleLists = () => {
  const usersList = useSelector((state) => state.list.dummyList);

  return (
    <div>
      <ul>
        {usersList.map((user) => {
          return (
            <li key={user.id}>
              <span>{user.isSeen ? "seen" : "unseen"}</span>
              <p>
                name :{user.firstName} family:{user.lastName}
              </p>
              <Link to={`${user.id}`}>{user.id} view</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PeopleLists;
