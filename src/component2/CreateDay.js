import useFetch from "../hooks/useFetch"
import { useHistory } from "react-router-dom"
export default function CreateDay() {
    const days=useFetch("https://my-json-server.typicode.com/DANCIINGQUEEN/data/days")
    const history=useHistory()
    function addDay(){
        fetch(`https://my-json-server.typicode.com/DANCIINGQUEEN/data/days/`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                day:days.length+1
            })
        })
        .then(res =>{
            if(res.ok){
                alert("save success")
                history.push(`/`)
            }
        })
    }
    return <div>
        <h3>current day : {days.length}</h3>
        <button onClick={addDay}>Day +</button>
    </div>
};
