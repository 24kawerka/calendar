import React from "react";
import styles from "./Calendar.module.css";

const Calendar = (props) => {
  let arr1 = [];
  let arr2 = [];
  let arr4 = [];
  if (props.DayFirst !== 0) {
    for (let i = 1; i < props.DayFirst; i++)
      arr2.push(<td className={styles.td}>{[""]}</td>);
  } else {
    for (let i = 0; i < 6; i++) {
      arr2.push(<td className={styles.td}>{[""]}</td>);
    }
  }

  for (let i = 1; i <= props.dayLast; i++) {
    arr2.push(<td className={styles.td}>{[i]}</td>);
    if (
      new Date(
        props.state.date.getFullYear(),
        props.state.date.getMonth(),
        i
      ).getDay() == 0
    ) {
      arr1.push(new Array([...arr2.splice(0, 7)]));
    }
  }

  if (props.dayWeekLast !== 0) {
    for (let i = props.dayWeekLast; i < 7; i++) {
      arr4.push(<td className={styles.td}>{[""]}</td>);
    }
    arr1.push(new Array([...arr2].concat(arr4)));
  } else {
    arr1.push(new Array([...arr2.splice(0, 7)]));
  }
  let arr3 = arr1.map((number2) => <tr className={styles.td}>{number2}</tr>);
  return (
    <div className={styles.Calendar}>
      <table className={styles.table}>{arr3}</table>
    </div>
  );
};
export default Calendar;
