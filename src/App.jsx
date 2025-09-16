import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Simulasi from './app/Simulasi'
import Navbar from './components/Navbar'
import KonsultasiCFD from './app/KonsultasiCFD'
import Layanan from './app/Layanan'
import Page from './components/Page'
import Simulasi from './app/Simulasi'
import KonsultasiCFDF from './app/KonsultasiCFD'
import Layanan from './app/Layanan'
import Portofolio from './components/Portofolio'
import Portofolio1 from './app/Portofolio1'


function App() {
  return (
    <>
    <Navbar/>
    <Formula/>
    {/* <Home/> */}
    <Simulasi />
    <KonsultasiCFD/>
    <Layanan/>
    {/* <Page/> */}
    <Simulasi1 />
    <KonsultasiCFD />
    <Layanan />
    <Portofolio/>
    </>
  )
}

export default App
