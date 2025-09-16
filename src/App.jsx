import './App.css'
import Formula from './components/Formula'
import Footer from './components/Footer'
import Portofolio1 from './app/Portofolio1'
import Navbar from './components/Navbar'
import KonsultasiCFD from './app/KonsultasiCFD'
import Simulasi1 from './app/Simulasi1'
import Portofolio from './components/Portofolio'
import Layanan from './app/Layanan'


function App() {
  return (
    <>
    <Navbar/>
    <Formula/>
    <Simulasi1 />
    <KonsultasiCFD/>
    <Layanan />
    <Portofolio/>
    <Portofolio1/>
    <Footer/>
    </>
  )
}

export default App
