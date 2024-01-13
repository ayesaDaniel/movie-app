
import './globals.css'
import Slider from "./dummyslideshow/page"
import Footer from "./footer/page"
import Nav from './nav/page'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 

{
  
  return (
    <html lang="en">
      <body >
     
        <div className="slider-container">
          <Nav />
        <Slider />
        </div>
      {children}
      <Footer />
      </body>
    </html>
  )
}
