import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {

  const saludo = "Hola"

  return (
    <div>
      <NavBar />
      <ItemListContainer saludo="Bienvenido a CIDECO Handball" />
    </div>
  )
}
    

export default App
