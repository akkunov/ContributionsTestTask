import {useEffect, useState} from 'react'
import axios from "axios";
import ContributionChart from "./components/Contribution/index.jsx";

function App() {
  const [data, setData ] = useState(0)


    useEffect(() => {
       axios.get(`https://dpg.gg/test/calendar.json`)
           .then((data) => setData(data.data) )

    },[])

  return (
    <>
          <ContributionChart
            data={data}
          />
    </>
  )
}

export default App
