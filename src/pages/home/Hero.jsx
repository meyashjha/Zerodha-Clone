
import {useNavigate} from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
      <img src="media/homeHero.png" alt="homeHero" className="mb-5" />
      <h1 className="mt-5" >Invest in everything</h1>
      <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
      <button onClick={() => navigate('/signup')} style={{width:"20%", margin:"0 auto"}} className="btn btn-primary p-2 fs-4">Sign up for free</button>
      </div>
   </div>
  )
}

export default Hero