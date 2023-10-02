import './App.css'
import Page from './components/Page'
import TotalMoney from './components/TotalMoney'
import Receipt from './components/Receipt'

function App() {

  return (
    <div style={{display:"flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <TotalMoney />
      <Page />
      <Receipt />
    </div>
  )
}

export default App
