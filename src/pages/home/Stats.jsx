const Stats = () => {
  const headingAndPara = [{
    heading: "Customer-first always",
    paragraph: "That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India."
  },
  {
    heading: "No spam or gimmicks",
    paragraph: "No gimmicks, spam, \"gamification\", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies."
  },
  {
    heading: "The Zerodha universe",
    paragraph: "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs."
  },
  {
    heading: "Do better with money",
    paragraph: "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money."
  }
]
  return (
    <div className="container px-5">
      <div className="row p-5">
        <div className="col text-wrap p-5"> 
          <h1 className="pb-5">Trust with confidence</h1>
          {headingAndPara.map((item, index) => (
            <div key={index}>
              <h3>{item.heading}</h3>
              <p className="text-wrap w-75 text-muted">{item.paragraph}</p>
            </div>
          ))}
        </div>
        <div className="col p-5">
          <img src="/media/ecosystem.png" alt="ecosystem" style={{width:"90%"}}></img>
          <div className="text-center p-5">
            <a href="" className="mx-5 text-decoration-none">Explore our products →</a>
            <a href="" className="text-decoration-none"> Try Kite demo →</a>
          </div>
           </div>

      </div>
    </div>
  )
}

export default Stats
