import { useEffect, useState } from "react";
import { autoArray, car } from "./autok";

export function CarComponent(){
    const [carData,setCardData] = useState<car[]>([])


    useEffect(() =>{
        async function load() {
            const res = await fetch("/olcsoAutok.json")
            const auto: autoArray = await res.json();
            setCardData(auto.autok)
            console.log(auto.autok)
        }
    },[])



    return(
        <>
        <p>{carData.map((e:car) => <div> {e.brand} </div>)}</p>
        </>
    )



}