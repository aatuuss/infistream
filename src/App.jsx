import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Page from './components/Page'
import Simulasi from './app/Simulasi'
import KonsultasiCFDF from './app/KonsultasiCFD'
import Layanan from './app/Layanan'
import Portofolio from './components/Portofolio'
import Portofolio1 from './app/Portofolio1'
import KonsultasiCFD from './app/KonsultasiCFD'
import Simulasi1 from './app/Simulasi1'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    {/* <Page/> */}
    <Simulasi1 />
    <KonsultasiCFD />
    <Layanan />
    <Portofolio/>
    <Portofolio1 /> 
    <Footer/> 
    </>
  )
}

export default App
