import { Link } from "react-router-dom/cjs/react-router-dom.min"

export default function Header(){
    return(
        <div className="header">
            <h1>
                <Link to="/">TOEIC VOCA</Link>
            </h1>
            <div className="menu">
                <Link to="/create_word" className="link">Word +</Link>
                <Link to="/create_day" className="link">Day +</Link>
            </div>
        </div>
    )
}