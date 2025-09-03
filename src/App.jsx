import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Simulasi from './app/Simulasi'
import Navbar from './components/Navbar'
import KonsultasiCFD from './app/KonsultasiCFD'
import Layanan from './app/Layanan'
import Page from './components/Page'
import Portofolio from './components/Portofolio'
import Portofolio1 from './app/Portofolio1'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Simulasi />
    <KonsultasiCFD/>
    <Layanan/>
    {/* <Page/> */}
    <Portofolio/>
    <Portofolio1/>
    <Footer/>
    </>
  )
}

export default App
