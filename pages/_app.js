import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Header from '../components/sections/header'
import Footer from '../components/sections/footer'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="bg-gradient-to-r dark:from-gray-700 dark:to-gray-600 from-slate-100 to-slate-400">
        <Header />
        <Component {...pageProps}/>
        <Footer />
      </div>
    </ThemeProvider>

  )
}

export default MyApp