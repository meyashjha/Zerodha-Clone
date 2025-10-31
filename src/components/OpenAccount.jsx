import {useNavigate} from "react-router-dom";
const OpenAccount = () => {
  const navigate = useNavigate();
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
      <h3 className="mb-3" >Open a Zerodha account</h3>
      <p className="text-muted mb-3">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
</p>
      <button onClick={() => navigate('/signup')} style={{width:"20%", margin:"0 auto"}} className="btn btn-primary p-2 fs-4">Sign up for free</button>
      </div>
   </div>
  )
}

export default OpenAccount
