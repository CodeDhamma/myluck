
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { NotFound } from './pages/NotFound'
import  {Home}  from './pages/Home'


import Myluck from './pages/Myluck'
import { StarBackground } from './components/StrarBackground'

function App() {
 

  return (
    <>
     <BrowserRouter>
    
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} /> 

      <Route path='/myluck' element={<Myluck />} />
  
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
