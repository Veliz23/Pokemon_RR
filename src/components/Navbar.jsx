import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";



export default function Navbar() {
    const {loginUser, logoutUser, user} =  useUserContext();
console.log(user);
    return(
        <>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://pokeapi.co/">
                <img width="10%" src="https://robnei.blog/wp-content/uploads/2021/08/Pokemon27.png"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    {
                    user ? (<button onClick={() => logoutUser()}    className="btn btn-outline-warning me-3">logout</button>)    
                    : <button onClick={() => loginUser()}    className="btn btn-outline-warning me-3">Acceso</button>
                }    
                    </li>
                    <li className="nav-item">
                    <NavLink to="/"         className={({isActive}) => isActive ? "btn btn-warning" : "btn btn-outline-warning"}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                    {
                    user ?  
                    <NavLink to="/Pokemon"  className={({isActive}) => isActive ? "btn btn-warning ms-3" : "btn btn-outline-warning ms-3"}>Pokemon</NavLink>
                    :
                    <NavLink to="/Pokemon"  className={({isActive}) => !isActive ? "btn btn-outline-danger ms-3" : "btn btn-outline-warning ms-3"} disabled={!!true} >Pokemon</NavLink>
                    }
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    )
};
