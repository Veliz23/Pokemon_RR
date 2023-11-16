import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function InfoPoke() {

    const pokeParams = useParams();
    const [pokes, setPokes] = useState(null);
    const [loading, setLoading] = useState(true);
    const [infoMas, setInfoMas] = useState(0);
    const [idPoke, setIdPoke] = useState(parseInt(pokeParams.id));
    const navigate = useNavigate();

    const getPokes = async () => {
        try {
            const res  = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPoke}/`);
            if(!res.ok) throw("no se encontro el articulo");
            const data = await res.json();   

            const resDes = await fetch(data.species.url)
            const dataDes= await resDes.json();
            const desSpa = dataDes.flavor_text_entries.filter((l) => {return l.language.name === "es"}).map(l => l.flavor_text);

            const type = data.types.map(t => t.type.name);
            const ability = data.abilities.map(a => a.ability.name);

            setPokes({...data, desSpa,type, ability});
        } catch (error) {
            console.log(error);
            navigate("/pokemon");
        }finally{
            setLoading(false);
        }
        
    }
    const  handleInfoMas = () => {
        setInfoMas(infoMas + 1); 
    }
    const  handleInfoMen = () => {
        setInfoMas(infoMas - 1); 
    }
    const  handlePokeMas = () => {
        setIdPoke(idPoke + 1); 
    }
    const  handlePokeMen = () => {
        setIdPoke(idPoke - 1);
    }

    const getNavi = () => {
        navigate(`/pokemon/${idPoke}`); 
    }

    useEffect(() => {
        getPokes();
        getNavi();
    },[setInfoMas,idPoke])

    if(loading) return <p>Loading...</p>
    
    const pageDesMax = (pokes.desSpa.length);

    return(
        <>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-outline-warning me-2" onClick={handlePokeMen}>Anterior</button>
                <h1 className="my-3 text-center">Info Pokemon</h1>
                <button className="btn btn-outline-warning ms-2" onClick={handlePokeMas}>Siguiente</button>
            </div>
            <div className="card bg-dark text-white mb-3 w-50 h-100 mx-auto" /*style="max-width: 540px;"*/ id="card-height">
            <div className="row g-0">
                <div className="col-md-6 p-1 m-auto">
                    <img src={pokes.sprites.other.dream_world.front_default} className="img-fluid rounded-start" alt="..." width="500" height="500"/>
                </div>
                <div className="col-md-6">
                <div className="card-body">
                    <h5 className="card-title text-warning">{pokes.name}
                    {
                        !infoMas == 0 ?  <button className="btn btn-outline-warning ms-3" onClick={handleInfoMen}>-</button> : <button className="btn btn-outline-warning ms-3" onClick={handleInfoMen} disabled>-</button>
                    }
                    {
                        infoMas != pageDesMax-1 ? <button className="btn btn-outline-warning ms-3" onClick={handleInfoMas}>+</button> : <button className="btn btn-outline-warning ms-3" onClick={handleInfoMas} disabled>+</button>
                    }
                    </h5>
                    <p className="card-text">{pokes.desSpa[infoMas]}</p>
                    <h6 className="text-warning d-flex">
                        {
                            pokes.type.map((t, index) =>( 
                                <p key={index} className="me-2">{t}</p>
                            ))
                        }
                    </h6>
                    <ul className="list-group">
                        {
                            pokes.ability.map((a, index) =>( 
                                <li className="" key={index}>{a}</li>
                            ))
                        }
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </>
    )
};
