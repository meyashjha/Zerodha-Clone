const RightImg = ({imgpath, heading , para}) => {
  return (
<div className="container ">
      <div className="row p-5 text-muted align-items-center">
        <div className="col-5 ">
          <h2>{heading}</h2>
          <p>{para}</p>
            <a href="" className="text-decoration-none">Learn more →</a>
        </div>
        <div className="col-2"></div>
        <div className="col-5">
          <img src={imgpath} />
        </div>
        
      </div>
    </div>
     )
}

export default RightImg
