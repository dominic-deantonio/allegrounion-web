import { useEffect, useState } from "react";
import { Timer, Time, TimerOptions } from "timer-node";
var Duration = require("duration");

const timeWaterTurnedOff = 1652094000000;
const startDate = new Date(timeWaterTurnedOff);

function getMillisDiff(): number {
  return Math.abs(Date.now() - timeWaterTurnedOff);
}

function getTimeSince(): string {
  const diffMillis = getMillisDiff();
  const diffTotalMins = diffMillis / (1000 * 60);
  const diffHours = Math.floor(diffTotalMins / 60);
  const diffMins = Math.floor(diffTotalMins - diffHours * 60);
  const time = `${diffHours} hours and ${diffMins} minute(s)`;
  return time;
}

function TimerDisplay() {
  var d = new Duration(startDate, new Date(Date.now()));
  return <div>{`${d.days} days, ${d.hour} hours, ${d.minute} minute(s)`}</div>;
}
const email = "allegrounion@gmail.com";
function App() {
  return (
    <div>
      Send an email to <a href={`mailto:${email}`}>{email}</a> to get updates on the latest about the water situation.
      <br />
      <br />
      Length of time without water: <TimerDisplay />
    </div>
  );
}

export default App;
