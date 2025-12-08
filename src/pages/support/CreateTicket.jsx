const CreateTicket = () => {
  const supportTopics = [
    {
      title: "Account Opening",
      icon: "fa-user-plus",
      links: [
        "Getting started",
        "Online account opening",
        "Offline account opening",
        "Company, Partnership and HUF",
        "NRI account opening",
        "Charges",
        "Zerodha IDFC FIRST Bank 3-in-1"
      ]
    },
    {
      title: "Your Zerodha Account",
      icon: "fa-user",
      links: [
        "Login credentials",
        "Account modification",
        "Nomination",
        "Transfer and conversion of shares",
        "CMR & DP ID"
      ]
    },
    {
      title: "Trading and Markets",
      icon: "fa-bar-chart",
      links: [
        "Kite features",
        "Trading FAQs",
        "Corporate actions",
        "Sentinel",
        "Kite features",
        "Product and order types"
      ]
    },
    {
      title: "Funds",
      icon: "fa-credit-card",
      links: [
        "Adding funds",
        "Fund withdrawal",
        "DP charges",
        "Adding bank accounts",
        "Paytm"
      ]
    },
    {
      title: "Console",
      icon: "fa-desktop",
      links: [
        "Reports",
        "Ledger",
        "Portfolio",
        "60 day challenge",
        "IPO"
      ]
    },
    {
      title: "Coin",
      icon: "fa-bullseye",
      links: [
        "Understanding mutual funds",
        "About Coin",
        "Buying and selling",
        "Starting an SIP",
        "Managing your portfolio"
      ]
    }
  ];

  return (
    <div className="container mb-5">
      <div className="row p-5">
        <h3 className="mb-4 fs-4">To create a ticket, select a relevant topic</h3>
        {supportTopics.map((topic, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
            <h5 className="mb-3">
              <i className={`fa ${topic.icon} me-2`} aria-hidden="true"></i>
              {topic.title}
            </h5>
            <ul className="list-unstyled">
              {topic.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mb-2">
                  <a href="#" className="text-decoration-none text-primary" style={{fontSize: '0.9rem'}}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateTicket;
