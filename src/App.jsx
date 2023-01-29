import { Gprovider } from "./context/GContext"
import Todos from "./Todos"


function App() {

  return (
    <Gprovider>
       <Todos/>
    </Gprovider>

  )
}

export default App
