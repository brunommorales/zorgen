import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './Paginas/Inicio'
import Banner from './components/Banner'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Approutes() {
  return (
    <BrowserRouter>
      <Banner />
      <Header />

      <Routes>
        <Route index element={<Inicio />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}