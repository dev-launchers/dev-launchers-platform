import React, { useState } from "react";
import axios from "axios";

export default function WeeksGlance() {
  const [eventList, setEventList] = useState([]);
  const [entryTimes, setEntryTimes] = useState([]);
  let componentDidMount = () => {
    axios
      .get(
        "https://api.calendly.com/scheduled_events?user=https%3A%2F%2Fapi.calendly.com%2Fusers%2FHFHGJK4NNLTU5PXT",
        {
          headers: {
            authorization: `Bearer RD_DszQ_ThsIrK2JD6pCKkl0KcoKBbdrwTYM8iYxN3c`
          }
        }
      )
      .then(response => {
        console.log(response);
        let tempEventList = [];
        let tempEventTimes = [];
        response.data.collection.forEach(function(entry) {
          tempEventList.push(entry.name);
        });
        setEventList(tempEventList);
        response.data.collection.forEach(function(entry) {
          tempEventTimes.push(entry.name);
        });
        tempEventTimes.push(entry.name);
      })
      .catch(err => {
        console.error(err);
      });
  };
  React.useEffect(componentDidMount, []);
  return (
    <div>
      {eventList.map((entry, index) => {
        return entry;
      })}
      ;
    </div>
  );
}
