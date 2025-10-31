const Footer = () => {
const accountLinks = [
    "Open demat account",
    "Minor demat account",
    "NRI demat account",
    "Commodity",
    "Dematerialisation",
    "Fund transfer",
    "MTF",
    "Referral program"
  ];
const supportLinks = [
  "Contact us",
  "Support portal",
  "How to file a complaint?",
  "Status of your complaints",
  "Bulletin",
  "Circular",
  "Z-Connect blog",
  "Downloads"
];

const companyLinks = [
  "About",
  "Philosophy",
  "Press & media",
  "Careers",
  "Zerodha Cares (CSR)",
  "Zerodha.tech",
  "Open source"
];

const quickLinks = [
  "Upcoming IPOs",
  "Brokerage charges",
  "Market holidays",
  "Economic calendar",
  "Calculators",
  "Markets",
  "Sectors"
];

const legalLinks = [
  "NSE",
  "BSE",
  "MCX",
  "Terms & conditions",
  "Policies & procedures",
  "Privacy policy",
  "Disclosure",
  "For investor's attention",
  "Investor charter"
];


  return (
    <div className="p-5" style={{backgroundColor: '#f3f1f1ff'}}>
    <div className="container " >
      <div className="row">
        <div className="col">
          <img src="/media/logo.svg" alt="logo" style={{width:"45%"}} />
          <p className="text-muted mt-3">© 2010 - 2025, Zerodha Broking Ltd.<br/>
              All rights reserved.</p>
              <div className="w-50">
          <i class="fa-brands fa-x-twitter" style={{"color": "#bbbcbe",  cursor: "pointer", marginRight: "10px"}}></i>
          <i class="fa-brands fa-square-facebook" style={{"color": "#bbbcbe",  cursor: "pointer", marginRight: "10px"}}></i>
          <i class="fa-brands fa-instagram" style={{"color": "#bbbcbe",  cursor: "pointer", marginRight: "10px"}}></i>
          <i class="fa-brands fa-linkedin-in" style={{"color": "#bbbcbe",  cursor: "pointer", marginRight: "10px"}}></i>
          </div>
          <div className="mt-3">
            <i class="fa-brands fa-youtube" style={{"color": "#bbbcbe",  cursor: "pointer", marginRight: "10px"}}></i>
          <i class="fa-brands fa-whatsapp" style={{"color": "#bbbcbe",  cursor: "pointer", marginRight: "10px"}}></i>
          <i class="fa-brands fa-telegram" style={{"color": "#bbbcbe",  cursor: "pointer", marginRight: "10px"}}></i>
          </div>
        </div>
        <div className="col">
          <h5 className="p-2">Account</h5>
          <ul className="list-unstyled">
        {accountLinks.map((link, index) => (
          <li className="text-muted p-2" key={index}>{link}</li>
        ))}
          </ul>
        </div>
        <div className="col">
          <h5 className="p-2">Support</h5>
          <ul className="list-unstyled">
        {supportLinks.map((link, index) => (
          <li className="text-muted p-2" key={index}>{link}</li>
        ))}
          </ul>
        </div>
         <div className="col">
          <h5 className="p-2">Company</h5>
          <ul className="list-unstyled">
        {companyLinks.map((link, index) => (
          <li className="text-muted p-2" key={index}>{link}</li>
        ))}
          </ul>
        </div>
         <div className="col">
          <h5 className="p-2">Quick links</h5>
          <ul className="list-unstyled">
        {quickLinks.map((link, index) => (
          <li className="text-muted p-2" key={index}>{link}</li>
        ))}
          </ul>
        </div>
      </div>


       <div className="row">

          <p className="text-muted small">Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.</p>

           <p className="text-muted small">Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances.</p>

          <p className="text-muted small">Smart Online Dispute Resolution | Grievances Redressal Mechanism.</p>

          <p className="text-muted small">Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

          <p className="text-muted small">Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

          <p className="text-muted small">India's largest broker based on networth as per NSE. NSE broker factsheet.</p>

          <p className="text-muted small">"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>

  <ul className="list-unstyled d-flex flex-wrap ms-5 ps-5">
  {legalLinks.map((link, index) => (
    <li className="text-muted pe-5" key={index}>{link}</li>
  ))}
</ul>


        </div>

      </div>
    </div>
  )
}

export default Footer
