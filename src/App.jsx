import Nav from "./components/Nav"
import Header from "./components/Header"
import Popular from "./components/Popular"
import News from "./components/News"
import Newsletter from "./components/Newsletter"
import WhyUs from "./components/WhyUs"
import Footer from "./components/Footer"


function App() {

  return (
    <>
    <div className="wrapper">
    <Nav></Nav>
        </div>
    <div className="wrapper">
      <Header></Header>
    </div>
    <div className="wrapper">
      <Popular></Popular>
    </div>
    <div className="wrapper">
      <WhyUs></WhyUs>
    </div>
    <div className="wrapper">
      <News></News>
    </div>
    <div className="wrapper">
      <Newsletter></Newsletter>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App
