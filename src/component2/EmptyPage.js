import { Link } from "react-router-dom";

export default function EmptyPage(){
    return (
        <>
            <h2>Wrong Access</h2>
            <Link to='/'>Back</Link>
        </>
    )
}