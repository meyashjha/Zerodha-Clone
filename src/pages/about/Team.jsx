const Team = () => {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <h3 className="text-center text-muted">People</h3>
      </div>
      <div className="row p-5 mx-5">
      <div className="col-1"></div>
    <div className="col-5">
      <img src="public/media/Anime-yash.jpg" alt="me" className="rounded-circle" style={{width:"250px", height:"250px"}} />
    </div>
    <div className="col-5 text-muted" style={{lineHeight:"1.8", fontSize:"1.1em"}}>
        <p>I'm a passionate full-stack developer with a love for creating exceptional user experiences.</p> 
        <p>My Mission is to create beautiful, functional, and user-friendly applications that solve real-world problems.</p>
        <p>Every line of code I write is an opportunity to make someone's day a little bit better.</p>
    </div>
    <div className="col-1"></div>
      </div>
    </div>
  )
}

export default Team
