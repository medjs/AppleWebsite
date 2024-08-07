import { useGSAP } from "@gsap/react"
import gsap from "gsap"


function App() {

useGSAP(()=>{
gsap.to('#box',{
  x: 0,
  repeat: -1,
  
  
  
  ease:'circ',
}
)
},[])
  return (
    <>
      <div id="box" className=" w-36 h-36 bg-red-600 rounded-lg m-5"></div>
    </>
  )
}

export default App
