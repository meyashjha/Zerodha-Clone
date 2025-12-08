const Hero = () => {
  const quickLinks = [
    "Track account opening",
    "Track segment activation",
    "Intraday margins",
    "Kite user manual"
  ];

  const featuredArticles = [
    "Current Takeovers and Delisting - January 2024",
    "Latest Intraday leverages - MIS & CO"
  ];

  return (
    <section className="container-fluid" style={{backgroundColor: '#387ed1'}}>
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="text-white mb-0">Support Portal</h5>
          <a href="#" className="text-white text-decoration-none">Track Tickets</a>
        </div>
      </div>

      <div className="container pb-5">
        <div className="row">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <h4 className="text-white mb-4">
              Search for an answer or browse help topics to create a ticket
            </h4>
            <input 
              type="text"
              className="form-control form-control-lg mb-3" 
              placeholder="Eg: how do I activate F&O"
              style={{padding: '0.75rem 1rem'}}
            />
            <div className="d-flex flex-wrap gap-3">
              {quickLinks.map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-white text-decoration-underline"
                  style={{fontSize: '0.9rem'}}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <h5 className="text-white mb-3">Featured</h5>
            <ol className="text-white" style={{paddingLeft: '1.25rem'}}>
              {featuredArticles.map((article, index) => (
                <li key={index} className="mb-2">
                  <a 
                    href="#" 
                    className="text-white text-decoration-underline"
                    style={{fontSize: '0.9rem'}}
                  >
                    {article}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
