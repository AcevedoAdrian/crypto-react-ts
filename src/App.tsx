import CryptoSearchForm from "./components/CryptoSearchForm"

function App() {

  return (
    <>
     <div className="container">
      <h1 className="app-title"> Cotizador de <span>Crypto Monedas</span></h1>
      <div className="content">
        <CryptoSearchForm />
      </div>
     </div>
    </>
  )
}


export default App
