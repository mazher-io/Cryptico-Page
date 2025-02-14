import Companies from './component/companies/Companies'
import Cta from './component/cta/Cta';
import Features from './component/Features/Features'
import Herosection from './component/HeroSection/Herosection'
import Pricing from './component/Pricing/Pricing'
import Text from './component/text-component/text.jsx';

import Footer from './Navbar + footer/Footer/Footer'
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
      <Cta />
      <Footer />
    </div>
  )
}

export default App