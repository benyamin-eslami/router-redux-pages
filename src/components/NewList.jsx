import { Fragment, useRef } from "react";
import { listActions } from "../store/features/lists";
import { useDispatch } from "react-redux";

const NewLists = () => {
  const firstName = useRef();
  const lastName = useRef();

  const dispatch = useDispatch();

  const addHandler = (e) => {
    e.preventDefault();
    dispatch(
      listActions.add({
        firstName: firstName.current.value,
        lastName: lastName.current.value,
      })
    );
  };
  return (
    <Fragment>
      <form onSubmit={addHandler}>
        <label htmlFor="firstname">firstname</label>
        <input ref={firstName} id="firstname" />
        <label htmlFor="lastname">lastname</label>
        <input ref={lastName} id="lastname" />
        <button type="submit">add</button>
      </form>
    </Fragment>
  );
};

export default NewLists;
