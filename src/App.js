import React, { useReducer } from "react";
import Calendar from "./Calendar/Calendar";
import DaysOfWeek from "./DaysOfWeek/DaysOfWeek";
import NameMonth from "./NameMonth/NameMonth";
import Year from "./Year/Year";
import "./App.css";
import {
  calendarReduser,
  NEXT_MONTH,
  PAST_MONTH,
} from "./redux/calendar_reduser";

const App = (props) => {
  const [state, dispatch] = useReducer(calendarReduser, { date: new Date() });
  let dayLast = new Date(
    state.date.getFullYear(),
    state.date.getMonth() + 1,
    0
  ).getDate();
  let dayWeekLast = new Date(
    state.date.getFullYear(),
    state.date.getMonth(),
    dayLast
  ).getDay();
  let DayFirst = new Date(
    state.date.getFullYear(),
    state.date.getMonth(),
    1
  ).getDay();

  return (
    <div className="background">
      <div className="app_wrapper">
        <div className="Year">
          <Year state={state} />
        </div>
        <button
          onClick={() => dispatch({ type: PAST_MONTH })}
          className="buttonPast"
        >
          past
        </button>
        <div className="NameMonth">
          <NameMonth state={state} />
        </div>
        <button
          onClick={() => dispatch({ type: NEXT_MONTH })}
          className="buttonNext"
        >
          next
        </button>

        <div className="DaysOfWeek">
          <DaysOfWeek state={state} />
        </div>
        <div className="NumberDays">
          <Calendar
            state={state}
            DayFirst={DayFirst}
            dayLast={dayLast}
            dayWeekLast={dayWeekLast}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
