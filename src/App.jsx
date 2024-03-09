import { useEffect, useState } from "react"
import { Header } from "./assets/Components/Header"
import { ZipCodeInput } from "./assets/Components/Zip Code Area"
import { Footer } from "./assets/Components/Footer"

import { api } from "./assets/api/api"


function App() {

 

  return (
    <>
      <Header />
      <ZipCodeInput />
      <Footer />
    </>
  )
}

export default App
