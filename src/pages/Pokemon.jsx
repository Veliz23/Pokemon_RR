import { useEffect, useState } from "react"
import Card from "../components/Card";

export default function Pokemon() {
    
    const [pokeList, setPokeList] = useState([]);
    const [pages, setPages] = useState(0);
    const [pagesMax, setPagesMax] = useState();
    const getPokeList = async () =>{
        try {
            const res  = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${pages}`);
            if(!res.ok) throw("no se encontro el articulo...");
            const data = await res.json();

            setPokeList(data.results);
            setPagesMax(data.count);

        } catch (error) {
            console.log(error);
        }
    }

    const handleNext = () => {
        setPages(pages + 20);
    };

    const handlePrevious = () => {
        setPages(pages - 20);
    };

    useEffect(() => {
        getPokeList();
    },[pages]);

    const  pagePokeMax = (pagesMax);

    return(
        <>
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center">
                {
                pages != 0 ?  
                    (<button onClick={handlePrevious} className="btn btn-outline-warning me-2">Anterior</button>)
                :   (<button onClick={handlePrevious} className="btn btn-outline-warning me-2" disabled>Anterior</button>)
                }
                <h2 className="text-center my-3">Pokemon</h2>
                {
                pages >= pagePokeMax-1 ?
                    (<button onClick={handleNext} className="btn btn-outline-warning ms-2" disabled>Siguiente</button>)
                :   (<button onClick={handleNext} className="btn btn-outline-warning ms-2">Siguiente</button>)  
                }
                </div>
            <div className="row">
                {pokeList.map(poke => (
                    <div key={poke.name} className="mb-3 d-flex align-content-start flex-wra col-sm-6 col-md-4 col-lg-3">
                        <Card poke={poke} />
                    </div>
                ))}            
            </div>
        </div>
        </>
    )
    
};
