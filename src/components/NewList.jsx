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
      <form className="m-5" onSubmit={addHandler}>
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">
            Firstname
          </label>
          <input
            ref={firstName}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            lastName
          </label>
          <input
            ref={lastName}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          add
        </button>
      </form>
    </Fragment>
  );
};

export default NewLists;
