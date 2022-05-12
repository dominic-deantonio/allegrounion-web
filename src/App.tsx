import { useEffect, useState } from "react";
import { Timer, Time, TimerOptions } from "timer-node";
var Duration = require("duration");

const timeWaterTurnedOff = 1652094000000;
const timeWaterTurnedOn = 1652380980000;
const startDate = new Date(timeWaterTurnedOff);
const endDate = new Date(timeWaterTurnedOn);

function TimerDisplay(props: { now: number }) {
  var d = new Duration(startDate, endDate);
  return <strong>{`${d.days} days, ${d.hour} hours, ${d.minute} minute(s)`}</strong>;
}
const email = "allegrounion@gmail.com";
function App() {
  const [now, setNow] = useState(Date.now());

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setNow(Date.now());
  //   }, 1000);
  // }, []);

  return (
    <div>
      According to email correspondence from Allegro on 12 May at 2:43 eastern time, water has been restored.
      <br />
      <br />
      Send an email to <a href={`mailto:${email}`}>{email}</a> to get updates on the latest about the water situation and any ongoing issues.
      <br />
      <br />
      Length of time without water:
      <br />
      <TimerDisplay now={now} />
    </div>
  );
}

export default App;
