
const Awards = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/largestBroker.svg" alt="largestBroker"></img>
        </div>
        <div className="col-6 p-5 mt-3">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">2+million Zerodha clients contribute to over 15% of of
            all retail order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col">
              <ul>
            <li>Futures and options</li>
            <li>Commoditiy derivatives</li>
            <li>Currency derivatives</li>
          </ul>
            </div>
            <div className="col">
              <ul>
                <li>Stocks and IPOs</li>
                <li>Direct mutual Funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img src="media/pressLogos.png" alt="press" style={{width:"90%"}}></img>
        </div>
      </div>
    </div>
  )
}

export default Awards