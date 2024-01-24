import './App.css'
import flecha from "./assets/flecha.png"
function App() {
 

  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center contenedorFrase container'>
       <h2 className='frasePrueba m-0 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perferendis, minima iusto deserunt recusandae excepturi expedita rem nobis dicta, blanditiis nostrum voluptatem minus error eligendi soluta quibusdam exercitationem a sapiente?</h2>
       <img className='flechita' src={flecha} alt="" />
      </div>

      <div className='d-flex justify-content-center align-items-center contenedorFrase container'>

      </div>
    </>
  )
}

export default App
