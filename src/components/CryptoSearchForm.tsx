
export default function CryptoSearchForm() {
  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="currency">
          <option value="USD">--Seleccion-Moneda--</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="cryptoCurrency">Cripto Moneda:</label>
        <select name="cryptoCurrency" id="cryptoCurrency">
          <option value="USD">--Seleccion-Crypto--</option>
        </select>
      </div>
      <input type="submit" value="Cotizar" className="button-primary" />
    </form>
  )
}
