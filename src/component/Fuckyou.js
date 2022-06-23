import {useState}from'react'
export default function Fuckyou(props){
    const[age, setAge] = useState(props.age)
    const msg=age>19?"adult":"children"
    return (
        <>
            <h2>my age is {age} and i am {msg}</h2>
            <button onClick={()=>{setAge(age+1)}}>fuck</button>
        </>
    )
}