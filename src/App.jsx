import Companies from './component/companies/Companies'
import Features from './component/Features/Features'
import Herosection from './component/HeroSection/Herosection'
import Pricing from './component/Pricing/Pricing'
import Text from './component/text-component/text'
import Navbar from './Navbar + footer/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Companies />
      <Text text="Features" headingText='Revolutionary Features'/>
      <Features />
      <Pricing />
    </div>
  )
}

export default App