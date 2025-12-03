const LeftImg = ({imgpath, heading, para}) => {
  return (
    <div className="container p-5 ">
      <div className="row p-5 text-muted ">
        <div className="col-5">
          <img src={imgpath} />
        </div>
        <div className="col-2"></div>
        <div className="col-5 p-5">
          <h2>{heading}</h2>
          <p>{para}</p>
          <div>
            <a href="" className="text-decoration-none p-5">Try Demo →</a>
            <a href="" className="text-decoration-none">Learn more →</a>
          </div>
          <div className="p-5">
            <img src="public/media/googlePlayBadge.svg" alt="playstore" style={{width:"120px", marginRight:"10px"}} />
            <img src="public/media/appstoreBadge.svg" alt="appstore" style={{width:"120px"}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftImg
