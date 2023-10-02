import './App.css'
import Page from './components/Page'
import TotalMoney from './components/TotalMoney'
import Receipt from './components/Receipt'
import Modal from './modal/Modal'

function App() {

  return (
    <div style={{display:"flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <TotalMoney />
      <Page />
      <Receipt />
      <Modal />
    </div>
  )
}

export default App
