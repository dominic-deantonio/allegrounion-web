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

function TimerDisplay(props: { now: number }) {
  var d = new Duration(startDate, new Date(props.now));
  return <div>{`${d.days} days, ${d.hour} hours, ${d.minute} minute(s), ${d.second} seconds`}</div>;
}
const email = "allegrounion@gmail.com";
function App() {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);
  }, []);

  return (
    <div>
      Send an email to <a href={`mailto:${email}`}>{email}</a> to get updates on the latest about the water situation.
      <br />
      <br />
      Length of time without water: <TimerDisplay now={now} />
    </div>
  );
}

export default App;
