import { Fragment, useRef } from "react";
import { useParams } from "react-router-dom";
import { listActions } from "../store/features/lists";
import { useDispatch } from "react-redux";

const EditList = () => {
  const firstName = useRef();
  const lastName = useRef();

  const params = useParams();
  const dispatch = useDispatch();
  const userId = params.listId;
  dispatch(listActions.viewList(userId));

  const editHandler = (e) => {
    e.preventDefault();
    dispatch(
      listActions.edit({
        id: userId,
        firstName: firstName.current.value,
        lastName: lastName.current.value,
      })
    );
  };

  return (
    <Fragment>
      <form onSubmit={editHandler}>
        <label htmlFor="firstname">firstname</label>
        <input ref={firstName} id="firstname" />
        <label htmlFor="lastname">lastname</label>
        <input ref={lastName} id="lastname" />
        <button type="submit">modify</button>
      </form>
      <p>{userId}</p>
    </Fragment>
  );
};

export default EditList;
