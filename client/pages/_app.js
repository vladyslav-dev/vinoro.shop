import '../styles/index.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../components/Slider/Slider.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
            font-family: 'Montserrat', sans-serif;
            font-size: 16px;
            height: auto;
        }
        
        body::-webkit-scrollbar {background-color:#fff;width:16px}
        body::-webkit-scrollbar-track {background-color:#fff}
        body::-webkit-scrollbar-thumb {background-color:#BBBBBB;border-radius:16px;border:4px solid #fff}
    `}</style>
    </>
  )
}

export default MyApp
