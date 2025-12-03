const Hero = () => {
  return (
    <div className="container p-5">
      <div className="row text-center p-5">
        <h2>Charges</h2>
        <h4 className="text-muted">List of all charges and taxes</h4>
      </div>
      <div className="row">
      <div className="col text-center">
        <img src="media/pricing0.svg" />
        <h2>Free equity delivery</h2>
        <br/>
        <p className="text-muted">All equity delivery investments (NSE, BSE),<br /> are absolutely free — ₹ 0 brokerage.</p>
      </div>
      <div className="col text-center">
        <img src="media/intradayTrades.svg" />
        <h2>Intraday and F&O trades</h2>
        <br/>
        <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per <br /> executed order for intraday trades across <br/> equity, currency, and commodity trades. Flat <br /> ₹20 on all option trades.</p>
      </div>
      <div className="col text-center">
        <img src="media/pricing0.svg" />
        <h2>Free direct MF</h2>
        <br/>
        <p className="text-muted">All direct mutual fund investments are <br /> absolutely free — ₹ 0 commissions & DP<br /> charges.</p>
      </div>
      </div>
    </div>
  )
}

export default Hero
