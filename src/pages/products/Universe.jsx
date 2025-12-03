import { useNavigate } from "react-router-dom";

const Universe = () => {
  const navigate = useNavigate();
  return (
    <div className="container p-5">
      <div className="row text-center p-5">
        <h3 className="text-muted">The Zerodha Universe</h3>
        <h5 className="text-muted">Extend your trading and investment experience even further with our partner platforms</h5>
      </div>
      <div className="row">
        <div className="col p-5">
          <div className="row p-5">
            <img src="media/zerodhaFundhouse.png" />
            <p className="text-muted text-small">Our asset management venture
            that is creating simple and transparent index
            funds to help you save for your goals.
              </p>
          </div>
          <div className="row p-5">
            <img src="media/streakLogo.png" />
            <p className="text-muted text-small">Systematic trading platform that allows you to create and backtest 
              strategies without coding.
              </p>
          </div>
        </div>
        <div className="col p-5">
          <div className="row p-5">
            <img src="media/sensibullLogo.svg" />
            <p className="text-muted text-small">Options trading platform that lets you create strategies, analyze positions, and examine
              data points like open interest, FII/DII, and more.
              </p>
          </div>
          <div className="row p-5">
            <img src="media/smallcaseLogo.png" />
            <p className="text-muted text-small">Thematic investing platform
                  that helps you invest in diversified baskets of stocks on ETFs.
              </p>
          </div>
        </div>
        <div className="col p-5">
          <div className="row p-5">
            <img src="media/tijori.svg" />
            <p className="text-muted text-small">Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
              </p>
          </div>
          <div className="row ">
            <img src="media/dittoLogo.png" />
            <p className="text-muted text-small">Personalized advice on life and health insurance. No spam and no mis-selling.
              </p>
          </div>
        </div>
      </div>

           <button onClick={() => navigate('/signup')} style={{width:"20%", margin:"0 500px"}} className="btn btn-primary p-2 fs-4" >Sign up for free</button>

    </div>
  )
}

export default Universe
