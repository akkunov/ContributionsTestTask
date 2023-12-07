import React, {useEffect, useState} from 'react'
import axios from "axios";
import ContributionChart from "./components/Contribution/index.jsx";
import moment from "moment";

function App() {
  const [data, setData ] = useState(0)
    const CurrentMoment = moment()
    useEffect(() => {
       axios.get(`https://dpg.gg/test/calendar.json`)
           .then((data) => setData(data.data) )

    },[])

  return (
    <>
          <ContributionChart
            data={data}
            momentC={CurrentMoment}
          />
    </>
  )
}

export default App
