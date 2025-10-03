import './App.css'
import Formula from './components/Formula'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import KonsultasiCFD from './app/KonsultasiCFD'
import Simulasi1 from './app/Simulasi1'
import OpenFoam from './components/OpenFoam'
import Portofolio from './components/Portofolio'
import Layanan from './app/Layanan'
import ChatSelector from './components/ChatSelector'


function App() {
  return (
    <>
    <Navbar/>
    <Formula/>
    <Simulasi1 />
    <KonsultasiCFD/>
    {/* <Layanan /> */}
    {/* <Portofolio/> */}
    <OpenFoam/>
    <Portofolio/>
    <Layanan/>
    <ChatSelector/>
    <Footer/>
    </>
  )
}

export default App