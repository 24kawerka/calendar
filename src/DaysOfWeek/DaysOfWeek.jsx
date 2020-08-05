import React from "react";
import styles from "./DaysOfWeek.module.css";
import Calendar from "./../Calendar/Calendar";
const DaysOfWeek = () => {
  let arr1 = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
  let days = arr1.map((week) => <th className={styles.td}>{week}</th>);

  return <table className={styles.table}>{days}</table>;
};

export default DaysOfWeek;
