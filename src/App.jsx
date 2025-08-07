import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Ads1 } from './components/ads1'
import { Banner } from './components/banner'
import { Header } from './components/header'
import { ProductDisplay1 } from './components/product_display1'
import { ProductDisplay2 } from './components/product_display2'
import { Briefing } from './components/briefing'
import { Footer } from './components/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ads1 />
      <Banner />
      <Header />
      <ProductDisplay1 />
      <ProductDisplay2 />
      <Briefing />
      <Footer />
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1> 
    </>
  )
}

export default App
