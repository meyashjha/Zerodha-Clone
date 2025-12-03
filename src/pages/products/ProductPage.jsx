import Hero from "./Hero"
import LeftImg from "./LeftImg"
import RightImg from "./RightImg"
import Universe from "./Universe"

const ProductPage = () => {

  return (
    <div>
      <Hero/>
      <LeftImg imgpath="/media/kite.png" heading="Kite" para="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." />

      <RightImg imgpath="public/media/console.png" heading="Console" para="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." />

      <LeftImg imgpath="public/media/coin.png" heading="Coin" para="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." />

      <RightImg imgpath="public/media/kiteconnect.png" heading="Kite Connect API" para="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." />

      <LeftImg imgpath="public/media/varsity.png" heading="Varsity mobile" para="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." />

      <h5 className="text-center text-muted"> Want to know more about our technology stack? Check out the <a href="" className="text-decoration-none">Zerodha.tech</a> blog.</h5>
      <Universe />
    </div>
  )
}

export default ProductPage
