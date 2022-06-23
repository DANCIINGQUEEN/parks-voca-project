import World from "./World";

export default function Hello(){
    function showName(){
        console.log("mike");
    }
    function showAge(age){
        console.log(age);
    }
    return (
        <>
            <p
            style={{
                color: '#f00',
                borderRight:'12px solid #000',
                marginBottom:"50px",
                opacity: 1,
            }}>hello</p>
            <World/>
            <button onClick={showName}>Show name</button>
            <button onClick={()=>{showAge(30)}}>Show age</button>
        </>
    )
}