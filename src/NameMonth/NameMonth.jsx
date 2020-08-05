import React from "react";
import styles from "./NameMonth.module.css";

const NameMonth = (props) => {
  let arr2 = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  let monthName = props.state.date.getMonth();

  return (
    <div>
      <div>{arr2[monthName]}</div>
    </div>
  );
};
export default NameMonth;
