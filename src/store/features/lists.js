import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialListState = {
  dummyList: [
    {
      id: 1,
      firstName: "ali",
      lastName: "alimi",
      isSeen: false,
    },
    {
      id: 2,
      firstName: "javad",
      lastName: "shakoori",
      isSeen: false,
    },
  ],
};

const listSlice = createSlice({
  name: "list",
  initialState: initialListState,
  reducers: {
    edit(state, action) {
      const userIndex = state.dummyList.findIndex(
        (user) => user.id === +action.payload.id
      );

      state.dummyList[userIndex].firstName = action.payload.firstName;
      state.dummyList[userIndex].lastName = action.payload.lastName;
      console.log(state.dummyList);
    },
    add(state, action) {
      const newUser = {
        id: state.dummyList.length + 1,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        isSeen: false,
      };
      state.dummyList.push(newUser);
      console.log(current(state.dummyList));
    },
    viewList(state, action) {
      const userIndex = state.dummyList.findIndex(
        (user) => user.id === +action.payload
      );
      if (userIndex !== -1) {
        state.dummyList[userIndex].isSeen = true;
      }
    },
  },
});

export const listActions = listSlice.actions;
export default listSlice.reducer;
