import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CarComponent } from './carComp'




function App() {
 
  


  interface Car{
    id:number,
    brand: string,
    price: number
  }

  interface AutoArray{
    cars: Car[];
  }

  const [carData,setCarData] = useState<Car[]>([])


  useEffect(() =>{
      async function load() {
          const res = await fetch("/olcsoAutok.json")
          const auto: AutoArray = await res.json();
          setCarData(auto.cars)
          console.log(auto.cars)
      }
      load()
  },[])



  return(
      <>
      <p>{carData.map((e:Car) => <div> {e.brand} </div>)}</p>
      </>
  )
}

export default App
