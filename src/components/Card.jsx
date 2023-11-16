import { Link } from "react-router-dom";

export default function Card({poke}) {
    
    const {name,url} = poke;
//console.log(url.split('/')[6]+"a");    
    return(
        <>
        <div className="card bg-dark text-white mb-3 h-100 w-100" id="card">
            <img className="card-img-top my-3" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${url.split('/')[6]}.svg`} alt={name} width="200px" height="200px"/>
            <div className="card-body">
                <h5 className="card-title text-center text-warning">{name}</h5>
                <p className="m-0"></p>
                <div className="text-center">
                    <Link to={`/pokemon/${url.split('/')[6]}`} className="btn btn-outline-warning">Ver Informacion</Link>
                </div>
            </div>
        </div> 
        </>
    )
};
