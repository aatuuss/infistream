import './App.css'
import KonsultasiCFD from './app/KonsultasiCFD'
import Layanan from './app/Layanan'
import Portofolio from './app/Portofolio'
import Simulasi from './app/Simulasi'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
      <Simulasi />
      <KonsultasiCFD />
      <Layanan />
      <Portofolio />
    </>
  )
}

export default App
