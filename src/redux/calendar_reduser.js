import { createStore } from "redux";
export let NEXT_MONTH = "NEXT_MONTH";
export let PAST_MONTH = "PAST_MONTH";
let InitialState = {
  date: new Date(),
};
export const calendarReduser = (state = InitialState, action) => {
  switch (action.type) {
    case NEXT_MONTH: {
      return {
        ...state,
        date: new Date(state.date.getFullYear(), state.date.getMonth() + 1),
      };
    }
    case PAST_MONTH: {
      return {
        ...state,
        date: new Date(state.date.getFullYear(), state.date.getMonth() - 1),
      };
    }
    default:
      return state;
  }
};
// export const next_month = () => {
//   return {
//     type: NEXT_MONTH,
//   };
// };
// export const past_month = () => {
//   return {
//     type: PAST_MONTH,
//   };
// };

export let store = createStore(calendarReduser);
