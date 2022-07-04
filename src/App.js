import React from 'react'
import DrawerWrapper from './components/DrawerWrapper'
import Header from './components/Header'
import Slide01 from './components/Slide01'
import Slide02 from './components/Slide02'
import Slide03 from './components/Slide03'
import Slide04 from './components/Slide04'

function App() {
  return (
    <DrawerWrapper>
      <Header />
      <Slide01 />
      <Slide02 />
      <Slide03 />
      <Slide04 />
    </DrawerWrapper>
  )
}

export default App
