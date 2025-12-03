import { useState } from "react";

const Brokerage = () => {
  const [showequity, setShowequity] = useState(true);
  const [showcurrency, setShowcurrency] = useState(false);
  const [showcommodity, setShowcommodity] = useState(false);
  return (
    <div className="container">
      <div className="row px-5 m-5">
        
        <div className={`col ${showequity ? "border-bottom border-primary border-2" : ''}`} >
          <h3 style={{cursor: "pointer"}} onClick={()=>{setShowequity(true)
             setShowcurrency(false) 
             setShowcommodity(false)}}>Equity</h3>
        </div>
        <div className={`col ${showcurrency ? "border-bottom border-primary border-2" : ''}`} >
          <h3 style={{cursor: "pointer"}} onClick={()=>{setShowequity(false)
             setShowcurrency(true) 
             setShowcommodity(false)}}>Currency</h3>
        </div>
        <div className={`col ${showcommodity ? "border-bottom border-primary border-2" : ''}`} >
          <h3 style={{cursor: "pointer"}} onClick={()=>{setShowequity(false)
             setShowcurrency(false) 
             setShowcommodity(true)}}>Commodity</h3>
        </div>
        <div className="col-6"> </div>
      </div>
      <div className="row  px-5 mx-5">
        {showequity && <div ><img src="/media/Equity.png" alt="Equity Brokerage" style={{width:"1000px"}} /></div>}
        {showcurrency && <div><img src="/media/Currency.png" alt="Currency Brokerage"  style={{width:"1000px"}} /></div>}
        {showcommodity && <div><img src="/media/Commodity.png" alt="Commodity Brokerage" style={{width:"1000px"}} /></div>}
      </div>
    </div>
  )
}

export default Brokerage
