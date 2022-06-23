import {useState}from"react"
import UserName from "./UserName";
export default function Welcome(props){
    function showText(e){
        console.log(e.target.value);
    }
    //let name='mike'
    const [name, setName] =useState('mike')
    function changeName(){
        const newName=name==="mike"?"jane":"mike"
        console.log(name);
        setName(newName)
    }
    return(
        <>
        <UserName name={name}/>
        <h2>Welcome</h2>
        <input type="text" onChange={showText}/>
        <h2>{name} ({props.age}세)</h2>
        <button onClick={changeName}>change</button>
        </>
        
        )
}