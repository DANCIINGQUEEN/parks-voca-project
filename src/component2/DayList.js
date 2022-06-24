// import dummy from "../db/data.json"
import {Link} from "react-router-dom"
import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"
export default function DayList(){
    // console.log(dummy);
    // const [days, setDays]=useState([])
    // useEffect(() =>{
    //     fetch("http://localhost:3001/days")
    //     .then(res=>{
    //         return res.json();
    //     })
    //     .then(data=>{
    //         setDays(data);
    //     })
    // },[])
    // const [count, setCount]=useState(0)
    // function onClick(){setCount(count+1)}
    // useEffect(() =>{
    //     console.log(" count change");
    // },[])

    const days=useFetch("https://my-json-server.typicode.com/DANCIINGQUEEN/data/days")

    if(days.length===0){
        return <span>Loading...</span>
    }
    
    return(
    <>
    <ul className="list_day">
        {days.map(day=>(
            <li key={day.id}>
                <Link to={`/day/${day.day}`}>
                Day {day.day}
                </Link>
                </li>

        ))}
    </ul>
    {/* <button onClick={onClick}>{count}</button> */}
    </>
    )
}

// json-server --watch ./src/db/data.json --port 3001
// json서버 실행해야댐