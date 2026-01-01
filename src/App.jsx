import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import NavBoard from './Components/NavBoard'

const App = () => {
  const [category , setcategory] = useState("general");
  return (
    <div>
      <Navbar setcategory = {setcategory} />
      <NavBoard category = {category} />
    </div>
  )
}

export default App
