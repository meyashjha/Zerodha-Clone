import {useNavigate} from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
      <h3 className="mb-3" >404 Not Found</h3>
      <p className="text-muted mb-3">Are You lost? Babygirl</p>
      <button onClick={() => navigate('/')} style={{width:"20%", margin:"0 auto"}} className="btn btn-primary p-2 fs-4">Home</button>
      </div>
   </div>
  )
}

export default Error;
